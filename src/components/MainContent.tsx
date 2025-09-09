import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const MainContent = () => {
  const projects = [
    {
      title: "E-commerce App",
      description:
        "Aplicación web completa con React, Node.js y MongoDB para gestión de productos y ventas.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Dashboard Analytics",
      description:
        "Panel de control interactivo con visualización de datos y métricas en tiempo real.",
      technologies: ["React", "D3.js", "Firebase"],
    },
    {
      title: "Weather App",
      description:
        "Aplicación meteorológica con geolocalización y pronósticos de 7 días.",
      technologies: ["React Native", "API Weather", "Maps"],
    },
  ];

  const skills = [
    { name: "React", img: "/skills/react.svg" },
    { name: "TypeScript", img: "/skills/typescript.svg" },
    { name: "TailwindCSS", img: "/skills/tailwind.svg" },
    { name: "Node.js", img: "/skills/node.svg" },
    { name: "Python", img: "/skills/python.svg" },
    { name: "MongoDB", img: "/skills/mongodb.svg" },
    { name: "PostgreSQL", img: "/skills/postgres.svg" },
    { name: "Docker", img: "/skills/docker.svg" },
    { name: "AWS", img: "/skills/aws.svg" },
    { name: "Git", img: "/skills/git.svg" },
    { name: "Figma", img: "/skills/figma.svg" },
    { name: "Photoshop", img: "/skills/photoshop.svg" },
    { name: "Angular", img: "/skills/angular.svg" },
    { name: "Excel", img: "/skills/excel.svg" },
    { name: "Java", img: "/skills/java.svg" },
    { name: "Git Hub", img: "/skills/github.svg" },
    { name: "Spring Boot", img: "/skills/spring.svg" },
  ];

  const repeatedSkills = [...skills, ...skills]; // duplicamos para scroll infinito

  const education = [
    {
      degree: "Licenciatura en Ciencias de la Informática",
      institution: "Instituto Politecnico Nacional - UPIICSA",
      year: "2021 - 2025",
      description:
        "Especialización en desarrollo web y arquitectura de software",
      logo: "/ipn.webp",
    },
    {
      degree:
        "Oracle Next Education (ONE) – Fase 2, Trayecto 6: Back-end (Java, Spring Boot, POO).",
      institution: "Oracle + Alura Latam",
      year: "2023",
      description: "Certificación en Back-end (Java, Spring Boot, POO) ",
      logo: "/oracle.png",
    },
    {
      degree: "Certificación Full Stack Developer",
      institution: "freeCodeCamp",
      year: "2022",
      description: "Desarrollo web completo con tecnologías modernas",
      logo: "/freecode.jpg",
    },
  ];

  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="portfolio-section py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Texto a la izquierda */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-6 order-2 md:order-1 text-center md:text-left"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.3 }, // animación escalonada
              },
            }}
          >
            {/* Subtítulo */}
            <motion.div
              className="inline-block px-4 py-2 bg-accent/10 rounded-full text-[hsl(201,34%,59%)] font-medium mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {"¡Bienvenido a mi portafolio!".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

      {/* Título con colores distintos */}
<motion.h1
  className="text-4xl md:text-6xl font-bold leading-tight"
  variants={{
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 },
    },
  }}
>
  {"Hola, soy ".split("").map((char, i) => (
    <motion.span
      key={i}
      style={{ color: "#103244" }} // azul fuerte
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {char}
    </motion.span>
  ))}

  {"Luis Moreno".split("").map((char, i) => (
    <motion.span
      key={`name-${i}`}
      style={{ color: "hsl(201,34%,59%)" }} // azul más claro
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {char}
    </motion.span>
  ))}
