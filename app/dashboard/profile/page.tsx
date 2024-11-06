"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ProfileSettings() {
  const [profileData, setProfileData] = useState({
    username: "",
    fullName: "",
    email: "",
    tagline: "",
    location: "",
    miniBio: "",
    avatar: null as File | null,
    socialLinks: {
      github: "",
      twitter: "",
      linkedin: "",
      website: "",
    },
    resume: null as File | null,
  });

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white">Profile Settings</h2>
        <p className="text-zinc-400">Manage your profile information</p>
      </div>

      <form className="space-y-6">
        {/* Avatar Upload */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">
            Profile Picture
          </label>
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-zinc-800 flex items-center justify-center">
              {profileData.avatar ? (
                <img
                  src={URL.createObjectURL(profileData.avatar)}
                  alt="Avatar preview"
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                <span className="text-zinc-400">No image</span>
              )}
            </div>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setProfileData((prev) => ({ ...prev, avatar: file }));
                }
              }}
              className="max-w-[250px] bg-zinc-800 border-zinc-700"
            />
          </div>
        </div>

        {/* Basic Info */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Username</label>
            <Input
              placeholder="your-username"
              value={profileData.username}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
              className="bg-zinc-800 border-zinc-700"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Full Name</label>
            <Input
              placeholder="John Doe"
              value={profileData.fullName}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  fullName: e.target.value,
                }))
              }
              className="bg-zinc-800 border-zinc-700"
            />
          </div>
        </div>

        {/* Contact & Location */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Email</label>
            <Input
              type="email"
              placeholder="john@example.com"
              value={profileData.email}
              onChange={(e) =>
                setProfileData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="bg-zinc-800 border-zinc-700"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Location</label>
            <Input
              placeholder="City, Country"
              value={profileData.location}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  location: e.target.value,
                }))
              }
              className="bg-zinc-800 border-zinc-700"
            />
          </div>
        </div>

        {/* Tagline & Bio */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Tagline</label>
          <Input
            placeholder="Full-stack Developer & Open Source Enthusiast"
            value={profileData.tagline}
            onChange={(e) =>
              setProfileData((prev) => ({ ...prev, tagline: e.target.value }))
            }
            className="bg-zinc-800 border-zinc-700"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Mini Bio</label>
          <Textarea
            placeholder="Tell us about yourself"
            value={profileData.miniBio}
            onChange={(e) =>
              setProfileData((prev) => ({ ...prev, miniBio: e.target.value }))
            }
            rows={4}
            className="bg-zinc-800 border-zinc-700"
          />
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <label className="text-sm font-medium text-white">Social Links</label>
          <div className="grid gap-4">
            {Object.entries(profileData.socialLinks).map(
              ([platform, value]) => (
                <div key={platform} className="flex items-center gap-2">
                  <div className="w-24 text-sm text-zinc-400 capitalize">
                    {platform}
                  </div>
                  <Input
                    placeholder={`Your ${platform} URL`}
                    value={value}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        socialLinks: {
                          ...prev.socialLinks,
                          [platform]: e.target.value,
                        },
                      }))
                    }
                    className="bg-zinc-800 border-zinc-700"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Resume Upload */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Resume</label>
          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setProfileData((prev) => ({ ...prev, resume: file }));
              }
            }}
            className="bg-zinc-800 border-zinc-700"
          />
          <p className="text-xs text-zinc-400">
            Upload your resume (PDF, DOC, or DOCX)
          </p>
        </div>

        <Button type="submit" className="w-full">
          Save Changes
        </Button>
      </form>
    </div>
  );
}
