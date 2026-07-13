import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Zap,
  Star,
  Users,
  Clock,
  Globe,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CyberCursor from "@/components/ui/cyber-cursor";
import ParallaxParticles from "@/components/ui/parallax-particles";
import heroDevices from "@/assets/hero-devices.jpg";
import { SEO } from "@/components/seo/SEO";
import { organizationSchema, websiteSchema } from "@/utils/schema";
import { useLanguage } from "@/i18n/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
  const [counters, setCounters] = useState({
    projects: 0,
    users: 0,
    time: 0,
    clients: 0,
  });

  // Animated counters
  useEffect(() => {
    const targets = { projects: 150, users: 500000, time: 8, clients: 45 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        projects: Math.floor(targets.projects * progress),
        users: Math.floor(targets.users * progress),
        time: Math.floor(targets.time * progress),
        clients: Math.floor(targets.clients * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const serviceVisuals = [
    {
      slug: "app-development",
      icon: <Layers className="h-8 w-8" />,
      gradient: "from-neon-cyan/20 to-neon-blue/20",
    },
    {
      slug: "web-development",
      icon: <Globe className="h-8 w-8" />,
      gradient: "from-neon-magenta/20 to-accent/20",
    },
    {
      slug: "digital-marketing",
      icon: <Zap className="h-8 w-8" />,
      gradient: "from-accent/20 to-neon-cyan/20",
    },
    {
      slug: "e-commerce",
      icon: <Cpu className="h-8 w-8" />,
      gradient: "from-neon-blue/20 to-neon-magenta/20",
    },
    {
      slug: "3d-animation",
      icon: <Sparkles className="h-8 w-8" />,
      gradient: "from-neon-cyan/20 to-hologram/20",
    },
  ];

  const services = serviceVisuals.map((visual, i) => ({
    ...visual,
    ...t.home.services[i],
  }));

  const process = t.home.process.map((item, i) => ({
    step: `0${i + 1}`,
    ...item,
  }));

  const testimonials = t.home.testimonials.map((item) => ({
    ...item,
    rating: 5,
  }));

  return (
    <>
      <SEO
        title={t.home.seoTitle}
        description={t.home.seoDescription}
        keywords="app development, web development, mobile apps, custom software, e-commerce development, digital marketing, 3D animation, software solutions"
        canonical="/"
        schema={{
          "@context": "https://schema.org",
          "@graph": [organizationSchema, websiteSchema],
        }}
      />
      <div className="overflow-hidden relative">
        <CyberCursor />
        <ParallaxParticles density={30} className="fixed inset-0 z-0" />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-0">
          {/* Futuristic Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--neon-cyan)/0.15)_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,hsl(var(--neon-cyan)/0.05),hsl(var(--neon-magenta)/0.05),hsl(var(--accent)/0.05),hsl(var(--neon-cyan)/0.05))]"></div>
            <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-neon-magenta/20 rounded-full blur-3xl animate-particle-float"></div>
            <div
              className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-neon-cyan/20 rounded-full blur-3xl animate-particle-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-accent/15 rounded-full blur-2xl animate-hologram-shift"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Hero Content */}
              <div className="text-center lg:text-left animate-slide-up relative z-10 order-2 lg:order-1">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-4 sm:mb-6 leading-tight">
                  <span
                    className="block sm:inline-block mb-2 sm:mb-0"
                    style={{ fontSize: "80%" }}
                  >
                    {t.home.heroLine1}
                  </span>
                  <br className="hidden sm:block" />
                  <span
                    className="gradient-text glitch-text block"
                    data-text={t.home.heroHighlight}
                  >
                    {t.home.heroHighlight}
                  </span>
                  <span className="text-foreground block mt-2">
                    {t.home.heroLine2}
                  </span>
                </h1>
                <p
                  className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 animate-slide-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  {t.home.heroDescription}
                </p>

                <div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-slide-up w-full sm:w-auto"
                  style={{ animationDelay: "0.8s" }}
                >
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="cyber-primary"
                      className="group w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 relative overflow-hidden"
                      aria-label={t.home.requestQuote}
                    >
                      <span className="relative z-10">
                        {t.home.requestQuote}
                      </span>
                      <ArrowRight className="ms-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-transform relative z-10" />
                    </Button>
                  </Link>
                  <Link to="/portfolio" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="cyber-secondary"
                      className="group w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                      aria-label={t.home.viewPortfolio}
                    >
                      <Play className="me-2 h-4 w-4 sm:h-5 sm:w-5" />
                      {t.home.viewPortfolio}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Hero Visual */}
              <div
                className="relative animate-scale-in order-1 lg:order-2"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="relative hologram-effect card-3d">
                  <img
                    src={heroDevices}
                    alt={t.home.heroImageAlt}
                    className="w-full h-auto rounded-xl sm:rounded-2xl shadow-neon hover:shadow-hologram transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-cyber rounded-xl sm:rounded-2xl opacity-40"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-neon-cyan/10 rounded-xl sm:rounded-2xl"></div>

                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-hologram opacity-20 rounded-xl sm:rounded-2xl animate-hologram-shift"></div>

                  {/* Interactive cyber hotspots - hidden on mobile for performance */}
                  <div
                    className="hidden sm:block absolute top-1/4 left-1/3 w-4 h-4 sm:w-6 sm:h-6 bg-neon-cyan/80 rounded-full animate-neon-pulse cursor-pointer hover:scale-150 transition-transform border border-neon-cyan/50"
                    title="Neural Mobile Apps"
                  ></div>
                  <div
                    className="hidden sm:block absolute bottom-1/3 right-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-neon-magenta/80 rounded-full animate-neon-pulse cursor-pointer hover:scale-150 transition-transform border border-neon-magenta/50"
                    style={{ animationDelay: "1s" }}
                    title="Quantum Web Development"
                  ></div>
                  <div
                    className="hidden sm:block absolute top-1/2 left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-accent/80 rounded-full animate-neon-pulse cursor-pointer hover:scale-150 transition-transform border border-accent/50"
                    style={{ animationDelay: "2s" }}
                    title="Holographic UX"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cyber Stats Section */}
        <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
          {/* Clean deep gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B18] via-[#0A1220] to-[#0E1A2B]"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Stat Card 1 - AI Projects */}
              <div
                className="group relative animate-counter-up text-center
                          backdrop-blur-[14px] bg-[rgba(15,25,45,0.5)]
                          border border-transparent rounded-2xl p-8
                          shadow-[0_8px_32px_-12px_rgba(0,0,0,0.4)]
                          hover:shadow-[0_12px_48px_-8px_rgba(0,224,255,0.3)]
                          hover:scale-[1.02] hover:-translate-y-0.5
                          transition-all duration-700
                          before:absolute before:inset-0 before:rounded-2xl before:p-[1px] 
                          before:bg-gradient-to-br before:from-[#00FFFF] before:via-[#7B61FF] before:to-[#FF3CAC]
                          before:-z-10 before:opacity-60
                          hover:before:opacity-100 hover:before:animate-pulse
                          after:absolute after:inset-[1px] after:rounded-2xl after:bg-[rgba(15,25,45,0.5)] after:-z-10"
              >
                {/* Soft inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-50"></div>

                <div className="relative z-10">
                  <div
                    className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-2 sm:mb-3
                              text-[#00E0FF]
                              drop-shadow-[0_0_20px_rgba(0,224,255,0.6)]
                              group-hover:drop-shadow-[0_0_35px_rgba(0,224,255,0.9)]
                              transition-all duration-700"
                  >
                    {counters.projects}+
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#A9B3C1] group-hover:text-[#C5D0DC] transition-colors duration-500">
                    {t.home.stats.projects}
                  </p>
                </div>
              </div>

              {/* Stat Card 2 - Active Users */}
              <div
                className="group relative animate-counter-up text-center
                          backdrop-blur-[14px] bg-[rgba(15,25,45,0.5)]
                          border border-transparent rounded-2xl p-8
                          shadow-[0_8px_32px_-12px_rgba(0,0,0,0.4)]
                          hover:shadow-[0_12px_48px_-8px_rgba(255,107,214,0.3)]
                          hover:scale-[1.02] hover:-translate-y-0.5
                          transition-all duration-700
                          before:absolute before:inset-0 before:rounded-2xl before:p-[1px] 
                          before:bg-gradient-to-br before:from-[#FF3CAC] before:via-[#7B61FF] before:to-[#00FFFF]
                          before:-z-10 before:opacity-60
                          hover:before:opacity-100 hover:before:animate-pulse
                          after:absolute after:inset-[1px] after:rounded-2xl after:bg-[rgba(15,25,45,0.5)] after:-z-10"
                style={{ animationDelay: "0.1s" }}
              >
                {/* Soft inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-magenta-500/10 via-transparent to-transparent opacity-50"></div>

                <div className="relative z-10">
                  <div
                    className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-2 sm:mb-3
                              text-[#00E0FF]
                              drop-shadow-[0_0_20px_rgba(0,224,255,0.6)]
                              group-hover:drop-shadow-[0_0_35px_rgba(0,224,255,0.9)]
                              transition-all duration-700"
                  >
                    {(counters.users / 1000).toFixed(0)}K+
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#A9B3C1] group-hover:text-[#C5D0DC] transition-colors duration-500">
                    {t.home.stats.users}
                  </p>
                </div>
              </div>

              {/* Stat Card 3 - Years Experience */}
              <div
                className="group relative animate-counter-up text-center
                          backdrop-blur-[14px] bg-[rgba(15,25,45,0.5)]
                          border border-transparent rounded-2xl p-8
                          shadow-[0_8px_32px_-12px_rgba(0,0,0,0.4)]
                          hover:shadow-[0_12px_48px_-8px_rgba(123,97,255,0.3)]
                          hover:scale-[1.02] hover:-translate-y-0.5
                          transition-all duration-700
                          before:absolute before:inset-0 before:rounded-2xl before:p-[1px] 
                          before:bg-gradient-to-br before:from-[#7B61FF] before:via-[#00FFFF] before:to-[#FF3CAC]
                          before:-z-10 before:opacity-60
                          hover:before:opacity-100 hover:before:animate-pulse
                          after:absolute after:inset-[1px] after:rounded-2xl after:bg-[rgba(15,25,45,0.5)] after:-z-10"
                style={{ animationDelay: "0.2s" }}
              >
                {/* Soft inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-50"></div>

                <div className="relative z-10">
                  <div
                    className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-2 sm:mb-3
                              text-[#00E0FF]
                              drop-shadow-[0_0_20px_rgba(0,224,255,0.6)]
                              group-hover:drop-shadow-[0_0_35px_rgba(0,224,255,0.9)]
                              transition-all duration-700"
                  >
                    {counters.time}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#A9B3C1] group-hover:text-[#C5D0DC] transition-colors duration-500">
                    {t.home.stats.years}
                  </p>
                </div>
              </div>

              {/* Stat Card 4 - Global Clients */}
              <div
                className="group relative animate-counter-up text-center
                          backdrop-blur-[14px] bg-[rgba(15,25,45,0.5)]
                          border border-transparent rounded-2xl p-8
                          shadow-[0_8px_32px_-12px_rgba(0,0,0,0.4)]
                          hover:shadow-[0_12px_48px_-8px_rgba(0,255,255,0.3)]
                          hover:scale-[1.02] hover:-translate-y-0.5
                          transition-all duration-700
                          before:absolute before:inset-0 before:rounded-2xl before:p-[1px] 
                          before:bg-gradient-to-br before:from-[#00FFFF] before:via-[#FF3CAC] before:to-[#7B61FF]
                          before:-z-10 before:opacity-60
                          hover:before:opacity-100 hover:before:animate-pulse
                          after:absolute after:inset-[1px] after:rounded-2xl after:bg-[rgba(15,25,45,0.5)] after:-z-10"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="relative z-10">
                  <div
                    className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-2 sm:mb-3
                              text-[#00E0FF]
                              drop-shadow-[0_0_20px_rgba(0,224,255,0.6)]
                              group-hover:drop-shadow-[0_0_35px_rgba(0,224,255,0.9)]
                              transition-all duration-700"
                  >
                    {counters.clients}+
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#A9B3C1] group-hover:text-[#C5D0DC] transition-colors duration-500">
                    {t.home.stats.clients}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 sm:mb-6">
                {t.home.servicesTitle}{" "}
                <span
                  className="gradient-text glitch-text"
                  data-text={t.home.servicesTitleHighlight}
                >
                  {t.home.servicesTitleHighlight}
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                {t.home.servicesDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className={`group animate-slide-up cursor-pointer relative overflow-hidden
                           transition-all duration-700 ease-out
                           bg-gradient-to-br from-background/60 via-surface/40 to-background/80
                           backdrop-blur-xl
                           border border-neon-cyan/30
                           rounded-3xl
                           shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5),0_0_0_1px_rgba(var(--neon-cyan),0.2)]
                           hover:shadow-[0_20px_60px_-10px_rgba(6,182,212,0.5),0_0_80px_-15px_rgba(168,85,247,0.4),0_0_0_2px_rgba(var(--neon-cyan),0.6)]
                           hover:scale-105 hover:-translate-y-2
                           hover:border-neon-cyan/60
                           before:absolute before:inset-0 
                           before:rounded-3xl
                           before:bg-gradient-to-br before:from-neon-cyan/10 before:via-neon-blue/5 before:to-neon-magenta/10
                           before:opacity-0 before:transition-all before:duration-700 
                           hover:before:opacity-100
                           after:absolute after:inset-0
                           after:rounded-3xl
                           after:bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.1),transparent_50%)]
                           after:opacity-0 after:transition-opacity after:duration-700
                           hover:after:opacity-100`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Vibrant Gradient Orbs */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                  <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-gradient-to-tr from-purple-500/25 via-magenta-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-150"></div>

                  {/* Neon Glow Border Effect */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700
                              bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-500/0
                              blur-sm"
                  ></div>

                  <CardContent className="p-8 relative z-10">
                    {/* Premium Icon with Soft Neon Glow */}
                    <div className="relative mb-6 w-fit">
                      <div
                        className="relative transition-all duration-700 ease-out
                                  group-hover:scale-110 group-hover:rotate-6"
                      >
                        <div
                          className="text-cyan-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]
                                    group-hover:drop-shadow-[0_0_35px_rgba(6,182,212,1),0_0_55px_rgba(168,85,247,0.5)]
                                    transition-all duration-700 scale-110"
                        >
                          {service.icon}
                        </div>
                        {/* Soft pulsing glow rings */}
                        <div className="absolute inset-0 -m-3 bg-cyan-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700 group-hover:animate-pulse"></div>
                        <div className="absolute inset-0 -m-5 bg-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 delay-100"></div>
                      </div>
                    </div>

                    {/* Clean Typography with Gradient */}
                    <h3
                      className="text-2xl font-heading font-bold mb-3 leading-tight tracking-tight
                                bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent
                                group-hover:from-cyan-300 group-hover:via-blue-200 group-hover:to-purple-300
                                transition-all duration-700
                                drop-shadow-[0_0_1px_rgba(255,255,255,0.3)]"
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-muted-foreground/75 mb-6 leading-relaxed text-sm 
                               group-hover:text-muted-foreground transition-colors duration-500
                               font-light"
                    >
                      {service.description}
                    </p>

                    {/* Premium CTA Button with Glow */}
                    <Link
                      to={`/contact?service=${service.slug}`}
                      className="inline-block"
                    >
                      <Button
                        variant="cyber-ghost"
                        size="sm"
                        className="group/btn relative
                               bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
                               border border-cyan-400/30 text-cyan-300
                               hover:from-cyan-500/20 hover:to-purple-500/20
                               hover:border-cyan-400/60 hover:text-cyan-200
                               hover:shadow-[0_0_25px_rgba(6,182,212,0.4),inset_0_0_15px_rgba(6,182,212,0.1)]
                               transition-all duration-500 font-medium text-xs
                               rounded-xl px-4 py-2"
                        aria-label={service.cta}
                      >
                        <span className="relative z-10">{service.cta}</span>
                        <ArrowRight className="ms-2 h-3.5 w-3.5 group-hover/btn:translate-x-1 rtl:rotate-180 rtl:group-hover/btn:-translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>

                    {/* Subtle Corner Glow Accents */}
                    <div
                      className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-tl-3xl blur-xl"
                    ></div>
                    <div
                      className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-400/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150 rounded-br-3xl blur-xl"
                    ></div>

                    {/* Smooth Scan Line Animation */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                      <div
                        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent 
                                  translate-y-[-100%] group-hover:translate-y-[200vh] 
                                  transition-transform duration-[2500ms] ease-linear
                                  opacity-0 group-hover:opacity-100
                                  shadow-[0_0_10px_3px_rgba(6,182,212,0.4)]"
                      ></div>
                    </div>

                    {/* Soft Inner Glow */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700
                                pointer-events-none
                                shadow-[inset_0_0_40px_rgba(6,182,212,0.1),inset_0_0_20px_rgba(168,85,247,0.08)]"
                    ></div>

                    {/* Edge Highlight Lines */}
                    <div
                      className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    ></div>
                    <div
                      className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                    ></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-surface/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 sm:mb-6">
                {t.home.processTitle}{" "}
                <span className="gradient-text">
                  {t.home.processTitleHighlight}
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                {t.home.processDescription}
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-primary transform -translate-y-1/2 hidden lg:block"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
                {process.map((item, index) => (
                  <div
                    key={item.step}
                    className="relative text-center animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="glass-elevated rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 hover:shadow-glow transition-all duration-300 cursor-pointer">
                      <span className="text-base sm:text-lg font-bold gradient-text">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-heading font-semibold mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground px-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 sm:mb-6">
                {t.home.testimonialsTitle}{" "}
                <span className="gradient-text">
                  {t.home.testimonialsTitleHighlight}
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                {t.home.testimonialsDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.name}
                  className="glass-elevated hover:shadow-glow transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6">
                {t.home.ctaTitle}{" "}
                <span className="gradient-text">{t.home.ctaTitleHighlight}</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                {t.home.ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="cyber-primary"
                    className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group"
                    aria-label={t.home.startProject}
                  >
                    {t.home.startProject}
                    <ArrowRight className="ms-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link
                  to="/contact?action=schedule"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="cyber-secondary"
                    className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                    aria-label={t.home.scheduleCall}
                  >
                    {t.home.scheduleCall}
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

export default Home;
