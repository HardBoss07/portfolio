import Image from "next/image";
import ProjectVideo from "@/components/project/ProjectVideo";
import { ProjectMetadata } from "@/types/project";
import ProjectButton from "@/components/UI/ProjectButton";

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
      <section className="section-padding">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-4 border-primary pb-8 mb-gap-lg gap-gap-md">
          <h1 className="uppercase m-0">{metadata.title}</h1>
          <ProjectButton link={metadata.repoLink} type="repository" />
        </div>
        <p className="text-body-lg mb-gap-lg leading-relaxed">
          {metadata.intro}
        </p>

        {metadata.hasImage && (
          <div className="w-full border-2 border-outline-variant rounded-xl overflow-hidden mb-gap-lg shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all hover:border-primary">
            <Image
              src={`/assets/images/${metadata.slug}.png`}
              alt={`${metadata.title} screenshot`}
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        <div className="space-y-gap-md prose-invert">{children}</div>

        {(metadata.downloadLink || metadata.liveDemoLink) && (
          <div className="mt-gap-lg space-y-gap-lg">
            {metadata.downloadLink && (
              <section className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-outline-variant pb-2 gap-4">
                  <h2 className="uppercase m-0 text-headline-h2">Try It Out</h2>
                  <ProjectButton link={metadata.downloadLink} type="download" />
                </div>
                <p className="mt-2">
                  {metadata.downloadText ||
                    "If you want to try this app out for yourself, click on the download button and install from GitHub."}
                </p>
              </section>
            )}

            {metadata.liveDemoLink && (
              <section className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-outline-variant pb-2 gap-4">
                  <h2 className="uppercase m-0 text-headline-h2">Live Demo</h2>
                  <ProjectButton link={metadata.liveDemoLink} type="liveDemo" />
                </div>
                <p className="mt-2">
                  {metadata.liveDemoText ||
                    "You can try the web app yourself by clicking on the button."}
                </p>
              </section>
            )}
          </div>
        )}

        {metadata.videoYoutubeId && (
          <section className="mt-gap-lg space-y-gap-md">
            <h2 className="border-l-4 border-primary pl-4 uppercase">
              Video Demonstration
            </h2>
            <ProjectVideo
              youtubeId={metadata.videoYoutubeId}
              title={metadata.title}
            />
          </section>
        )}
      </section>
    </main>
  );
}
