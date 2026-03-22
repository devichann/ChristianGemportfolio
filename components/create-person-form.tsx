"use client";

import { useState, FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Plus } from "lucide-react";

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

interface CreatePersonFormProps {
  onSubmit: (data: PersonFormState) => Promise<void>;
}

export function CreatePersonForm({ onSubmit }: CreatePersonFormProps) {
  const [form, setForm] = useState<PersonFormState>(emptyFormState);
  const [isSaving, setIsSaving] = useState(false);

  async function handleCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSaving(true);
    try {
      await onSubmit(form);
      setForm(emptyFormState);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Add Person
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleCreate}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <Input
            placeholder="First name"
            value={form.firstName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, firstName: e.target.value }))
            }
            required
          />
          <Input
            placeholder="Last name"
            value={form.lastName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, lastName: e.target.value }))
            }
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
            required
          />
          <Input
            placeholder="Job title"
            value={form.jobTitle}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, jobTitle: e.target.value }))
            }
            required
          />
          <Input
            placeholder="Department"
            value={form.department}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, department: e.target.value }))
            }
            required
          />
          <Input
            placeholder="Avatar URL (optional)"
            value={form.avatarUrl}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, avatarUrl: e.target.value }))
            }
          />
          <div className="md:col-span-2">
            <Button type="submit" disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Create Person"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
