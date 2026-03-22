"use client";

import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import {
  createPerson,
  deletePerson,
  getAllPeople,
  searchPeople,
  updatePerson,
} from "@/app/actions/search";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Loader2, Pencil, Trash2 } from "lucide-react";

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  department: string;
  avatarUrl?: string | null;
}

interface PersonFormState {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  department: string;
  avatarUrl: string;
}

const emptyFormState: PersonFormState = {
  firstName: "",
  lastName: "",
  email: "",
  jobTitle: "",
  department: "",
  avatarUrl: "",
};

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allPeople, setAllPeople] = useState<Person[]>([]);
  const [results, setResults] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [createForm, setCreateForm] = useState<PersonFormState>(emptyFormState);
  const [editingPersonId, setEditingPersonId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<PersonFormState>(emptyFormState);
  const [actionError, setActionError] = useState<string>("");
  const [actionSuccess, setActionSuccess] = useState<string>("");

  async function refreshPeople(activeSearchTerm: string) {
    const people = await getAllPeople();
    setAllPeople(people);

    if (activeSearchTerm.trim()) {
      const searched = await searchPeople(activeSearchTerm);
      setResults(searched);
      return;
    }

    setResults(people);
  }

  // Load all people on mount
  useEffect(() => {
    async function loadAllPeople() {
      try {
        await refreshPeople("");
      } catch (error) {
        console.error("Failed to load people:", error);
        setAllPeople([]);
        setResults([]);
      } finally {
        setIsInitialLoading(false);
      }
    }
    loadAllPeople();
  }, []);

  async function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (searchTerm.trim()) {
        const data = await searchPeople(searchTerm);
        setResults(data);
      } else {
        setResults(allPeople);
      }
    } catch (error) {
      console.error("Search failed:", error);
      setResults(allPeople);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setActionError("");
    setActionSuccess("");
    setIsSaving(true);

    try {
      await createPerson(createForm);
      setCreateForm(emptyFormState);
      await refreshPeople(searchTerm);
      setActionSuccess("Person created successfully.");
    } catch (error) {
      console.error("Create failed:", error);
      setActionError(
        error instanceof Error ? error.message : "Failed to create person."
      );
    } finally {
      setIsSaving(false);
    }
  }

  function startEdit(person: Person) {
    setActionError("");
    setActionSuccess("");
    setEditingPersonId(person.id);
    setEditForm({
      firstName: person.firstName,
      lastName: person.lastName,
      email: person.email,
      jobTitle: person.jobTitle,
      department: person.department,
      avatarUrl: person.avatarUrl || "",
    });
  }

  function cancelEdit() {
    setEditingPersonId(null);
    setEditForm(emptyFormState);
  }

  async function handleUpdate(personId: number) {
    setActionError("");
    setActionSuccess("");
    setIsSaving(true);

    try {
      await updatePerson(personId, editForm);
      await refreshPeople(searchTerm);
      setEditingPersonId(null);
      setEditForm(emptyFormState);
      setActionSuccess("Person updated successfully.");
    } catch (error) {
      console.error("Update failed:", error);
      setActionError(
        error instanceof Error ? error.message : "Failed to update person."
      );
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete(personId: number) {
    const confirmed = window.confirm("Delete this person?");
    if (!confirmed) {
      return;
    }

    setActionError("");
    setActionSuccess("");
    setIsSaving(true);

    try {
      await deletePerson(personId);
      await refreshPeople(searchTerm);
      setActionSuccess("Person deleted successfully.");
    } catch (error) {
      console.error("Delete failed:", error);
      setActionError(
        error instanceof Error ? error.message : "Failed to delete person."
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold">Person Search</h1>
              <div className="flex gap-4">
                <Link
                  href="/"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/search"
                  className="text-sm font-medium text-foreground"
                >
                  Search
                </Link>
              </div>
            </div>
            <UserButton />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Search Form */}
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Search People
              </h2>
              <p className="text-muted-foreground mt-2">
                Find people by name, job title, or email address
              </p>
            </div>

            <form onSubmit={handleSearch} className="flex gap-4">
              <Input
                type="text"
                placeholder="Search by name, job title, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Searching...
                  </>
                ) : (
                  "Search"
                )}
              </Button>
            </form>

            {actionError ? (
              <p className="text-sm text-red-600">{actionError}</p>
            ) : null}

            {actionSuccess ? (
              <p className="text-sm text-green-700">{actionSuccess}</p>
            ) : null}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Add Person</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="First name"
                  value={createForm.firstName}
                  onChange={(e) =>
                    setCreateForm((prev) => ({ ...prev, firstName: e.target.value }))
                  }
                  required
                />
                <Input
                  placeholder="Last name"
                  value={createForm.lastName}
                  onChange={(e) =>
                    setCreateForm((prev) => ({ ...prev, lastName: e.target.value }))
                  }
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={createForm.email}
                  onChange={(e) =>
                    setCreateForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                />
                <Input
                  placeholder="Job title"
                  value={createForm.jobTitle}
                  onChange={(e) =>
                    setCreateForm((prev) => ({ ...prev, jobTitle: e.target.value }))
                  }
                  required
                />
                <Input
                  placeholder="Department"
                  value={createForm.department}
                  onChange={(e) =>
                    setCreateForm((prev) => ({ ...prev, department: e.target.value }))
                  }
                  required
                />
                <Input
                  placeholder="Avatar URL (optional)"
                  value={createForm.avatarUrl}
                  onChange={(e) =>
                    setCreateForm((prev) => ({ ...prev, avatarUrl: e.target.value }))
                  }
                />
                <div className="md:col-span-2">
                  <Button type="submit" disabled={isSaving}>
                    {isSaving ? "Saving..." : "Create Person"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-4">
            {isInitialLoading ? (
              <div className="text-center py-12">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground">Loading people...</p>
              </div>
            ) : results.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {searchTerm
                    ? "No results found. Try a different search term."
                    : "No people found."}
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Showing {results.length} result
                  {results.length !== 1 ? "s" : ""}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {results.map((person) => (
                    <Card key={person.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={person.avatarUrl ?? undefined} alt={`${person.firstName} ${person.lastName}`} />
                              <AvatarFallback>
                                {person.firstName.charAt(0)}
                                {person.lastName.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-base">
                                {person.firstName} {person.lastName}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground">
                                {person.jobTitle}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              type="button"
                              variant="secondary"
                              size="sm"
                              onClick={() => startEdit(person)}
                              disabled={isSaving}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDelete(person.id)}
                              disabled={isSaving}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {editingPersonId === person.id ? (
                          <div className="space-y-3">
                            <Input
                              placeholder="First name"
                              value={editForm.firstName}
                              onChange={(e) =>
                                setEditForm((prev) => ({
                                  ...prev,
                                  firstName: e.target.value,
                                }))
                              }
                            />
                            <Input
                              placeholder="Last name"
                              value={editForm.lastName}
                              onChange={(e) =>
                                setEditForm((prev) => ({
                                  ...prev,
                                  lastName: e.target.value,
                                }))
                              }
                            />
                            <Input
                              type="email"
                              placeholder="Email"
                              value={editForm.email}
                              onChange={(e) =>
                                setEditForm((prev) => ({
                                  ...prev,
                                  email: e.target.value,
                                }))
                              }
                            />
                            <Input
                              placeholder="Job title"
                              value={editForm.jobTitle}
                              onChange={(e) =>
                                setEditForm((prev) => ({
                                  ...prev,
                                  jobTitle: e.target.value,
                                }))
                              }
                            />
                            <Input
                              placeholder="Department"
                              value={editForm.department}
                              onChange={(e) =>
                                setEditForm((prev) => ({
                                  ...prev,
                                  department: e.target.value,
                                }))
                              }
                            />
                            <Input
                              placeholder="Avatar URL"
                              value={editForm.avatarUrl}
                              onChange={(e) =>
                                setEditForm((prev) => ({
                                  ...prev,
                                  avatarUrl: e.target.value,
                                }))
                              }
                            />
                            <div className="flex gap-2">
                              <Button
                                type="button"
                                onClick={() => handleUpdate(person.id)}
                                disabled={isSaving}
                              >
                                {isSaving ? "Saving..." : "Save"}
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                onClick={cancelEdit}
                                disabled={isSaving}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div>
                              <p className="text-xs text-muted-foreground">Department</p>
                              <p className="text-sm font-medium">{person.department}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Email</p>
                              <a
                                href={`mailto:${person.email}`}
                                className="text-sm text-blue-600 hover:underline"
                              >
                                {person.email}
                              </a>
                            </div>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
