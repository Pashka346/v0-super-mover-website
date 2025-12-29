import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://super-vantazhnyk.vercel.app"),
  title: {
    default: "SUPER-ВАНТАЖНИК | Послуги Вантажників та Клінінгу Житомир",
    template: "%s | SUPER-ВАНТАЖНИК",
  },
  description:
    "Професійні послуги вантажників та клінінгу у Житомирі та області. Переїзди, підйом матеріалів, демонтаж, прибирання після ремонту. Швидко та надійно.",
  verification: {
    google: "your-google-verification-code-here",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" className={inter.variable}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
