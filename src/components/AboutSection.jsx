import { MousePointer, SquareTerminal, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left">
          about <span className="text-primary"> me! </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-lg space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              Passionate Tech Creator <br /> + Human-Centered Designer 
            </h3>

            <p className="text-muted-foreground">
              Currently studying Computer Science + Math @ Harvey Mudd College,
              with a concentration in Economics. I’ve worked on software and web 
              development projects, explored human-centered design, and taken on 
              various leadership roles. I'm always looking for creative ways to 
              bring these interests together ☻ 
            </p>

            <p className="text-muted-foreground">
              I'm passionate about developing solutions to problems that real users
              face, understanding the key needs and working from there. I'm eager to 
              learn new technologies/techniques from others as well as mentor and teach 
              my peers about the topics I'm skilled with!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://docs.google.com/document/d/1YS8Bd9DkkOOXuGVYIbPCDHvDeE_gRpX0EPxCWDRY5hk/edit?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MousePointer className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Software Engineer Intern @ Microsoft </h4>
                  <p className="text-muted-foreground">
                    Incoming Summer '25
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <SquareTerminal className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Software Engineer Intern @ Verizon </h4>
                  <p className="text-muted-foreground">
                    Summer '24
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-white" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Leadership </h4>
                  <p className="text-muted-foreground">
                    Harvey Mudd's Society of Women Engineers
                    <br /> Asian and Pacific Islander Mentorship Program
                    <br /> Notion Campus Leader
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
