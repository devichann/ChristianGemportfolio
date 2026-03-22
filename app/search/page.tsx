"use client";

import { useState, FormEvent, useEffect } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import {
  createPerson,
  deletePerson,
  getAllPeople,
  searchPeople,
  updatePerson,
} from "@/app/actions/search";
import { Navbar } from "@/components/navbar";
import { SearchBar } from "@/components/search-bar";
import { PersonCard } from "@/components/person-card";
import { CreatePersonForm } from "@/components/create-person-form";

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  department: string;
  avatarUrl?: string | null;
}

interface PersonFormData {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  department: string;
  avatarUrl: string;
}

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allPeople, setAllPeople] = useState<Person[]>([]);
  const [results, setResults] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

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
        toast.error("Failed to load people.");
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
      toast.error("Search failed. Please try again.");
      setResults(allPeople);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCreate(data: PersonFormData) {
    try {
      await createPerson(data);
      await refreshPeople(searchTerm);
      toast.success("Person created successfully.");
    } catch (error) {
      console.error("Create failed:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to create person."
      );
      throw error;
    }
  }

  async function handleUpdate(personId: number, data: PersonFormData) {
    setIsSaving(true);
    try {
      await updatePerson(personId, data);
      await refreshPeople(searchTerm);
      toast.success("Person updated successfully.");
    } catch (error) {
      console.error("Update failed:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to update person."
      );
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete(personId: number) {
    setIsSaving(true);
    try {
      await deletePerson(personId);
      await refreshPeople(searchTerm);
      toast.success("Person deleted successfully.");
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to delete person."
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Search Bar */}
          <SearchBar
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onSearch={handleSearch}
            isLoading={isLoading}
          />

          {/* Create Form */}
          <CreatePersonForm onSubmit={handleCreate} />

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
                    <PersonCard
                      key={person.id}
                      person={person}
                      isSaving={isSaving}
                      onUpdate={handleUpdate}
                      onDelete={handleDelete}
                    />
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
