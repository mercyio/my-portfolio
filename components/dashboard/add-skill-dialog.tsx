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

export function AddSkillDialog() {
  const [skill, setSkill] = useState({
    name: "",
    description: "",
    projects_completed: "",
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full mt-4">
          Add New Skill
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-white">
        <DialogHeader>
          <DialogTitle>Add Skill</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200">
              Skill Name
            </label>
            <Input
              placeholder="e.g. Frontend Development"
              value={skill.name}
              onChange={(e) => setSkill({ ...skill, name: e.target.value })}
              className="bg-zinc-800 border-zinc-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200">
              Description
            </label>
            <Textarea
              placeholder="Brief description of your skill"
              value={skill.description}
              onChange={(e) =>
                setSkill({ ...skill, description: e.target.value })
              }
              className="bg-zinc-800 border-zinc-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200">
              Projects Completed
            </label>
            <Input
              placeholder="e.g. 10+"
              value={skill.projects_completed}
              onChange={(e) =>
                setSkill({ ...skill, projects_completed: e.target.value })
              }
              className="bg-zinc-800 border-zinc-700 text-white"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Add Skill</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
