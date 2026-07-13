import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Clock, ArrowRight, Send, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/seo/SEO";
import { breadcrumbSchema } from "@/utils/schema";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    startDate: "",
    message: "",
    consent: false,
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.consent) {
    toast({
      title: t.contact.toastConsentTitle,
      description: t.contact.toastConsentDescription,
      variant: "destructive",
    });
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "81235856-04cc-4663-85c1-8c77302b5763", // 🔑 Replace with your key
        subject: `New Inquiry from ${formData.name}`,
        from_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        budget: formData.budget,
        start_date: formData.startDate,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title: t.contact.toastSuccessTitle,
        description: t.contact.toastSuccessDescription,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        startDate: "",
        message: "",
        consent: false,
      });
    } else {
      toast({
        title: t.contact.toastFailTitle,
        description: t.contact.toastFailDescription,
        variant: "destructive",
      });
    }
  } catch (error) {
    toast({
      title: t.contact.toastNetworkTitle,
      description: t.contact.toastNetworkDescription,
      variant: "destructive",
    });
  }

  setIsSubmitting(false);
};

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactIcons = [
    <Mail className="h-6 w-6 text-primary" />,
    <Clock className="h-6 w-6 text-primary" />,
  ];

  const contactInfo = t.contact.info.map((info, i) => ({
    ...info,
    icon: contactIcons[i],
  }));

  const serviceOptions = t.contact.serviceOptions;
  const budgetOptions = t.contact.budgetOptions;

  return (
    <>
      <SEO
        title={t.contact.seoTitle}
        description={t.contact.seoDescription}
        keywords="contact dev house solution, hire app developers, web development quote, software development consultation, get project estimate"
        canonical="/contact"
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ])}
      />
      <div className="pt-16">
        {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background via-surface/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6">
            {t.contact.heroTitle}{" "}
            <span className="gradient-text">{t.contact.heroTitleHighlight}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            {t.contact.heroDescription}
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={info.title} className="glass-elevated hover:shadow-glow transition-all duration-300 text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{info.title}</h3>
                  <p className="text-foreground font-medium mb-1">{info.content}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 sm:mb-6">
                {t.contact.formTitle}{" "}
                <span className="gradient-text">{t.contact.formTitleHighlight}</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                {t.contact.formDescription}
              </p>

              <Card className="glass-elevated">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                     {/* Name & Email Row */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t.contact.nameLabel}</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder={t.contact.namePlaceholder}
                          required
                          className="glass border-0"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.contact.emailLabel}</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder={t.contact.emailPlaceholder}
                          required
                          className="glass border-0"
                        />
                      </div>
                    </div>

                     {/* Phone & Service Row */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.contact.phoneLabel}</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder={t.contact.phonePlaceholder}
                          className="glass border-0"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">{t.contact.serviceLabel}</Label>
                        <Select onValueChange={(value) => handleInputChange("service", value)} required>
                          <SelectTrigger className="glass border-0">
                            <SelectValue placeholder={t.contact.servicePlaceholder} />
                          </SelectTrigger>
                          <SelectContent className="glass-elevated">
                            {serviceOptions.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                     {/* Budget & Start Date Row */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget">{t.contact.budgetLabel}</Label>
                        <Select onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger className="glass border-0">
                            <SelectValue placeholder={t.contact.budgetPlaceholder} />
                          </SelectTrigger>
                          <SelectContent className="glass-elevated">
                            {budgetOptions.map((budget) => (
                              <SelectItem key={budget} value={budget}>
                                {budget}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="startDate">{t.contact.startDateLabel}</Label>
                        <Input
                          id="startDate"
                          type="date"
                          value={formData.startDate}
                          onChange={(e) => handleInputChange("startDate", e.target.value)}
                          className="glass border-0"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">{t.contact.messageLabel}</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder={t.contact.messagePlaceholder}
                        rows={4}
                        required
                        className="glass border-0 resize-none"
                      />
                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex items-start gap-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="consent" className="text-sm text-muted-foreground">
                        {t.contact.consentLabel}
                      </Label>
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      variant="hero" 
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-background me-2"></div>
                          {t.contact.sending}
                        </>
                      ) : (
                        <>
                          {t.contact.sendMessage}
                          <Send className="ms-2 h-4 w-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* CTA Side */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="sticky top-24">
                <Card className="glass-elevated mb-8">
                  <CardContent className="p-8 text-center">
                    <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-semibold mb-4">
                      {t.contact.discoveryTitle}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {t.contact.discoveryDescription}
                    </p>
                   <a
  href="https://calendly.com/devxparts3/30min" // ✅ replace with your link
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <Button variant="glass" className="w-full group">
    {t.contact.scheduleCall}
    <ArrowRight className="ms-2 h-4 w-4 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-transform" />
  </Button>
</a>
                  </CardContent>
                </Card>

                <Card className="glass-elevated">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-heading font-semibold mb-4">
                      {t.contact.nextTitle}
                    </h3>
                    <div className="space-y-4">
                      {t.contact.nextSteps.map((step, i) => (
                        <div key={step.title} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-sm font-bold text-background flex-shrink-0">
                            {i + 1}
                          </div>
                          <div>
                            <p className="font-medium">{step.title}</p>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 sm:mb-6">
            {t.contact.otherWaysTitle}{" "}
            <span className="gradient-text">{t.contact.otherWaysTitleHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
            {t.contact.otherWaysDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
            <Card className="glass-elevated hover:shadow-glow transition-all duration-300 p-6">
              <div className="text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">{t.contact.directEmail}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t.contact.directEmailDescription}
                </p>
                <Button variant="outline" size="sm">
                  info@devxpart.com
                </Button>
              </div>
            </Card>

            <Card className="glass-elevated hover:shadow-glow transition-all duration-300 p-6">
              <div className="text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">{t.contact.videoCall}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t.contact.videoCallDescription}
                </p>
                <Button variant="outline" size="sm">
                  {t.contact.scheduleMeeting}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Contact;