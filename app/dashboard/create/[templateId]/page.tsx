"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function CustomizeTemplate({
  params,
}: {
  params: { templateId: string };
}) {
  const [templateData, setTemplateData] = useState({
    title: "",
    description: "",
    features: {
      showProjects: true,
      showSkills: true,
      showSocials: true,
      showWork: true,
    },
  });

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Customize Your Portfolio
        </h2>
        <p className="text-zinc-400">
          Customize the {params.templateId} template to match your style
        </p>
      </div>

      <form className="space-y-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">
            Basic Information
          </h3>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">
              Portfolio Title
            </label>
            <Input
              placeholder="My Portfolio"
              value={templateData.title}
              onChange={(e) =>
                setTemplateData((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">
              Description
            </label>
            <Textarea
              placeholder="A brief description of your portfolio"
              value={templateData.description}
              onChange={(e) =>
                setTemplateData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </div>
        </div>

        {/* Features Toggle */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Features</h3>
          <div className="space-y-4">
            {Object.entries(templateData.features).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <label className="text-sm font-medium text-white">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </label>
                <Switch
                  checked={value}
                  onCheckedChange={(checked) =>
                    setTemplateData((prev) => ({
                      ...prev,
                      features: {
                        ...prev.features,
                        [key]: checked,
                      },
                    }))
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Button type="button" variant="outline" className="w-full">
            Preview
          </Button>
          <Button type="submit" className="w-full">
            Create Portfolio
          </Button>
        </div>
      </form>
    </div>
  );
}
