import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Globe } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { breadcrumbSchema, organizationSchema } from "@/utils/schema";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const valueIcons = [
    <Award className="h-8 w-8 text-primary" />,
    <Users className="h-8 w-8 text-primary" />,
    <Target className="h-8 w-8 text-primary" />,
    <Award className="h-8 w-8 text-primary" />,
    <Globe className="h-8 w-8 text-primary" />,
  ];

  const values = t.about.values.map((value, i) => ({
    ...value,
    icon: valueIcons[i],
  }));

  return (
    <>
      <SEO
        title={t.about.seoTitle}
        description={t.about.seoDescription}
        keywords="بھائی, app development, web development, software studio, digital products"
        canonical="/about"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
            ]),
            organizationSchema,
          ],
        }}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background via-surface/50 to-background text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6">
              {t.about.heroTitle} <span className="gradient-text">{t.brand}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              {t.about.heroDescription}
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-16">
              <div className="text-center lg:text-start">
                <h2 className="text-3xl font-heading font-bold mb-4 gradient-text">
                  {t.about.missionTitle}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {t.about.missionText}
                </p>
              </div>
              <div className="text-center lg:text-start">
                <h2 className="text-3xl font-heading font-bold mb-4 gradient-text">
                  {t.about.visionTitle}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {t.about.visionText}
                </p>
              </div>
              <div className="text-center lg:text-start">
                <h2 className="text-3xl font-heading font-bold mb-4 gradient-text">
                  {t.about.valuesTitle}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {t.about.valuesText}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="glass-elevated hover:shadow-glow transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">{value.icon}</div>
                    <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
