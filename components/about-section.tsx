import { Card, CardContent } from "@/components/ui/card"
import { Users, Truck, Clock, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Задоволених клієнтів",
  },
  {
    icon: Truck,
    number: "1000+",
    label: "Успішних переїздів",
  },
  {
    icon: Clock,
    number: "5+",
    label: "Років досвіду",
  },
  {
    icon: Award,
    number: "100%",
    label: "Гарантія якості",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Чому обирають нас?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg text-pretty">
                <strong className="text-foreground">SUPER-ВАНТАЖНИК</strong> - це команда професіоналів, які вже понад 5
                років допомагають жителям Житомира та області з переїздами та вантажними роботами.
              </p>
              <p className="text-pretty">
                Ми розуміємо, що переїзд - це завжди стрес. Тому наша місія - зробити цей процес максимально комфортним
                та безпечним для вас. Наша команда складається з досвідчених вантажників, які знають, як правильно
                упакувати, перенести та встановити ваші речі.
              </p>
              <p className="text-pretty">
                Окрім вантажних робіт, ми також надаємо професійні послуги клінінгу. Наша команда виконує генеральне
                прибирання після переїзду, прибирання після ремонту та демонтажних робіт, а також дезінфекцію приміщень.
                Це дозволяє нашим клієнтам отримати комплексне рішення - від переїзду до чистого приміщення.
              </p>
              <p className="text-pretty">
                Ми працюємо з сучасним обладнанням, маємо власний транспорт та надаємо повну гарантію на всі види робіт.
                Кожен наш співробітник пройшов спеціальну підготовку та має великий досвід роботи.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-border/50">
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