</motion.h1>


            {/* Párrafo */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl text-justify"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Soy un desarrollador de software enfocado en{" "}
              <strong>backend</strong>, con 1 año de experiencia construyendo
              sistemas eficientes y escalables. Me especializo en{" "}
              <strong>Java</strong> y <strong>Spring Boot</strong>, y tengo
              experiencia en <strong>SQL</strong> y en la creación de sistemas
              de migración de bases de datos. Además, cuento con conocimientos
              en <strong>frontend</strong> usando React, TypeScript y
              TailwindCSS.
            </motion.p>
          </motion.div>

          {/* Imagen a la derecha */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <motion.img
              src="/profile.png"
              alt="Luis Moreno"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="portfolio-section py-16 px-6 md:px-12 max-w-7xl mx-auto bg-gray-100"
      >
        <h2 className="section-title mb-1">Sobre mí</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed  text-justify">
              Soy un desarrollador de software enfocado en{" "}
              <strong>backend</strong>, con 1 año de experiencia construyendo
              sistemas eficientes y escalables. Me especializo en{" "}
              <strong>Java</strong> y <strong>Spring Boot</strong>, y tengo
              experiencia en <strong>SQL</strong> y en la creación de sistemas
              de migración de bases de datos. Además, cuento con conocimientos
              en <strong>frontend</strong> para desarrollar aplicaciones web
              modernas y responsivas usando tecnologías como React, TypeScript y
              TailwindCSS.
            </p>

            <p className="text-lg leading-relaxed text-justify">
              Mi pasión por el desarrollo web comenzó durante mis estudios
              universitarios y ha crecido constantemente. Disfruto resolviendo
              problemas complejos y transformando ideas en soluciones digitales
              elegantes y funcionales.
            </p>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Ciudad de México</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} />
                <span>disponible para proyectos</span>
              </div>
            </div>
          </div>
          <div className="bg-accent/5 p-8 rounded-2xl text-justify">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Experiencia destacada
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>+3 proyectos web completados exitosamente</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Especialista en el desarrollo web </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Enfoque en UX/UI y diseño responsivo</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="portfolio-section py-16 px-6 md:px-12 max-w-7xl mx-auto bg-card/10"
      >
        <h2 className="section-title mb-12 text-center md:text-left">
          Educación
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-accent hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-4 mb-4">
                {/* Logo de la escuela */}
                {edu.logo && (
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-20 h-20 object-contain rounded-full border border-border/30"
                  />
                )}

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary">
                    {edu.degree}
                  </h3>
                  <span className="text-accent font-medium">{edu.year}</span>
                </div>
              </div>

              <p className="text-lg text-accent font-semibold mb-1">
                {edu.institution}
              </p>
              <p className="text-muted-foreground">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="portfolio-section py-16 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <h2 className="section-title mb-12">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card flex flex-col justify-between p-6"
            >
              <div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="mb-4 opacity-90">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-accent-foreground/20 text-accent-foreground px-3 py-1 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Logo de GitHub fijo abajo a la derecha */}
              <div className="flex justify-end mt-4">
                <img
                  src="/skills/github.svg"
                  alt="GitHub"
                  className="w-18 h-18 md:w-16 md:h-16 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="portfolio-section py-16 px-6 md:px-12 max-w-7xl mx-auto bg-card/30 overflow-hidden"
      >
        <h2 className="section-title mb-12 text-center">Habilidades</h2>

        {/* Carrusel SOLO en pantallas medianas en adelante */}
        <motion.div
          className="hidden md:flex gap-6"
          animate={{ x: ["0%", "-130%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        >
          {repeatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-32 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform snap-center"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <span className="text-sm font-medium text-foreground text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Grid estatico SOLO en celular */}
        <div className="grid grid-cols-2 gap-6 md:hidden">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-full h-32 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="max-w-[60px] max-h-[60px] object-contain mb-2"
              />
              <span className="text-sm font-medium text-foreground text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="portfolio-section py-16 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <h2 className="section-title mb-12 text-center">Contacto</h2>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground mb-6">
              ¿Interesado en trabajar juntos? Me encantaría conocer más sobre tu
              proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="luis_bull@outlook.com"
                className="flex items-center gap-2 btn-secondary"
              >
                <Mail size={20} />
                luis_bull@outlook.com
              </a>
              <a
                href="tel:+525550601828"
                className="flex items-center gap-2 btn-primary"
              >
                <Phone size={20} />
                +52 55 50601828
              </a>
            </div>
          </div>

          <form className="space-y-6 bg-card p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Luis Moreno
                </label>
                <input
                  type="text"
                  className="w-full p-4 border border-border rounded-lg bg-input focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="w-full p-4 border border-border rounded-lg bg-input focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Asunto
              </label>
              <input
                type="text"
                className="w-full p-4 border border-border rounded-lg bg-input focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Mensaje
              </label>
              <textarea
                rows={6}
                className="w-full p-4 border border-border rounded-lg bg-input focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                placeholder="Cuéntame más sobre tu proyecto..."
              ></textarea>
            </div>
            <button className="w-full btn-primary text-center">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
