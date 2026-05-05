import YouTubeWrapper from "./YoutubeWrapper";

interface ProjectVideoProps {
  youtubeId: string;
  title: string;
}

export default function ProjectVideo({ youtubeId, title }: ProjectVideoProps) {
  return (
    <YouTubeWrapper>
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </YouTubeWrapper>
  );
}
