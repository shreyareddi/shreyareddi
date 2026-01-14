import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "5C Matchmaking",
    description: "Matchmaking app for students of the Claremont Colleges, connecting students to friends and romantic matches",
    image: "/projects/5cmatchmaking.mov",
    tags: ["React", "Express.js", "PostgreSQL", "Socket.io"],
    demoUrl: "https://drive.google.com/file/d/1MAO9-WBPuyF23J87erLO4ZlgbhuOvVpE/view?usp=sharing",
  },
  {
    id: 2,
    title: "Who's That Pokemon?",
    description:
      "Guessing game where users identify Pokemon based on silhouetted images",
    image: "/projects/pokemon.png",
    tags: ["JavaScript", "HTML/CSS"],
    demoUrl: "https://shreyareddi.github.io/whos-that-pokemon/"
  },
];

export const ProjectsSection = () => {
  const isVideo = (url) => {
    return /\.(mp4|mov|webm|ogg)$/i.test(url);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          featured <span className="text-primary"> work </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          some of my recent projects!
        </p>
        </div>
        

        <div className="flex flex-col gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden flex-shrink-0">
                {isVideo(project.image) ? (
                  <video
                    src={project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>

              <div className="p-6 flex flex-col justify-center md:w-3/5">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/shreyareddi"
          >
            look @ my github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
