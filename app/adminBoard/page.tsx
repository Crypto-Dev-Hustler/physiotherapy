"use client";

import { useEffect, useState } from "react";
import { Trash } from "lucide-react";
import { FormData } from "@/types";

export default function AdminPage() {
  const [forms, setForms] = useState<FormData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(""); // <-- New state

  const fetchData = async (): Promise<void> => {
    try {
      setLoading(true);
      const res = await fetch("/api/list");
      if (!res.ok) throw new Error("Failed to fetch data");
      const data: FormData[] = await res.json();
      setForms(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this appointment?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/delete?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      await fetchData();
    } catch (err) {
      console.error(err);
      alert("Error deleting appointment");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter based on search term
  const filteredForms = forms.filter((entry) =>
    entry.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 flex flex-col items-center">
      <div className="text-3xl w-full h-28 font-medium text-white bg-blue-600 rounded-t-lg mb-1 mt-8 pl-4 pt-4">
        Admin Dashboard
      </div>

      <div className="w-full my-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid grid-cols-6 bg-blue-600 w-full text-white rounded-b-lg p-4 mb-3 font-semibold">
        <p>Name</p>
        <p>Age</p>
        <p>Date</p>
        <p>Time</p>
        <p>Phone</p>
        <p>Action</p>
      </div>

      {loading ? (
        <p className="text-gray-500 mt-4">Loading...</p>
      ) : error ? (
        <p className="text-red-500 mt-4">{error}</p>
      ) : filteredForms.length === 0 ? (
        <p className="text-gray-500 mt-4">No appointments found.</p>
      ) : (
        <div className="w-full space-y-2">
          {filteredForms.map((entry) => (
            <div
              key={entry._id}
              className="grid grid-cols-6 bg-blue-50 text-black rounded-lg p-4 items-center"
            >
              <p>{entry.name}</p>
              <p>{entry.age}</p>
              <p>{entry.date}</p>
              <p>{entry.time}</p>
              <p>{entry.phone}</p>
              <button
                onClick={() => handleDelete(entry._id)}
                className="text-red-700 hover:text-red-400"
              >
                <Trash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
