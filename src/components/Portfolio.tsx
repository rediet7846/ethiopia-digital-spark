import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import portfolioSolar from "@/assets/portfolio-solar.png";
import portfolioBoutique from "@/assets/portfolio-boutique.png";

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "Solar Love",
      description: t("portfolio.solar.description"),
      image: portfolioSolar,
      link: "https://solar-heart-glow.lovable.app/",
      tags: ["E-commerce", "Solar Energy", "Responsive Design"],
    },
    {
      id: 2,
      title: "Elegance Boutique",
      description: t("portfolio.boutique.description"),
      image: portfolioBoutique,
      link: "https://lova-boutique-vibe.lovable.app/",
      tags: ["E-commerce", "Fashion", "Luxury Retail"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t("portfolio.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group gradient-card rounded-xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                >
                  {t("portfolio.viewProject")}
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;