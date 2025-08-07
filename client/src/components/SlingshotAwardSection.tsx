import videoFile from "@assets/slingshot-video.mp4";
import thumbnailImage from "@assets/slingshot-screenshot.png";

export default function SlingshotAwardSection() {
  return (
    <section className="relative py-8 bg-white flex flex-col items-center overflow-hidden">
      <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center">
        {/* Video - 2/3 width */}
        <div className="md:w-2/3 w-full flex items-center justify-center py-8 px-4">
          <video
            className="rounded-xl shadow-xl w-full h-auto object-cover"
            controls
            poster={thumbnailImage}
            data-testid="slingshot-video"
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Text Content - 1/3 width */}
        <div className="md:w-1/3 w-full flex flex-col justify-center items-center px-8 py-8 gap-6 text-center">
          <h2 className="text-3xl font-bold mb-1 text-[#ffc103]" data-testid="slingshot-title">National Geographic
          Slingshot Challenge</h2>
          <p className="text-lg font-semibold text-[#ffc002]" data-testid="slingshot-award">Honorable Mention</p>
          <p className="text-base text-[#0f141a]" data-testid="slingshot-author">By Kelsey Sweetland, Founder of Authors for Nature</p>
        </div>
      </div>
    </section>
  );
}