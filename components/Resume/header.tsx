import { UserResumeData } from "../../data/resume";

export default function ResumeHeader() {
  return (
    <header className="mb-8 flex flex-1 flex-wrap justify-between items-start">
      <div className="mb-4">
        <h1 className="text-3xl font-serif font-black mb-2">
          {UserResumeData.name}
        </h1>
        <p className="text-base">{UserResumeData.tagline}</p>
      </div>
      <div className="flex flex-col items-start max-w-[300px]">
        {/* for this socials , try to limit to 5 max if the design breaks */}
        {Object.entries(UserResumeData.socials).map(([name, { url }]) => {
          const href = url.includes("@") ? `mailto:${url}` : url;
          return (
            <a href={href} key={name}>
              <b>{name}:</b> &nbsp;
              <span className="underline decoration-blue-600">{url}</span>
            </a>
          );
        })}
      </div>
    </header>
  );
}
