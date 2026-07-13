import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Smartphone, Globe, ShoppingCart, TrendingUp, Play, Code, Palette, Zap, Shield, Users } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { Link } from "react-router-dom";
import { breadcrumbSchema, serviceSchema } from "@/utils/schema";
import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const Services = () => {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const { t } = useLanguage();

  const serviceVisuals = [
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      technologies: ["Swift", "Kotlin", "Flutter", "React Native", "Firebase"],
      link: "/contact",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      technologies: ["React", "Next.js", "Node.js", "Python", "AWS", "Vercel"],
      link: "/contact",
      gradient: "from-green-500/20 to-blue-500/20",
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-primary" />,
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Magento"],
      link: "/contact",
      gradient: "from-yellow-500/20 to-red-500/20",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      technologies: ["Google Analytics", "SEMrush", "Google Ads", "Facebook Ads"],
      link: "/contact",
      gradient: "from-pink-500/20 to-purple-500/20",
    },
    {
      icon: <Play className="h-12 w-12 text-primary" />,
      technologies: ["Blender", "Cinema 4D", "After Effects", "Three.js"],
      link: "/contact",
      gradient: "from-purple-500/20 to-indigo-500/20",
    },
  ];

  const services = serviceVisuals.map((visual, i) => ({
    ...visual,
    ...t.services.items[i],
  }));

  const engagementIcons = [
    <Zap className="h-8 w-8 text-primary" />,
    <Users className="h-8 w-8 text-primary" />,
    <Shield className="h-8 w-8 text-primary" />,
    <Code className="h-8 w-8 text-primary" />,
  ];

  const engagementModels = t.services.engagementModels.map((model, i) => ({
    ...model,
    icon: engagementIcons[i],
  }));

  const process = t.services.process.map((step, i) => ({
    step: `0${i + 1}`,
    ...step,
  }));

  return (
    <>
      <SEO
        title={t.services.seoTitle}
        description={t.services.seoDescription}
        keywords="app development services, web development company, e-commerce development, digital marketing agency, SEO services, 3D animation studio, custom software development"
        canonical="/services"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" }
            ]),
            serviceSchema("Software Development", "Custom mobile and web application development services"),
            serviceSchema("Digital Marketing", "SEO, content marketing, and growth strategies")
          ]
        }}
      />
      <div className="pt-16">
        {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background via-surface/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6">
            {t.services.heroTitle}{" "}
            <span className="gradient-text">{t.services.heroTitleHighlight}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-6 sm:mb-8 px-4">
            {t.services.heroDescription}
          </p>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 sm:mb-6">
              {t.services.engagementTitle}{" "}
              <span className="gradient-text">{t.services.engagementTitleHighlight}</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              {t.services.engagementDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {engagementModels.map((model, index) => (
              <Card key={model.title} className="glass-elevated hover:shadow-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {model.icon}
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">{model.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{model.description}</p>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {model.timeline}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{model.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {services.map((service, index) => (
              <div key={service.title} className={`animate-slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="glass-elevated overflow-hidden hover:shadow-glow transition-all duration-300">
                  <div className={`bg-gradient-to-r ${service.gradient} p-4 sm:p-6 md:p-8`}>
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                      {/* Service Info */}
                      <div>
                        <div className="flex items-center mb-6">
                          {service.icon}
                          <div className="ms-4">
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-1">
                              {service.title}
                            </h3>
                            <p className="text-primary font-medium">{service.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-lg text-muted-foreground mb-6">
                          {service.description}
                        </p>
                        
                        <p className="text-muted-foreground mb-6">
                          {service.longDescription}
                        </p>

                       <Link to={service.link}>
  <Button variant="hero" className="group">
    {service.ctaText}
    <ArrowRight className="ms-2 h-4 w-4 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-transform" />
  </Button>
</Link>
                      </div>

                      {/* Features & Tech */}
                      <div className="space-y-8">
                        {/* Key Features */}
                        <div>
                          <h4 className="font-heading font-semibold mb-4">{t.services.keyFeatures}</h4>
                          <div className="grid grid-cols-1 gap-3">
                            {service.features.map((feature) => (
                              <div key={feature} className="flex items-center text-sm">
                                <div className="w-2 h-2 bg-primary rounded-full me-3 flex-shrink-0"></div>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-heading font-semibold mb-4">{t.services.technologies}</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 sm:mb-6">
              {t.services.processTitle}{" "}
              <span className="gradient-text">{t.services.processTitleHighlight}</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              {t.services.processDescription}
            </p>
          </div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {process.map((step, index) => (
              <Card key={step.step} className="glass-elevated hover:shadow-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-center">
                    {/* Step Number */}
                    <div className="text-center lg:text-start">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full text-2xl font-bold text-background mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-heading font-semibold">{step.title}</h3>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-1">
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="font-semibold mb-3">{t.services.deliverables}</h4>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable) => (
                          <div key={deliverable} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full me-2"></div>
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 sm:mb-6">
              {t.services.ctaTitle}{" "}
              <span className="gradient-text">{t.services.ctaTitleHighlight}</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              {t.services.ctaDescription}
            </p>
           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
  {/* Contact Page CTA */}
  <Link to="/contact">
    <Button 
      size="lg" 
      variant="hero" 
      className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group"
    >
      {t.services.freeConsultation}
      <ArrowRight className="ms-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-transform" />
    </Button>
  </Link>

  {/* Portfolio Page CTA */}
  <Link to="/portfolio">
    <Button 
      size="lg" 
      variant="glass" 
      className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
    >
      {t.services.viewOurWork}
    </Button>
  </Link>
</div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Services;