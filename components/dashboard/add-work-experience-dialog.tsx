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
import { useState } from "react";

export function AddWorkExperienceDialog() {
  const [work, setWork] = useState({
    company: "",
    position: "",
    period: "",
    responsibilities: [""],
  });

  const addResponsibility = () => {
    setWork((prev) => ({
      ...prev,
      responsibilities: [...prev.responsibilities, ""],
    }));
  };

  const updateResponsibility = (index: number, value: string) => {
    const newResponsibilities = [...work.responsibilities];
    newResponsibilities[index] = value;
    setWork((prev) => ({
      ...prev,
      responsibilities: newResponsibilities,
    }));
  };

  const removeResponsibility = (index: number) => {
    setWork((prev) => ({
      ...prev,
      responsibilities: prev.responsibilities.filter((_, i) => i !== index),
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full mt-4">
          Add Work Experience
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-white">
        <DialogHeader>
          <DialogTitle>Add Work Experience</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200">Company</label>
            <Input
              placeholder="Company name"
              value={work.company}
              onChange={(e) => setWork({ ...work, company: e.target.value })}
              className="bg-zinc-800 border-zinc-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200">
              Position
            </label>
            <Input
              placeholder="Your role"
              value={work.position}
              onChange={(e) => setWork({ ...work, position: e.target.value })}
              className="bg-zinc-800 border-zinc-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200">Period</label>
            <Input
              placeholder="e.g. 2020 - Present"
              value={work.period}
              onChange={(e) => setWork({ ...work, period: e.target.value })}
              className="bg-zinc-800 border-zinc-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-200">
              Responsibilities
            </label>
            {work.responsibilities.map((responsibility, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  placeholder="Describe your responsibility"
                  value={responsibility}
                  onChange={(e) => updateResponsibility(index, e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
                {work.responsibilities.length > 1 && (
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeResponsibility(index)}
                    className="shrink-0"
                  >
                    ×
                  </Button>
                )}
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={addResponsibility}
              className="mt-2 bg-zinc-800 border-zinc-700 text-zinc-200 hover:bg-zinc-700 hover:text-white"
            >
              Add Responsibility
            </Button>
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Add Experience</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
