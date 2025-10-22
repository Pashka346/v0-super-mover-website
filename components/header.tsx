"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { useCallbackForm } from "@/components/callback-form-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openForm } = useCallbackForm()

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">SUPER</div>
            <div className="text-2xl font-bold text-foreground">ВАНТАЖНИК</div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Послуги
            </a>
            <a href="#calculator" className="text-foreground hover:text-primary transition-colors">
              Розрахунок
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Про нас
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Контакти
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-foreground">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">096 440 50 84</span>
            </div>
            <Button onClick={openForm} className="bg-primary hover:bg-primary/90">
              Замовити дзвінок
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Послуги
              </a>
              <a href="#calculator" className="text-foreground hover:text-primary transition-colors">
                Розрахунок
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                Про нас
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Контакти
              </a>
              <div className="flex items-center space-x-2 text-foreground pt-2">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">096 440 50 84</span>
              </div>
              <Button onClick={openForm} className="bg-primary hover:bg-primary/90 w-full">
                Замовити дзвінок
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
