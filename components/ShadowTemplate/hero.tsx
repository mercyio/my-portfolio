import { ShadowTemplate } from "@/data/templates/shadow";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden rounded-xl p-8 backdrop-blur-sm bg-black/30 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 z-0" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <div className="w-48 h-48 relative">
          <Image
            src={`/${ShadowTemplate.heroImage.url}`}
            alt={ShadowTemplate.fullName}
            fill
            className="rounded-full object-cover shadow-xl"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">{ShadowTemplate.fullName}</h1>
          <p className="text-xl text-gray-300 mb-4">{ShadowTemplate.tagline}</p>
          <p className="text-gray-400 mb-6">{ShadowTemplate.miniBio}</p>
          {/* <SocialLinks className="justify-center md:justify-start" /> */}
        </div>
      </div>
    </div>
  );
};