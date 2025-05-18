import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-10xl max-h-10xl mx-auto text-center z-10">
        <div>
          <div
            className="relative flex flex-col items-center justify-center h-[500px] bg-none md:bg-[url('/journal.png')] md:bg-contain md:bg-center md:bg-no-repeat"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight whitespace-nowrap opacity-0 animate-fade-in">
              <span>hi, i'm</span>
              <span className="text-primary ml-2">shreya</span>
              <span className="text-gradient ml-2">reddi ☻</span>
            </h1>

            <div className="text-lg md:text-xl text-muted-foreground mx-auto mt-4 opacity-0 animate-fade-in-delay-2">
              <b>software dev + designer</b>
              <br />
              i build products that are functional and creative.
            </div>
          </div>
          <div className="pt-4 flex flex-col items-center gap-2 opacity-0 animate-fade-in-delay-3">
              <a href="#projects" className="cosmic-button mb-2">
                look @ my work
              </a>
              <div className="flex flex-col items-center">
                <span className="text-sm text-primary mb-2">or scroll</span>
                <a
                  href="#about"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                >
                  <ArrowDown size={20} />
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
