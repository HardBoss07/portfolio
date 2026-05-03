import React from "react";
import Image from "next/image";
import RepositoryButton from "./RepositoryButton";
import DownloadButton from "./DownloadButton";
import LiveDemoButton from "./LiveDemoButton";
import ProjectVideo from "./ProjectVideo";
import styles from "@/styles/components/ProjectTemplate/styles.css";
import { ProjectTemplateProps } from "@/types/components/ProjectTemplate";

export default function ProjectTemplate({
  metadata,
  children,
}: ProjectTemplateProps) {
  return (
    <main>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>{metadata.title}</h1>
        <RepositoryButton link={metadata.repoLink} />
      </div>
      <p>{metadata.intro}</p>

      {metadata.hasImage && (
        <div className={styles.imageContainer}>
          <Image
            src={`/assets/images/${metadata.slug}.png`}
            alt={`${metadata.title} screenshot`}
            width={1200}
            height={800}
            className={styles.projectImage}
          />
        </div>
      )}

      {children}

      {metadata.downloadLink && (
        <>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Try it out yourself!</h1>
            <DownloadButton link={metadata.downloadLink} />
          </div>
          <p className={styles.description}>
            {metadata.downloadText ||
              "If you want to try this app out for yourself, click on the download button and install from GitHub."}
          </p>
        </>
      )}

      {metadata.liveDemoLink && (
        <>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Live Demonstration</h1>
            <LiveDemoButton link={metadata.liveDemoLink} />
          </div>
          <p className={styles.description}>
            {metadata.liveDemoText ||
              "You can try the web app yourself by clicking on the button."}
          </p>
        </>
      )}

      {metadata.videoYoutubeId && (
        <>
          <h1 className={styles.demoHeader}>Video Demonstration</h1>
          <ProjectVideo
            youtubeId={metadata.videoYoutubeId}
            title={metadata.title}
          />
        </>
      )}
    </main>
  );
}
