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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b-2 border-primary pb-6 mb-8 gap-6">
          <div>
            <h1 className="uppercase font-headline font-extrabold text-[clamp(2.5rem,7vw,4.5rem)] leading-none text-white m-0">
              {metadata.title}
            </h1>
          </div>
          <ProjectButton link={metadata.repoLink} type="repository" />
        </div>
        <p className="text-body-lg mb-8 leading-relaxed text-text-secondary max-w-3xl border-l-2 border-primary pl-4 py-1">
          {metadata.intro}
        </p>

        {metadata.hasImage && (
          <div className="w-full border-2 border-outline-variant bg-surface-container overflow-hidden mb-8 hover:border-primary transition-colors">
            <Image
              src={`/assets/images/${metadata.slug}.png`}
              alt={`${metadata.title} screenshot`}
              width={1200}
              height={800}
              className="w-full h-auto object-cover contrast-110"
              priority
            />
          </div>
        )}

        <div className="space-y-6 prose-invert">{children}</div>

        {(metadata.downloadLink || metadata.liveDemoLink) && (
          <div className="mt-8 space-y-6">
            {metadata.downloadLink && (
              <section className="space-y-3">
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
              <section className="space-y-3">
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
          <section className="mt-8 space-y-6">
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
