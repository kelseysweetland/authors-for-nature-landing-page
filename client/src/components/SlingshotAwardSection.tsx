import { Card, CardContent } from "@/components/ui/card";

export default function SlingshotAwardSection() {
  return (
    <section className="relative py-32 bg-white flex flex-col items-center overflow-hidden min-h-[700px]">
      {/* National Geographic Logo in Corner */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Natgeologo.svg"
        alt="National Geographic Logo"
        className="absolute top-10 right-10 w-32 h-auto opacity-95 bg-transparent"
        style={{ pointerEvents: 'none', background: 'none' }}
      />

      <Card className="max-w-4xl w-full mx-auto bg-white shadow-2xl rounded-3xl flex flex-col md:flex-row p-0 overflow-hidden border-0 min-h-[420px]">
        {/* Video & Thumbnail */}
        <div className="md:w-1/2 w-full flex items-center justify-center bg-white py-12 px-4">
          <div className="rounded-xl shadow-xl w-full h-72 bg-nature-paper flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="text-4xl mb-2">🎥</div>
              <div className="text-sm">Slingshot Challenge Video</div>
              <div className="text-xs mt-1">Video will be available soon</div>
            </div>
          </div>
        </div>
        {/* Minimal Text Content */}
        <CardContent className="md:w-1/2 w-full flex flex-col justify-center items-center px-8 py-12 gap-6 text-center">
          <h2 className="text-3xl font-bold text-nature-primary mb-1" data-testid="slingshot-title">
            Slingshot Challenge
          </h2>
          <p className="text-lg text-muted-foreground font-semibold" data-testid="slingshot-award">
            Honorable Mention, National Geographic
          </p>
          <p className="text-base text-muted-foreground" data-testid="slingshot-author">
            By Kelsey Sweetland, Authors for Nature
          </p>
        </CardContent>
      </Card>
    </section>
  );
}