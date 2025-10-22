import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { QuoteCalculator } from "@/components/quote-calculator"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CallbackForm } from "@/components/callback-form"
import { CallbackFormProvider } from "@/components/callback-form-context"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SUPER-ВАНТАЖНИК | Послуги Вантажників у Житомирі та Області",
  description:
    "Професійні послуги вантажників у Житомирі: квартирні та офісні переїзди, підйом матеріалів, завантаження брусів, демонтажні роботи. Швидко, надійно, доступно. Телефон: 0964405084",
  keywords:
    "вантажники Житомир, переїзди Житомир, підйом матеріалів, завантаження брусів, демонтажні роботи, послуги вантажників Житомирська область",
  openGraph: {
    title: "SUPER-ВАНТАЖНИК - Професійні Вантажники у Житомирі",
    description: "Надійні послуги вантажників: переїзди, підйом матеріалів, демонтаж. Працюємо по Житомиру та області.",
    type: "website",
    locale: "uk_UA",
    siteName: "SUPER-ВАНТАЖНИК",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <CallbackFormProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <QuoteCalculator />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
        <CallbackForm />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SUPER-ВАНТАЖНИК",
              description: "Професійні послуги вантажників у Житомирі та області",
              telephone: "+380964405084",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Житомир",
                addressRegion: "Житомирська область",
                addressCountry: "UA",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Житомир",
                },
                {
                  "@type": "State",
                  name: "Житомирська область",
                },
              ],
              serviceType: [
                "Квартирні переїзди",
                "Офісні переїзди",
                "Підйом будівельних матеріалів",
                "Завантаження та вигрузка брусів",
                "Демонтажні роботи",
              ],
              priceRange: "$$",
              url: "",
            }),
          }}
        />
      </div>
    </CallbackFormProvider>
  )
}
