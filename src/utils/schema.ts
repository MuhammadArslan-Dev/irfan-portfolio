// Structured Data / JSON-LD Schema helpers for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "بھائی",
  "description": "Professional app development, web development, e-commerce, digital marketing and 3D animation services",
  "url": window.location.origin,
  "logo": `${window.location.origin}/favicon.ico`,
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "email": "info@devxpart.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/devxpart",
    "https://twitter.com/devxpart"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "بھائی",
  "url": window.location.origin,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${window.location.origin}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Custom Software Solutions",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "operatingSystem": "Web, iOS, Android"
};

export const serviceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": {
    "@type": "Organization",
    "name": "بھائی"
  },
  "description": description,
  "areaServed": "Worldwide"
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `${window.location.origin}${item.url}`
  }))
});
