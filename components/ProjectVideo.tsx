import React from "react";
import YouTubeWrapper from "./YoutubeWrapper";
import styles from "./ProjectVideo.module.css";
import { ProjectVideoProps } from "@/types/components/ProjectVideo";

export default function ProjectVideo({ youtubeId, title }: ProjectVideoProps) {
  return (
    <YouTubeWrapper>
      <div className={styles.videoWrapper}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          className={styles.iframe}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </YouTubeWrapper>
  );
}
