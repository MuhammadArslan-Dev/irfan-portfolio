import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Smartphone,
  Globe,
  ShoppingCart,
  Users,
  BookOpen,
  Heart,
  Gamepad2,
} from "lucide-react";
import CustomCursor from "@/components/ui/custom-cursor";
import { SEO } from "@/components/seo/SEO";
import { breadcrumbSchema } from "@/utils/schema";
import { useLanguage } from "@/i18n/LanguageContext";

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const { t } = useLanguage();

  const filters = [
    "All",
    "Mobile",
    "Web",
    "E-commerce",
    "Education",
    "Health",
    "AI",
  ];

  const projects = [

    {
      id: "listopapi",
      title: "ListoPapi",
      category: "Mobile",
      type: "Mobile App",
      description:
        "Hyperlocal service platform connecting users with nearby providers like electricians, plumbers, drivers, and emergency helpers.",
      image: "https://images.unsplash.com/photo-1553775282-20af80779df7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Flutter", "Django", "Hyperlocal"],
      features: [
        "Nearby service providers",
        "Instant booking",
        "Real-time communication",
      ],
      icon: <Users className="h-6 w-6" />,
      link: "https://play.google.com/store/apps/details?id=com.express.listopapi&pcampaignid=web_share",
    },
    {
      id: "dunyaakhirah",
      title: "Dunya Akhirah",
      category: "Mobile",
      type: "Mobile App",
      description: "Islamic education and Quran app with multiple translations",
      image:
        "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=600&h=400&fit=crop",
      tags: ["Android", "Islamic Education", "Quran"],
      features: [
        "Multi-translation support",
        "Audio recitations",
        "Offline mode",
      ],
      icon: <BookOpen className="h-6 w-6" />,
      link: "https://play.google.com/store/apps/details?id=com.alquran.dunyaakhirah&pcampaignid=web_share",
    },
    {
      id: "hatboi-agency",
      title: "Hatboi Agency",
      category: "Web",
      type: "Business Website",
      description:
        "Modern digital agency website offering branding, web development, startup services, and marketing solutions for growing businesses.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["React.js", "Business Website", "Branding"],
      features: [
        "Service-based landing pages",
        "Startup and branding solutions",
        "Lead generation and contact system",
      ],
      icon: <Globe className="h-6 w-6" />,
      link: "https://hatboiagency.in/",
    },
    {

      id: "rupaichari-rd-block",

      title: "Rupaichari RD Block Portal",

      category: "Government",

      type: "Web Application",

      description:

        "Official government portal for Rupaichari RD Block, providing citizen services, scheme information, notices, and administrative data for South Tripura district.",

      image:

        "https://images.unsplash.com/photo-1723531280350-fea869ed8651?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      tags: ["Government", "NIC", "Public Services"],

      features: [

        "Citizen service access",

        "Government schemes & notices",

        "Administrative and block-level information",

      ],

      icon: <Globe className="h-6 w-6" />,

      link: "https://rupaicharirdblock.in/",

    },
    {
      id: "toykarts",
      title: "ToyKarts",
      category: "E-commerce",
      type: "Web Application",
      description:
        "Modern eCommerce platform for kids toys, offering categorized products like science kits, math learning tools, and creative toys to enhance learning through play.",
      image:
        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=600&h=400&fit=crop",
      tags: ["Next.js", "E-commerce", "UI/UX"],
      features: [
        "Product catalog with categories",
        "Learning-focused toy discovery",
        "Modern responsive shopping experience",
      ],
      icon: <ShoppingCart className="h-6 w-6" />,
      link: "https://www.toykarts.com/",
    },
    {
      id: "nxlyzo",
      title: "NXLYZO Gaming Platform",
      category: "Gaming",
      type: "Web Application",
      description:
        "Modern gaming platform and landing page designed to promote mobile gaming experiences, engage users, and drive app downloads through a high-converting UI.",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      tags: ["React.js", "Gaming", "Landing Page"],
      features: [
        "High-conversion gaming landing UI",
        "App download and user engagement flow",
        "Modern neon-style gaming design",
      ],
      icon: <Gamepad2 className="h-6 w-6" />,
      link: "https://nxlyzo.com/",
    },

    {
      id: "lineconnect-techhub",
      title: "LineConnect",
      category: "Mobile",
      type: "Mobile App",
      description:
        "Addictive puzzle game where users connect lines and shapes to score points, featuring smooth gameplay and engaging visuals.",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
      tags: ["Android", "Game", "Puzzle"],
      features: [
        "Simple and addictive gameplay",
        "Leaderboard and high score system",
        "Smooth animations and UI",
      ],
      icon: <Gamepad2 className="h-6 w-6" />, // import from lucide-react
      link: "https://play.google.com/store/apps/details?id=com.lineconnect.techub&pcampaignid=web_share",
    },
    {
      id: "busbuddy",
      title: "BusBuddy",
      category: "Mobile",
      type: "Mobile App",
      description:
        "Smart transport information platform helping users discover bus routes, timings, and nearby transport options like autos, taxis, and bus stands.",
      image:
        "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=600&h=400&fit=crop",
      tags: ["Flutter", "Django", "Maps", "Transport"],
      features: [
        "Bus route discovery",
        "Transport timing references",
        "Nearby autos, taxis & bus stands",
      ],
      icon: <Globe className="h-6 w-6" />,
      link: "https://play.google.com/store/apps/details?id=com.busbuddy.mapingapp&pcampaignid=web_share",
    },
    {
      id: "my-city-hub",
      title: "My City Hub",
      category: "Mobile",
      type: "Mobile App",
      description:
        "Buyer and seller communicate through a single app to grow local businesses. Find plumbers, electricians, nurses, construction workers, and book vehicles",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
      tags: ["Flutter", "Django", "Firebase"],
      features: [
        "Local business directory",
        "Service booking",
        "Vehicle rentals",
      ],
      icon: <Users className="h-6 w-6" />,
      link: "https://play.google.com/store/apps/details?id=com.devhouse.mycityhub&pcampaignid=web_share",
    },
    {
      id: "ielts-yan-mobile",
      title: "IELTS YAN",
      category: "Education",
      type: "Mobile App",
      description:
        "IELTS and Spoken English Preparation app with comprehensive learning tools",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      tags: ["Android", "Education", "English Learning"],
      features: ["Practice tests", "Progress tracking", "Speaking practice"],
      icon: <Smartphone className="h-6 w-6" />,
      link: "https://play.google.com/store/apps/details?id=com.ieltsexam.ieltsyan&pcampaignid=web_share",
    },
    {
      id: "weekenddoit-app",
      title: "WeekendDoIt Adventure App",
      category: "Travel",
      type: "Mobile App",
      description:
        "Adventure travel booking platform allowing users to explore, plan, and book curated trips, trekking experiences, and eco-cultural journeys.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
      tags: ["Flutter", "Travel", "Booking"],
      features: [
        "Trip discovery and booking system",
        "Adventure and trekking packages",
        "Custom and group travel planning",
      ],
      icon: <Globe className="h-6 w-6" />,
      link: "https://play.google.com/store/apps/details?id=com.weekenddoit.now&pcampaignid=web_share",
    },
    {
      id: "snehnod-services",
      title: "Snehnod Services",
      category: "Mobile",
      type: "Mobile App",
      description: "Booking and management app for home cleaning services",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
      tags: ["Android", "Booking", "Services"],
      features: [
        "Service booking",
        "Schedule management",
        "Payment integration",
      ],
      icon: <Smartphone className="h-6 w-6" />,
      link: "https://play.google.com/store/apps/details?id=com.doc.ieltsyan&pcampaignid=web_share",
    },
    {
      id: "fablo",
      title: "Fablo",
      category: "E-commerce",
      type: "Mobile App",
      description:
        "Food and grocery delivery application with real-time tracking",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
      tags: ["Node.js", "Angular", "MongoDB"],
      features: ["Real-time tracking", "Multiple vendors", "Express delivery"],
      icon: <ShoppingCart className="h-6 w-6" />,
      link: "https://play.google.com/store/apps/details?id=com.myfablo.customer",
    },

    {
      id: "yokaizen",
      title: "Yokaizen",
      category: "Health",
      type: "Mobile App",
      description: "Mental wellness app based on SEL and CBT methodologies",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
      tags: ["Flutter", "Python", "Flask"],
      features: [
        "Mental wellness tracking",
        "CBT exercises",
        "SEL-based learning",
      ],
      icon: <Heart className="h-6 w-6" />,
      link: "https://apps.apple.com/us/app/yokaizen-manga-for-mental-care/id6503237762",
    },
    {
      id: "yokaizen-kids",
      title: "Yokaizen Kids",
      category: "AI",
      type: "Web Application",
      description:
        "AI-powered learning platform for children with interactive content",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      tags: ["React.js", "Vite", "AI"],
      features: [
        "AI-powered learning",
        "Interactive lessons",
        "Progress tracking",
      ],
      icon: <BookOpen className="h-6 w-6" />,
      link: "https://yokaizenkids.com/",
    },
    {
      id: "yokaizen-campus",
      title: "Yokaizen Campus",
      category: "AI",
      type: "Web Application",
      description:
        "AI-powered teaching platform for educators with smart tools",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
      tags: ["React.js", "Vite", "AI"],
      features: [
        "AI teaching assistant",
        "Content creation",
        "Student analytics",
      ],
      icon: <Globe className="h-6 w-6" />,
      link: "https://yokaizencampus.com/",
    },
    {
      id: "yorisoiai",
      title: "Yorisoiai",
      category: "Web",
      type: "Web Application",
      description:
        "LINE-integrated chat app for elderly and caregivers communication",
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      tags: ["React.js", "Next.js", "LINE Integration"],
      features: [
        "LINE integration",
        "Senior-friendly UI",
        "Caregiver messaging",
      ],
      icon: <Heart className="h-6 w-6" />,
      link: "https://yorisoiai.com/",
    },
    {
      id: "agentforgeai",
      title: "AgentForgeAI",
      category: "AI",
      type: "Web Application",
      description:
        "Platform to create and manage AI sales agents for businesses",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      tags: ["React.js", "Vite", "AI"],
      features: [
        "AI agent creation",
        "Sales automation",
        "Performance analytics",
      ],
      icon: <Users className="h-6 w-6" />,
      link: "https://agentforgeai.com/",
    },
    {
      id: "logiaire",
      title: "Logiaire",
      category: "AI",
      type: "Web Application",
      description:
        "AI agents platform for managing international shipments efficiently",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&h=400&fit=crop",
      tags: ["React.js", "Vite", "AI"],
      features: [
        "AI-powered logistics",
        "Shipment tracking",
        "Route optimization",
      ],
      icon: <Globe className="h-6 w-6" />,
      link: "https://logiaire.com/",
    },


    {
      id: "navith-student-app",
      title: "Navith Student App",
      category: "Education",
      type: "Mobile App",
      description:
        "Student mobile app for school management system with attendance, fees, exams, and notifications.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      tags: ["Flutter", "Django", "Education"],
      features: [
        "Attendance tracking",
        "Exam results & timetable",
        "Fee management",
      ],
      icon: <BookOpen className="h-6 w-6" />,
      link: "https://play.google.com/store/apps/details?id=com.navith.studentapp",
    },

    {
      id: "navith-parent-app",
      title: "Navith Parent App",
      category: "Education",
      type: "Mobile App",
      description:
        "Parent app to monitor child's performance, attendance, fees, and communicate with school.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
      tags: ["Flutter", "Django", "Education"],
      features: [
        "Child performance tracking",
        "Fee payment updates",
        "School notifications",
      ],
      icon: <Users className="h-6 w-6" />,
      link: "https://play.google.com/store/apps/details?id=com.navith.parentapp",
    },

    {
      id: "navith-teacher-app",
      title: "Navith Teacher App",
      category: "Education",
      type: "Mobile App",
      description:
        "Teacher app for managing attendance, exams, homework, and student performance.",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Flutter", "Django", "Education"],
      features: [
        "Attendance marking",
        "Exam & result management",
        "Homework assignment",
      ],
      icon: <Smartphone className="h-6 w-6" />,
      link: "https://play.google.com/store/apps/details?id=com.navith.teacherapp",
    },

    {
      id: "dr-rathore-saffron",
      title: "Dr Rathore's SAFFRON",
      category: "E-commerce",
      type: "Web Application",
      description: "Brand and eCommerce site for premium saffron products",
      image:
        "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=600&h=400&fit=crop",
      tags: ["eCommerce", "Branding", "Web"],
      features: ["Product showcase", "Online ordering", "Brand storytelling"],
      icon: <ShoppingCart className="h-6 w-6" />,
      link: "https://doctorrathoresaffron.com/",
    },

    {
      id: "mrityunjay-astrotalk",
      title: "Mrityunjay Astrotalk",
      category: "Mobile",
      type: "Mobile App",
      description: "Astrology app connecting users with verified astrologers",
      image:
        "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=600&h=400&fit=crop",
      tags: ["Flutter", "Firebase", "Django"],
      features: [
        "Astrologer verification",
        "Chat consultations",
        "Horoscope predictions",
      ],
      icon: <Users className="h-6 w-6" />,
      link: "https://play.google.com/store/apps/details?id=com.astologer.app&pcampaignid=web_share",
    },


    {
      id: "doctor-booking",
      title: "Doctor Booking",
      category: "Health",
      type: "Mobile App",
      description: "Healthcare appointment booking with telemedicine features",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      tags: ["Healthcare", "Booking", "Telemedicine"],
      features: [
        "Appointment booking",
        "Video consultations",
        "Medical records",
      ],
      icon: <Heart className="h-6 w-6" />,
      link: "https://qramed.in/",

    },
    {
      id: "qramed-health-app",
      title: "QraMed Health App",
      category: "Health",
      type: "Mobile App",
      description:
        "Doctor appointment booking and healthcare platform with telemedicine, real-time consultation, and patient management system.",
      image: "https://images.unsplash.com/photo-1723433892471-62f113c8c9a0?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Flutter", "Django", "Healthcare"],
      features: [
        "Doctor appointment booking",
        "Video consultations",
        "Medical records & prescriptions",
      ],
      icon: <Heart className="h-6 w-6" />,
      link: "https://play.google.com/store/apps/details?id=com.devhouse.quramed&pcampaignid=web_share",
    }
    ,
    {
      id: "flixprime-bangla",
      title: "FlixPrime OTT (Bangla)",
      category: "E-commerce",
      type: "Mobile App",
      description:
        "A Bangla OTT platform for short movies, series, and entertainment — including live chat and viewer interaction features.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      tags: ["Flutter", "Firebase", "OTT", "Chat"],
      features: [
        "Bangla short movies & web series",
        "Real-time chat and audience engagement",
        "Secure streaming and subscription plans",
      ],
      icon: <Globe className="h-6 w-6" />,
      link: "https://play.google.com/store/apps/details?id=com.ep.flixprime&pcampaignid=web_share", // ✅ Play Store link
    },

    {
      id: "weekenddoit",
      title: "WeekendDoIt",
      category: "Web",
      type: "Web Application",
      description: "Travel company platform with booking and trip discovery",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      tags: ["Travel", "Booking", "Discovery"],
      features: ["Trip discovery", "Booking system", "Media galleries"],
      icon: <Globe className="h-6 w-6" />,
      link: "https://weekenddoit.in/",
    },


  ];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <>
      <SEO
        title={t.portfolio.seoTitle}
        description={t.portfolio.seoDescription}
        keywords="app development portfolio, web development projects, mobile app examples, software development case studies, e-commerce projects"
        canonical="/portfolio"
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
        ])}
      />
      <div className="pt-16">
        <CustomCursor />
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background via-surface/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6">
              {t.portfolio.heroTitle}{" "}
              <span className="gradient-text">{t.portfolio.heroTitleHighlight}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              {t.portfolio.heroDescription}
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-6 sm:py-8 bg-surface/30 sticky top-16 z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? "hero" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter)}
                  className="transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
                >
                  {t.portfolio.filters[filter] ?? filter}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        {/* Projects Grid */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filteredProjects.map((project, index) => {
                const tr = t.portfolio.projects[project.id];
                const description = tr?.description ?? project.description;
                const features = tr?.features ?? project.features;
                return (
                <a
                  key={project.id}
                  href={project.link || `/portfolio/${project.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="link"
                  className="project-tile group block cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={`Open ${project.title}`}
                >
                  <Card className="glass-elevated hover:shadow-paint hover-tilt-3d transition-all duration-300 group-hover:scale-[1.02] overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} project showcase`}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Brush mask overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-brush opacity-0 group-hover:opacity-20 transition-opacity duration-300 brush-mask"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>

                      <div className="absolute top-4 left-4">
                        <Badge
                          variant="secondary"
                          className="bg-background/80 backdrop-blur-sm text-white"
                        >
                          {t.portfolio.types[project.type] ?? project.type}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 glass-elevated rounded-full p-2 group-hover:animate-sparkle">
                        {project.icon}
                      </div>

                      {/* Animated tech tags that appear on hover */}
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs bg-background/90 backdrop-blur-sm animate-slide-up"
                              style={{ animationDelay: `${tagIndex * 0.1}s` }}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6 relative">
                      <h3 className="text-xl font-heading font-semibold mb-2 group-hover:gradient-text transition-all">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {description}
                      </p>

                      <div className="space-y-2 mb-4">
                        {features.slice(0, 2).map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full me-2 group-hover:bg-paint-warm transition-colors"></div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Visual indicator for clickability */}
                      <div className="flex items-center text-primary group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                        <span className="text-sm font-medium">
                          {project.link
                            ? t.portfolio.openProject
                            : t.portfolio.viewCaseStudy}
                        </span>
                        <ArrowRight className="ms-1 h-4 w-4 rtl:rotate-180" />
                      </div>

                      {/* Brush stroke accent */}
                      <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-brush opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-tl-full"></div>
                    </CardContent>
                  </Card>
                </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 sm:mb-6">
                {t.portfolio.ctaTitle}{" "}
                <span className="gradient-text">{t.portfolio.ctaTitleHighlight}</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                {t.portfolio.ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="cyber-primary"
                    className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group"
                    aria-label={t.portfolio.discussProject}
                  >
                    {t.portfolio.discussProject}
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
                    aria-label={t.portfolio.scheduleCall}
                  >
                    {t.portfolio.scheduleCall}
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

export default Portfolio;
