"use server";

import pkg from "@prisma/client";

const PrismaClientCtor = (pkg as unknown as {
  PrismaClient: new (...args: unknown[]) => PrismaClientInstance;
}).PrismaClient;

type PrismaClientInstance = {
  person: {
    findMany: (...args: unknown[]) => Promise<unknown[]>;
    create: (...args: unknown[]) => Promise<unknown>;
    update: (...args: unknown[]) => Promise<unknown>;
    delete: (...args: unknown[]) => Promise<unknown>;
  };
};

const prisma = new PrismaClientCtor();

export interface PersonInput {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  department: string;
  avatarUrl?: string;
}

export interface PersonRecord {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  department: string;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

function normalizePersonInput(input: PersonInput): PersonInput {
  return {
    firstName: input.firstName.trim(),
    lastName: input.lastName.trim(),
    email: input.email.trim().toLowerCase(),
    jobTitle: input.jobTitle.trim(),
    department: input.department.trim(),
    avatarUrl: input.avatarUrl?.trim() || undefined,
  };
}

function assertRequiredFields(input: PersonInput) {
  if (
    !input.firstName ||
    !input.lastName ||
    !input.email ||
    !input.jobTitle ||
    !input.department
  ) {
    throw new Error("Please fill in all required fields.");
  }
}

function getFriendlyError(error: unknown): string {
  if (
    error instanceof Error &&
    (error.message.includes("P2002") ||
      error.message.toLowerCase().includes("unique constraint"))
  ) {
    return "This email already exists. Please use a different email.";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong. Please try again.";
}

export async function getAllPeople(): Promise<PersonRecord[]> {
  try {
    const results = await prisma.person.findMany({
      orderBy: [{ firstName: "asc" }, { lastName: "asc" }],
      take: 100,
    });
    return results as PersonRecord[];
  } catch (error) {
    console.error("Error fetching people:", error);
    return [];
  }
}

export async function searchPeople(searchTerm: string): Promise<PersonRecord[]> {
  if (!searchTerm.trim()) {
    return [];
  }

  try {
    const results = await prisma.person.findMany({
      where: {
        OR: [
          {
            firstName: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            lastName: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            jobTitle: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            department: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: [{ firstName: "asc" }, { lastName: "asc" }],
      take: 50, // Limit results to 50
    });

    return results as PersonRecord[];
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
}

export async function createPerson(input: PersonInput): Promise<PersonRecord> {
  try {
    const normalizedInput = normalizePersonInput(input);
    assertRequiredFields(normalizedInput);

    return (await prisma.person.create({
      data: normalizedInput,
    })) as PersonRecord;
  } catch (error) {
    const message = getFriendlyError(error);
    console.error("Create person error:", error);
    throw new Error(message);
  }
}

export async function updatePerson(
  id: number,
  input: PersonInput
): Promise<PersonRecord> {
  try {
    const normalizedInput = normalizePersonInput(input);
    assertRequiredFields(normalizedInput);

    return (await prisma.person.update({
      where: { id },
      data: normalizedInput,
    })) as PersonRecord;
  } catch (error) {
    const message = getFriendlyError(error);
    console.error("Update person error:", error);
    throw new Error(message);
  }
}

export async function deletePerson(id: number) {
  try {
    await prisma.person.delete({
      where: { id },
    });
  } catch (error) {
    const message = getFriendlyError(error);
    console.error("Delete person error:", error);
    throw new Error(message);
  }
}
