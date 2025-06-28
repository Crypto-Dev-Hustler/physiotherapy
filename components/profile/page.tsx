"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Edit,
  Save,
  X,
} from "lucide-react";
import { useState } from "react";

export default function DoctorProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@physioclinic.com",
    phone: "+1 (555) 123-4567",
    address: "123 Health Street, Medical District, NY 10001",
    specialization: "Physical Therapy",
    experience: "8 years",
    bio: "Experienced physical therapist specializing in sports injuries and rehabilitation. Passionate about helping patients recover and achieve their fitness goals.",
    qualifications: [
      "DPT - Doctor of Physical Therapy",
      "Certified Orthopedic Manual Therapist",
      "Sports Physical Therapy Certification",
    ],
    joinDate: "January 2020",
  });

  const handleSave = () => {
    // Here you would typically save to an API
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset changes if needed
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Header */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <CardTitle className="text-xl lg:text-2xl">
              Doctor Profile
            </CardTitle>
            <div className="flex gap-2">
              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)} size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button onClick={handleSave} size="sm">
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button onClick={handleCancel} variant="outline" size="sm">
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Avatar Section */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <Avatar className="h-24 w-24 lg:h-32 lg:w-32">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="text-lg lg:text-xl">
                  SJ
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full lg:w-auto bg-transparent"
                >
                  Change Photo
                </Button>
              )}
            </div>

            {/* Basic Info */}
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  {isEditing ? (
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) =>
                        setProfile({ ...profile, name: e.target.value })
                      }
                      className="mt-1"
                    />
                  ) : (
                    <div className="flex items-center mt-1 text-sm">
                      <User className="h-4 w-4 mr-2 text-gray-500" />
                      {profile.name}
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) =>
                        setProfile({ ...profile, email: e.target.value })
                      }
                      className="mt-1"
                    />
                  ) : (
                    <div className="flex items-center mt-1 text-sm">
                      <Mail className="h-4 w-4 mr-2 text-gray-500" />
                      {profile.email}
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={profile.phone}
                      onChange={(e) =>
                        setProfile({ ...profile, phone: e.target.value })
                      }
                      className="mt-1"
                    />
                  ) : (
                    <div className="flex items-center mt-1 text-sm">
                      <Phone className="h-4 w-4 mr-2 text-gray-500" />
                      {profile.phone}
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="specialization">Specialization</Label>
                  {isEditing ? (
                    <Input
                      id="specialization"
                      value={profile.specialization}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          specialization: e.target.value,
                        })
                      }
                      className="mt-1"
                    />
                  ) : (
                    <div className="flex items-center mt-1 text-sm">
                      <Award className="h-4 w-4 mr-2 text-gray-500" />
                      {profile.specialization}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                {isEditing ? (
                  <Input
                    id="address"
                    value={profile.address}
                    onChange={(e) =>
                      setProfile({ ...profile, address: e.target.value })
                    }
                    className="mt-1"
                  />
                ) : (
                  <div className="flex items-start mt-1 text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span>{profile.address}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Experience & Bio */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Professional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="experience">Experience</Label>
              {isEditing ? (
                <Input
                  id="experience"
                  value={profile.experience}
                  onChange={(e) =>
                    setProfile({ ...profile, experience: e.target.value })
                  }
                  className="mt-1"
                />
              ) : (
                <div className="flex items-center mt-1 text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  {profile.experience}
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="bio">Bio</Label>
              {isEditing ? (
                <Textarea
                  id="bio"
                  value={profile.bio}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                  className="mt-1 min-h-[100px]"
                  placeholder="Tell us about yourself..."
                />
              ) : (
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  {profile.bio}
                </p>
              )}
            </div>

            <div>
              <Label>Member Since</Label>
              <div className="flex items-center mt-1 text-sm">
                <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                {profile.joinDate}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Qualifications */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Qualifications & Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {profile.qualifications.map((qualification, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Award className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{qualification}</span>
                </div>
              ))}
            </div>
            {isEditing && (
              <Button
                variant="outline"
                size="sm"
                className="mt-4 w-full bg-transparent"
              >
                Add Qualification
              </Button>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">150+</div>
              <div className="text-sm text-gray-600">Patients Treated</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">4.8</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">8</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
