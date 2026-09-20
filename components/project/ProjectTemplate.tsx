import Image from 'next/image';
import ProjectVideo from '@/components/project/ProjectVideo';
import type { ProjectMetadata } from '@/types/project';
import ProjectButton from '@/components/UI/ProjectButton';

interface ProjectTemplateProps {
  metadata: ProjectMetadata;
  children: React.ReactNode;
}

export default function ProjectTemplate({ metadata, children }: ProjectTemplateProps) {
  return (
    <main>
      <section className="section-padding">
        <div className="border-primary mb-8 flex flex-col items-start justify-between gap-6 border-b-2 pb-6 sm:flex-row sm:items-end">
          <div>
            <h1 className="font-headline m-0 text-[clamp(2.5rem,7vw,4.5rem)] leading-none font-extrabold text-white uppercase">
              {metadata.title}
            </h1>
          </div>
          <ProjectButton link={metadata.repoLink} type="repository" />
        </div>
        <p className="text-body-lg text-text-secondary border-primary mb-8 max-w-3xl border-l-2 py-1 pl-4 leading-relaxed">
          {metadata.intro}
        </p>

        {metadata.hasImage && (
          <div className="border-outline-variant bg-surface-container hover:border-primary mb-8 w-full overflow-hidden border-2 transition-colors">
            <Image
              src={`/assets/images/${metadata.slug}.png`}
              alt={`${metadata.title} screenshot`}
              width={1200}
              height={800}
              className="h-auto w-full object-cover contrast-110"
              priority
            />
          </div>
        )}

        <div className="prose-invert space-y-6">{children}</div>

        {(metadata.downloadLink || metadata.liveDemoLink) && (
          <div className="mt-8 space-y-6">
            {metadata.downloadLink && (
              <section className="space-y-3">
                <div className="border-outline-variant flex flex-col items-start justify-between gap-4 border-b-2 pb-2 sm:flex-row sm:items-center">
                  <h2 className="text-headline-h2 m-0 uppercase">Try It Out</h2>
                  <ProjectButton link={metadata.downloadLink} type="download" />
                </div>
                <p className="mt-2">
                  {metadata.downloadText ||
                    'If you want to try this app out for yourself, click on the download button and install from GitHub.'}
                </p>
              </section>
            )}

            {metadata.liveDemoLink && (
              <section className="space-y-3">
                <div className="border-outline-variant flex flex-col items-start justify-between gap-4 border-b-2 pb-2 sm:flex-row sm:items-center">
                  <h2 className="text-headline-h2 m-0 uppercase">Live Demo</h2>
                  <ProjectButton link={metadata.liveDemoLink} type="liveDemo" />
                </div>
                <p className="mt-2">
                  {metadata.liveDemoText ||
                    'You can try the web app yourself by clicking on the button.'}
                </p>
              </section>
            )}
          </div>
        )}

        {metadata.videoYoutubeId && (
          <section className="mt-8 space-y-6">
            <h2 className="border-primary border-l-4 pl-4 uppercase">Video Demonstration</h2>
            <ProjectVideo youtubeId={metadata.videoYoutubeId} title={metadata.title} />
          </section>
        )}
      </section>
    </main>
  );
}
