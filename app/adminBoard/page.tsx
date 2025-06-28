"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Search,
  Calendar,
  User,
  Phone,
  Trash2,
  Loader2,
  X,
  Menu,
} from "lucide-react";
import DoctorProfilePage from "@/components/profile/page";

interface Appointment {
  id: number;
  name: string;
  age: string;
  phone: string;
  time: string;
  date: string;
  avatar: string;
  createdAt?: string;
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"appointments" | "profile">(
    "appointments"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [allAppointments, setAllAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deletingIds, setDeletingIds] = useState<number[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fetch appointments from API
  const fetchAppointments = async (search?: string) => {
    try {
      if (search && search.trim() !== "") {
        setSearching(true);
      } else {
        setLoading(true);
      }

      setError(null);

      const url = "/api/list";
      const response = await fetch(url);
      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      const result = await response.json();
      console.log("Response data:", result.data);

      if (!response.ok) {
        throw new Error(result.error || "Failed to fetch appointments");
      }

      if (result.success) {
        const allData = result.data;
        setAllAppointments(allData);

        if (search && search.trim() !== "") {
          const filteredData = allData.filter(
            (appointment: Appointment) =>
              appointment.name.toLowerCase().includes(search.toLowerCase()) ||
              appointment.phone.toLowerCase().includes(search.toLowerCase())
          );
          setAppointments(filteredData);
        } else {
          setAppointments(allData);
        }
      } else {
        throw new Error(result.error || "Failed to fetch appointments");
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setError(
        error instanceof Error ? error.message : "Failed to fetch appointments"
      );
    } finally {
      setLoading(false);
      setSearching(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchAppointments(searchTerm);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleDeleteAppointment = async (appointmentId: number) => {
    if (!window.confirm("Are you sure you want to delete this appointment?")) {
      return;
    }

    setDeletingIds((prev) => [...prev, appointmentId]);

    try {
      const response = await fetch(`/api/delete?id=${appointmentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to delete appointment: ${response.statusText}`);
      }

      setAppointments((prev) => prev.filter((apt) => apt.id !== appointmentId));
      setAllAppointments((prev) =>
        prev.filter((apt) => apt.id !== appointmentId)
      );
      alert("Appointment deleted successfully!");
    } catch (error) {
      console.error("Error deleting appointment:", error);
      alert("Failed to delete appointment. Please try again.");
    } finally {
      setDeletingIds((prev) => prev.filter((id) => id !== appointmentId));
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const highlightSearchTerm = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text;

    const regex = new RegExp(`(${searchTerm.trim()})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const getOriginalSequenceNumbers = () => {
    if (!searchTerm.trim() || appointments.length === 0) return [];

    return appointments.map((appointment) => {
      const originalIndex = allAppointments.findIndex(
        (apt) => apt.id === appointment.id
      );
      return originalIndex + 1;
    });
  };

  const originalSequenceNumbers = getOriginalSequenceNumbers();

  // Sidebar content component
  const SidebarContent = () => (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">PhysioHealth</h2>
      </div>
      <nav className="p-4 space-y-2 flex-1">
        <Button
          variant={activeTab === "appointments" ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => {
            setActiveTab("appointments");
            setSidebarOpen(false);
          }}
        >
          <Calendar className="mr-3 h-4 w-4" />
          Appointments
        </Button>
        <Button
          variant={activeTab === "profile" ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => {
            setActiveTab("profile");
            setSidebarOpen(false);
          }}
        >
          <User className="mr-3 h-4 w-4" />
          Profile
        </Button>
      </nav>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 bg-white shadow-sm border-r">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 lg:p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Mobile menu button */}
              <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="lg:hidden text-white hover:bg-blue-500 p-2"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
              </Sheet>
              <h1 className="text-xl lg:text-2xl font-semibold capitalize truncate">
                {activeTab}
              </h1>
            </div>

            <div className="flex items-center space-x-2 lg:space-x-4 min-w-0">
              {/* Search Input - Hidden on very small screens, shown on sm+ */}
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search by name or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-10 bg-blue-500 border-blue-400 text-white placeholder-blue-200 focus:bg-blue-400 focus:border-blue-300 w-48 lg:w-64"
                />
                {searchTerm && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-blue-200 hover:text-white hover:bg-blue-400"
                    onClick={clearSearch}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
                {searching && (
                  <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                    <Loader2 className="h-4 w-4 animate-spin text-blue-200" />
                  </div>
                )}
              </div>

              {/* User Avatar */}
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-blue-500 text-white">
                    A
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm hidden md:block">Admin</span>
              </div>
            </div>
          </div>

          {/* Mobile Search - Shown only on very small screens */}
          <div className="relative mt-4 sm:hidden">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search by name or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10 bg-blue-500 border-blue-400 text-white placeholder-blue-200 focus:bg-blue-400 focus:border-blue-300 w-full"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-blue-200 hover:text-white hover:bg-blue-400"
                onClick={clearSearch}
              >
                <X className="h-3 w-3" />
              </Button>
            )}
            {searching && (
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                <Loader2 className="h-4 w-4 animate-spin text-blue-200" />
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="flex-1 p-4 lg:p-6 overflow-auto">
          {activeTab === "appointments" ? (
            <div>
              {/* Search Results Info */}
              {searchTerm && !loading && !searching && (
                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-700">
                    {appointments.length > 0 ? (
                      <>
                        Found <strong>{appointments.length}</strong> appointment
                        {appointments.length !== 1 ? "s" : ""} matching "
                        <strong>{searchTerm}</strong>" at position
                        {appointments.length !== 1 ? "s" : ""}:{" "}
                        <strong>#{originalSequenceNumbers.join(", #")}</strong>
                      </>
                    ) : (
                      <>
                        <strong>Not found:</strong> No appointments found
                        matching "<strong>{searchTerm}</strong>"
                      </>
                    )}
                  </p>
                </div>
              )}

              {/* Loading State */}
              {loading && (
                <div className="flex items-center justify-center h-64">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
                    <span className="text-gray-600">
                      Loading appointments...
                    </span>
                  </div>
                </div>
              )}

              {/* Error State */}
              {error && !loading && (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <p className="text-red-600 mb-4">{error}</p>
                    <Button
                      onClick={() => fetchAppointments(searchTerm)}
                      variant="outline"
                    >
                      Try Again
                    </Button>
                  </div>
                </div>
              )}

              {/* Empty State */}
              {!loading && !error && appointments.length === 0 && (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">
                      {searchTerm
                        ? "No appointments found"
                        : "No appointments yet"}
                    </p>
                    {searchTerm ? (
                      <div className="space-y-2">
                        <p className="text-sm text-gray-500">
                          Try adjusting your search terms
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={clearSearch}
                        >
                          Clear Search
                        </Button>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">
                        Appointments will appear here when scheduled
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Appointments Grid - Fully Responsive */}
              {!loading && !error && appointments.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {appointments.map((appointment) => {
                    const originalIndex = allAppointments.findIndex(
                      (apt) => apt.id === appointment.id
                    );
                    const originalSequenceNumber = originalIndex + 1;

                    return (
                      <Card
                        key={appointment.id}
                        className="hover:shadow-md transition-shadow"
                      >
                        <CardContent className="p-4 relative">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-3 min-w-0 flex-1">
                              <Avatar className="h-10 w-10 flex-shrink-0">
                                <AvatarImage
                                  src={appointment.avatar || "/placeholder.svg"}
                                />
                                <AvatarFallback className="bg-gray-200">
                                  {appointment.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="min-w-0 flex-1">
                                <h3 className="font-medium text-gray-900 truncate">
                                  {highlightSearchTerm(
                                    appointment.name,
                                    searchTerm
                                  )}
                                </h3>
                                <p className="text-sm text-gray-500">
                                  {appointment.age}
                                </p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 disabled:opacity-50 flex-shrink-0"
                              onClick={() =>
                                handleDeleteAppointment(appointment.id)
                              }
                              disabled={deletingIds.includes(appointment.id)}
                              title={
                                deletingIds.includes(appointment.id)
                                  ? "Deleting..."
                                  : "Delete appointment"
                              }
                            >
                              {deletingIds.includes(appointment.id) ? (
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-red-500 border-t-transparent" />
                              ) : (
                                <Trash2 className="h-4 w-4" />
                              )}
                            </Button>
                          </div>

                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <Phone className="h-3 w-3 mr-2 flex-shrink-0" />
                              <span className="truncate">
                                {highlightSearchTerm(
                                  appointment.phone,
                                  searchTerm
                                )}
                              </span>
                            </div>
                            <div className="text-sm text-gray-600">
                              <div className="font-medium">
                                {appointment.time}
                              </div>
                              <div className="text-xs text-gray-500">
                                {appointment.date}
                              </div>
                            </div>
                          </div>

                          {/* Original Sequence Number */}
                          <div className="absolute bottom-2 right-2 bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                            #{originalSequenceNumber}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div className="flex-1 overflow-auto">
              <DoctorProfilePage />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
