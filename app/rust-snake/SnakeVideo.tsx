export default function SnakeVideo() {
    return (
        <div className="video-wrapper">
            <iframe
                src="https://www.youtube.com/embed/tzuUV8q-_Yw" title="Rust Snake"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
        </div>
    );
}