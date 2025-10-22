import { Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-lg font-bold text-primary">SUPER</div>
              <div className="text-lg font-bold text-foreground">ВАНТАЖНИК</div>
            </div>
            <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
              Професійні послуги вантажників у Житомирі та області. Ваш надійний партнер для переїздів та вантажних
              робіт.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-base">Послуги</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Квартирні переїзди</li>
              <li>Офісні переїзди</li>
              <li>Підйом матеріалів</li>
              <li>Демонтажні роботи</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-base">Контакти</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>096 440 50 84</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Житомир та область</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>24/7 без вихідних</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-base">Переваги</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>✓ Досвід 5+ років</li>
              <li>✓ Власний транспорт</li>
              <li>✓ Гарантія якості</li>
              <li>✓ Доступні ціни</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 SUPER-ВАНТАЖНИК. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}
