import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: t.footer.groups.services,
      links: [
        { name: t.footer.links.appDevelopment, href: "/portfolio" },
        { name: t.footer.links.webDevelopment, href: "/portfolio" },
        { name: t.footer.links.ecommerce, href: "/portfolio" },
        { name: t.footer.links.digitalMarketing, href: "/portfolio" },
        { name: t.footer.links.animation3d, href: "/portfolio" },
      ],
    },
    {
      title: t.footer.groups.company,
      links: [
        { name: t.footer.links.aboutUs, href: "/about" },
        { name: t.footer.links.portfolio, href: "/portfolio" },
        { name: t.footer.links.careers, href: "/careers" },
        { name: t.footer.links.contact, href: "/contact" },
      ],
    },
    {
      title: t.footer.groups.legal,
      links: [
        { name: t.footer.links.privacyPolicy, href: "/privacy" },
        { name: t.footer.links.termsOfService, href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-surface border-t border-border/20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* CTA Section */}
        <div className="glass-elevated rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 md:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3 sm:mb-4">
            {t.footer.ctaTitle}{" "}
            <span className="gradient-text">{t.footer.ctaTitleHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
            {t.footer.ctaDescription}
          </p>

          <Link to="/contact">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-hero hover:shadow-glow transition-all duration-300 group"
            >
              {t.footer.ctaButton}
              <ArrowRight className="ms-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-heading font-bold gradient-text">
                {t.brand}
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              {t.footer.companyDescription}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span dir="ltr">info@devxpart.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center md:text-start">
            © {currentYear} {t.brand}. {t.footer.copyright}
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              {t.footer.privacy}
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
