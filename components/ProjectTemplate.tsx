import Image from "next/image";
import RepositoryButton from "./RepositoryButton";
import DownloadButton from "./DownloadButton";
import LiveDemoButton from "./LiveDemoButton";
import ProjectVideo from "./ProjectVideo";
import { ProjectMetadata } from "@/types/project";

interface ProjectTemplateProps {
  metadata: ProjectMetadata;
  children: React.ReactNode;
}

export default function ProjectTemplate({
  metadata,
  children,
}: ProjectTemplateProps) {
  return (
    <main>
      <div className="result-header">
        <h1>{metadata.title}</h1>
        <RepositoryButton link={metadata.repoLink} />
      </div>
      <p>{metadata.intro}</p>

      {metadata.hasImage && (
        <div className="project-image-container my-8">
          <Image
            src={`/assets/images/${metadata.slug}.png`}
            alt={`${metadata.title} screenshot`}
            width={1200}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </div>
      )}

      {children}

      {metadata.downloadLink && (
        <>
          <div className="result-header">
            <h1>Try it out yourself!</h1>
            <DownloadButton link={metadata.downloadLink} />
          </div>
          <p className="mt-2">
            {metadata.downloadText ||
              "If you want to try this app out for yourself, click on the download button and install from GitHub."}
          </p>
        </>
      )}

      {metadata.liveDemoLink && (
        <>
          <div className="result-header">
            <h1>Live Demonstration</h1>
            <LiveDemoButton link={metadata.liveDemoLink} />
          </div>
          <p className="mt-2">
            {metadata.liveDemoText ||
              "You can try the web app yourself by clicking on the button."}
          </p>
        </>
      )}

      {metadata.videoYoutubeId && (
        <>
          <h1 className="mt-8">Video Demonstration</h1>
          <ProjectVideo
            youtubeId={metadata.videoYoutubeId}
            title={metadata.title}
          />
        </>
      )}
    </main>
  );
}
