import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onProgramClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onProgramClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Programmation', href: '#program' },
    { name: 'Invités', href: '#guests' },
    { name: 'Conférences', href: '#conferences' },
    { name: 'Partenaires', href: '#partners' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const scrollToTarget = (targetId: string) => {
        const elem = document.getElementById(targetId);
        if (elem) {
          // Compensate for the fixed header (approx 80px at top, shrinks to 56px)
          const headerOffset = 80;
          const elementPosition = elem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
    };

    if (href === '#program') {
      if (onProgramClick) onProgramClick();
      // Delay slightly to allow the section to render if it was hidden
      setTimeout(() => {
        scrollToTarget('program');
      }, 100);
    } else {
      const targetId = href.replace('#', '');
      scrollToTarget(targetId);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-fibeg-yellow border-b-4 border-black shadow-md transition-all duration-300 ${isScrolled ? 'py-1' : 'py-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-14' : 'h-20'}`}>
         {/* Logo Section */}
<div
  className="flex-shrink-0 flex items-center gap-2 group cursor-pointer"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <div
    className={`rounded-full border-2 border-black overflow-hidden bg-fibeg-orange flex items-center justify-center transition-all duration-300 ${
      isScrolled
        ? 'w-8 h-8'
        : 'w-10 h-10 group-hover:rotate-12'
    }`}
  >
    <img
      src="https://raw.githubusercontent.com/TIADRA432/FIBEG/refs/heads/main/mascotedim.png"
      alt="Logo FIBEG"
      className="w-full h-full object-cover"
    />
  </div>

  <span
    className={`font-comic-header tracking-wide uppercase transition-all duration-300 ${
      isScrolled ? 'text-xl' : 'text-2xl md:text-3xl'
    }`}
  >
    FIBEG 2025
  </span>
</div>


          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-comic-body font-bold rounded-md hover:text-white hover:bg-black transition-all border-2 border-transparent hover:border-white ${isScrolled ? 'text-base px-2 py-1' : 'text-lg px-3 py-2'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-black hover:text-white focus:outline-none border-2 border-black transition-all ${isScrolled ? 'scale-90' : 'scale-100'}`}
            >
              {isOpen ? <X size={isScrolled ? 20 : 24} /> : <Menu size={isScrolled ? 20 : 24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b-4 border-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-black hover:bg-fibeg-orange hover:text-white block px-3 py-2 rounded-md text-xl font-comic-header border-b-2 border-dashed border-gray-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;