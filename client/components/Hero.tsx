import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.youtube.com/embed/-ZeW7YEiwC0?autoplay=1&mute=1&loop=1&playlist=-ZeW7YEiwC0&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          className="absolute inset-0 w-full h-full object-cover"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          style={{ pointerEvents: 'none' }}
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-black/50 to-redtools-red/30"></div>
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-redtools-red/30 rotate-12"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-redtools-red/20 rotate-45"></div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 border border-redtools-red/25 -rotate-12"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 border border-redtools-red/15 rotate-30"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8">
          Find Clarity
          <br />
          <span className="text-redtools-red">in the Chaos</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Turn real estate market noise into actionable insights with
          data-driven intelligence.
        </p>
        <Button
          size="lg"
          className="bg-redtools-red hover:bg-redtools-red-dark text-white text-lg px-12 py-4 rounded-full font-semibold"
        >
          Coming soon
        </Button>
      </div>
    </section>
  );
}
