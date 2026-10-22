import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Presentation } from "@/components/Presentation";
import { Modes } from "@/components/Modes";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";
import { restaurant } from "@/lib/restaurant";

// Dados estruturados apenas com informações confirmadas.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  servesCuisine: "Japonesa",
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.address.street,
    addressLocality: restaurant.address.city,
    addressRegion: restaurant.address.region,
    postalCode: restaurant.address.postalCode,
    addressCountry: "BR",
  },
  sameAs: [restaurant.instagram.url],
  ...(restaurant.phone ? { telephone: restaurant.phone.e164 } : {}),
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Presentation />
        <Modes />
        <Visit />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
