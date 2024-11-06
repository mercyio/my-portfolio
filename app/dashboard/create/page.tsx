import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const templates = [
  {
    id: "base",
    name: "Base Template",
    description: "A clean, minimal portfolio template",
    image: "/templates/base.png",
  },
  // Add more templates here
];

export default function CreatePortfolio() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white">Choose a Template</h2>
        <p className="text-zinc-400">Select a template for your portfolio</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <div
            key={template.id}
            className="rounded-lg border border-white/10 overflow-hidden group"
          >
            <div className="aspect-video relative">
              <Image
                src={template.image}
                alt={template.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-white">{template.name}</h3>
              <p className="text-sm text-zinc-400">{template.description}</p>
              <Button asChild className="w-full mt-4">
                <Link href={`/dashboard/create/${template.id}`}>
                  Use this template
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
