import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { href: "#about", label: "Sobre mí" },
    { href: "#projects", label: "Proyectos" },
    { href: "#education", label: "Educación" },
    { href: "#skills", label: "Habilidades" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-primary-foreground p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Luis Moreno</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CV Button */}
        <a
          href="/Luis_Moreno_CV.pdf"
          download="Luis_Moreno_CV.pdf"
          className="hidden md:flex btn-secondary items-center gap-2"
        >
          <Download size={20} />
          Descargar CV
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-primary/80 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-primary shadow-lg md:hidden">
          <div className="flex flex-col items-center gap-4 py-6 px-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-lg"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
           
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;