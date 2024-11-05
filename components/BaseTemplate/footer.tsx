import { AppSetting } from "@/data/appSetting";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer className="container mx-auto px-4 mt-16 pt-8 border-t border-zinc-800">
      <div className="flex justify-between items-center text-zinc-400 text-sm">
        <p>
          Copyright © {AppSetting.copyrightDate} • {AppSetting.appName}
        </p>
        <div className="flex items-center gap-1">
          <span>Built with Next.js</span>
          <span>•</span>
          <span>
            Inspired by{" "}
            <Link
              href={AppSetting.inspiredBy}
              className="hover:underline decoration-wavy decoration-1"
              target="_blank"
            >
              {AppSetting.inspiredBy}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};
