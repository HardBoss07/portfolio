import YouTubeWrapper from "@/app/components/YoutubeWrapper";

export default function CalculatorVideo() {
    return (
        <YouTubeWrapper>
            <div className="video-wrapper">
                <iframe
                    src="https://www.youtube.com/embed/8ZWF9i-qoWk"
                    title="Simple Java Calculator"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </div>
        </YouTubeWrapper>
    );
}