"use client";

import { useEffect, useState } from "react";
import RepositoryButton from "./RepositoryButton";
import DownloadButton from "./DownloadButton";
import LiveDemoButton from "./LiveDemoButton";
import Code from "./Code";
import ProjectVideo from "./ProjectVideo";
import { Project } from "@/types/project";

interface ProjectTemplateProps {
  project: Project;
}

export default function ProjectTemplate({ project }: ProjectTemplateProps) {
  const [sections, setSections] = useState(project.sections);

  useEffect(() => {
    // Fetch external snippets if needed
    const fetchSnippets = async () => {
      const updatedSections = await Promise.all(
        project.sections.map(async (section) => {
          if (section.filePath && !section.code) {
            try {
              const res = await fetch(section.filePath);
              const code = await res.text();
              return { ...section, code };
            } catch (err) {
              console.error(`Failed to fetch snippet from ${section.filePath}`, err);
              return section;
            }
          }
          return section;
        })
      );
      setSections(updatedSections);
    };

    fetchSnippets();
  }, [project.sections]);

  return (
    <main>
      <div className="result-header">
        <h1>{project.title}</h1>
        <RepositoryButton link={project.repoLink} />
      </div>
      <p>{project.description}</p>

      {sections.map((section, idx) => (
        <div key={idx} className="result">
          <h2>{section.title}</h2>
          <div>
            <p>{section.description}</p>
            {section.code && (
              <Code language={section.language || "tsx"}>
                {section.code}
              </Code>
            )}
          </div>
        </div>
      ))}

      {project.downloadLink && (
        <>
          <div className="result-header">
            <h1>Try it out yourself!</h1>
            <DownloadButton link={project.downloadLink} />
          </div>
          <p className="mt-2">
            {project.downloadText ||
              "If you want to try this app out for yourself, click on the download button and install from GitHub."}
          </p>
        </>
      )}

      {project.liveDemoLink && (
        <>
          <div className="result-header">
            <h1>Live Demonstration</h1>
            <LiveDemoButton link={project.liveDemoLink} />
          </div>
          <p className="mt-2">
            {project.liveDemoText || "You can try the web app yourself by clicking on the button."}
          </p>
        </>
      )}

      {project.videoYoutubeId && (
        <>
          <h1>Video Demonstration</h1>
          <ProjectVideo youtubeId={project.videoYoutubeId} title={project.title} />
        </>
      )}
    </main>
  );
}
