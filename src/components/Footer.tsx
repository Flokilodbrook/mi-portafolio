
import { Github, Linkedin, Twitter, Facebook, Instagram, MessageCircle, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/Flokilodbrook",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/luis-gabriel-moreno-carbajal-smd/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://x.com/CarbajalLu30525",
      icon: Twitter,
      label: "Twitter",
    },
    {
      href: "https://www.facebook.com/luis.moreno.679964",
      icon: Facebook,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/luismore33780/",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://wa.me/525550601828", // número con prefijo internacional
      icon: MessageCircle, // Ícono de WhatsApp (puedes reemplazarlo con un SVG oficial si quieres)
      label: "WhatsApp",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 text-center md:text-left">

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-base md:text-lg font-semibold">Contacto</h4>
            <div className="space-y-1 text-primary-foreground/80 text-sm md:text-base">
              <p>luis_bull@utlook.com</p>
              <p>+52 55 50601828</p>
              <p>Ciudad de México, México</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-primary-foreground/20">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mb-4 md:mb-0">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link p-2 rounded-lg hover:bg-primary-foreground/10 transition-all duration-200"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={28} />
                </a>
              );
            })}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="nav-link p-2 rounded-lg hover:bg-primary-foreground/10 transition-all duration-200"
            aria-label="Volver arriba"
          >
            <ArrowUp size={28} />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 md:mt-10 pt-6 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/80 flex items-center justify-center gap-2 flex-wrap text-sm md:text-base">
            © {currentYear} Luis Moreno. Todos los derechos reservados.
            <span className="flex items-center gap-1">
              Hecho con <Heart size={14} className="text-red-400" fill="currentColor" /> en México
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
