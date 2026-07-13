import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const navItems = [
    { name: t.header.nav.home, href: "/" },
    { name: t.header.nav.about, href: "/about" },
    { name: t.header.nav.portfolio, href: "/portfolio" },
    { name: t.header.nav.services, href: "/services" },
    { name: t.header.nav.contact, href: "/contact" },
  ];

  const toggleLanguage = () => setLang(lang === "ar" ? "en" : "ar");

  return (
    <header className="sticky top-0 z-50 glass-elevated border-b border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-heading font-bold gradient-text group-hover:scale-105 transition-all">
              {t.brand}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Language Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hover:bg-primary/10 font-medium"
              aria-label="Switch language"
            >
              <Globe className="h-4 w-4 me-1.5" />
              {t.header.language}
            </Button>
            <Link to="/contact">
              <Button className="bg-gradient-hero hover:shadow-glow transition-all duration-300 group">
                {t.header.requestQuote}
                <ArrowRight className="ms-2 h-4 w-4 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          {/* Mobile Menu Button + Language Toggle */}
          <div className="md:hidden flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hover:bg-primary/10 font-medium px-2"
              aria-label="Switch language"
            >
              <Globe className="h-4 w-4 me-1" />
              {t.header.language}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-primary/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-primary/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/20">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300">
                    {t.header.requestQuote}
                    <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" />
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
