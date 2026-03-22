"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Pencil, Trash2 } from "lucide-react";

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

interface PersonCardProps {
  person: Person;
  isSaving: boolean;
  onUpdate: (id: number, data: PersonFormState) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export function PersonCard({
  person,
  isSaving,
  onUpdate,
  onDelete,
}: PersonCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<PersonFormState>(emptyFormState);

  function startEdit() {
    setIsEditing(true);
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
    setIsEditing(false);
    setEditForm(emptyFormState);
  }

  async function handleSave() {
    await onUpdate(person.id, editForm);
    setIsEditing(false);
    setEditForm(emptyFormState);
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage
                src={person.avatarUrl ?? undefined}
                alt={`${person.firstName} ${person.lastName}`}
              />
              <AvatarFallback>
                {person.firstName.charAt(0)}
                {person.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base">
                {person.firstName} {person.lastName}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{person.jobTitle}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={startEdit}
              disabled={isSaving || isEditing}
            >
              <Pencil className="h-4 w-4" />
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  disabled={isSaving}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Person</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete{" "}
                    <strong>
                      {person.firstName} {person.lastName}
                    </strong>
                    ? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => onDelete(person.id)}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {isEditing ? (
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
                onClick={handleSave}
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
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                {person.email}
              </a>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
