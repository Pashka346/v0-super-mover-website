"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Award } from "lucide-react"
import Image from "next/image"
import { useCallbackForm } from "@/components/callback-form-context"

export function HeroSection() {
  const { openForm } = useCallbackForm()

  const scrollToCalculator = () => {
    const calculator = document.getElementById("calculator")
    if (calculator) {
      calculator.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                <span className="text-primary">SUPER</span> <span className="text-foreground">ВАНТАЖНИК</span>
                <span className="block text-2xl md:text-3xl mt-2 text-muted-foreground">у Житомирі</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
                Професійні послуги вантажників та клінінгу у Житомирі та Житомирській області
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
                Квартирні та офісні переїзди, підйом будівельних матеріалів, завантаження брусів, демонтажні роботи,
                професійне прибирання. Швидко, надійно, з гарантією якості по всій Житомирській області.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={openForm} size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Замовити послугу в Житомирі
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button onClick={scrollToCalculator} size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Розрахувати вартість
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold">Гарантія якості</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold">Швидко і вчасно</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold">Досвід 5+ років</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/super-hero-mover.png"
                alt="SUPER ВАНТАЖНИК - професійні послуги вантажників та клінінгу у Житомирі: переїзди, підйом матеріалів, демонтаж, прибирання"
                width={500}
                height={600}
                className="w-full h-auto max-w-md mx-auto"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl transform scale-75"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
