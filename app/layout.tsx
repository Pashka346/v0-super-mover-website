import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

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
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
