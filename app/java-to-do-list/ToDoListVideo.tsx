import YouTubeWrapper from "@/app/components/YoutubeWrapper";

export default function ToDoListVideo() {
    return (
        <YouTubeWrapper>
            <div className="video-wrapper">
                <iframe
                    src="https://www.youtube.com/embed/MIE_N4qAD_s"
                    title="Java To Do List Application"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </div>
        </YouTubeWrapper>
    );
}