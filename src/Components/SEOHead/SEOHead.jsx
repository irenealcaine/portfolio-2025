import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../contexts/LanguageContext";

const SITE_URL = "https://irenealcaine.com";

const SEOHead = ({
  title,
  description,
  path = "",
  image = "/favicon.png",
  type = "website",
  jsonLd,
}) => {
  const { currentLanguage, isSpanish } = useLanguage();
  const url = `${SITE_URL}${path}`;
  const locale = isSpanish ? "es_ES" : "en_US";
  const alternateLocale = isSpanish ? "en_US" : "es_ES";

  const defaultJsonLd = jsonLd || {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Irene Alcaine",
    jobTitle: isSpanish ? "Desarrolladora Full-Stack" : "Full-Stack Developer",
    url: SITE_URL,
    sameAs: [
      "https://github.com/irenealcaine",
      "https://www.linkedin.com/in/irenealcaine/",
    ],
    email: "irenealcainealvarez@gmail.com",
    description: description,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <html lang={currentLanguage} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      <meta property="og:site_name" content="Irene Alcaine" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(defaultJsonLd)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
