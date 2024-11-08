import { UserResumeData } from "../../data/resume";

export default function ResumeWorkExperience() {
  return (
    <>
      {UserResumeData.experience?.map((experience) => (
        <>
          <section className="mb-8">
            <div className="mb-2">
              <h3 className="font-bold text-xl text-blue-800">
                {experience.position}
              </h3>
              <p className="text-md font-semibold">
                {experience.company} | {experience.period}
              </p>
            </div>
            <div>
              {experience?.companyUrl && (
                <a
                  href={experience.companyUrl}
                  className="text-md text-black block text-sm font-semibold"
                >
                  Company Website:{" "}
                  <span className="underline decoration-blue-800">
                    {experience.companyUrl}
                  </span>
                </a>
              )}
              {experience?.projectUrl && (
                <a
                  href={experience.projectUrl}
                  className="text-md text-black block text-sm font-semibold"
                >
                  Project Website:{" "}
                  <span className="underline decoration-blue-800">
                    {experience.projectUrl}
                  </span>
                </a>
              )}
            </div>
            <p className="text-lg mb-4 mt-2">{experience.shortDescription}</p>
            <div className="text-sm mt-2">
              <ul className="list-disc pl-4 space-y-2">
                {experience?.responsibilities?.map((responsibility, index) => (
                  <li key={index} className="text-lg">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </>
      ))}
    </>
  );
}
