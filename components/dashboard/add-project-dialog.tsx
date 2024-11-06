"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function AddProjectDialog() {
  const [project, setProject] = useState({
    title: "",
    role: "",
    description: "",
    url: "",
    preview_image: "",
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full mt-4">
          Add New Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-white">
        <DialogHeader>
          <DialogTitle>Add Project</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200">
              Project Title
            </label>
            <Input className="bg-zinc-800 border-zinc-700 text-white" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200">Role</label>
            <Input className="bg-zinc-800 border-zinc-700 text-white" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200">
              Description
            </label>
            <Textarea className="bg-zinc-800 border-zinc-700 text-white" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200">
              Project URL
            </label>
            <Input className="bg-zinc-800 border-zinc-700 text-white" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200">
              Preview Image
            </label>
            <Input
              type="file"
              className="bg-zinc-800 border-zinc-700 text-white"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Add Project</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
