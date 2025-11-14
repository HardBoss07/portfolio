import YouTubeWrapper from "@/app/components/YoutubeWrapper";

export default function BarcodeVideo() {
    return (
        <YouTubeWrapper>
            <div className="video-wrapper">
                <iframe
                    src="https://www.youtube.com/embed/TzrhP36xslU"
                    title="Barcode Reader and Generator"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </div>
        </YouTubeWrapper>
    );
}