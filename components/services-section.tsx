"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building2, Package, Hammer, Sparkles, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useCallbackForm } from "@/components/callback-form-context"

const services = [
  {
    icon: Home,
    title: "Квартирні переїзди",
    description: "Професійний переїзд квартир з упакуванням, транспортуванням та розпакуванням речей.",
    details: [
      "Упакування та захист меблів",
      "Демонтаж та монтаж меблів",
      "Перенесення важких предметів",
      "Транспортування на будь-які відстані",
      "Розпакування на новому місці",
    ],
    price: "від 800 грн",
    images: [
      "/professional-movers-carrying-furniture-boxes-apart.jpg",
      "/moving-team-packing-household-items-cardboard-boxe.jpg",
    ],
  },
  {
    icon: Building2,
    title: "Офісні переїзди",
    description: "Швидкий та організований переїзд офісів з мінімальними простоями в роботі.",
    details: [
      "Планування переїзду офісу",
      "Упакування офісної техніки",
      "Демонтаж офісних меблів",
      "Швидке транспортування",
      "Налаштування на новому місці",
    ],
    price: "від 1500 грн",
    images: [
      "/office-movers-carrying-computers-desks-professiona.jpg",
      "/office-furniture-disassembly-moving-team-workplace.jpg",
    ],
  },
  {
    icon: Package,
    title: "Підйом матеріалів",
    description: "Підйом будівельних та побутових матеріалів на будь-який поверх без ліфта.",
    details: [
      "Підйом будівельних матеріалів",
      "Перенесення побутової техніки",
      "Підйом меблів на поверх",
      "Використання спеціального обладнання",
      "Безпечне транспортування",
    ],
    price: "від 50 грн/поверх",
    images: [
      "/workers-carrying-construction-materials-upstairs-b.jpg",
      "/movers-lifting-heavy-appliances-stairs-manual-labo.jpg",
    ],
  },
  {
    icon: Hammer,
    title: "Демонтажні роботи",
    description: "Професійний демонтаж конструкцій, меблів та обладнання з вивозом сміття.",
    details: [
      "Демонтаж старих меблів",
      "Розбирання конструкцій",
      "Демонтаж сантехніки",
      "Вивіз будівельного сміття",
      "Підготовка до ремонту",
    ],
    price: "від 300 грн",
    images: [
      "/demolition-workers-removing-old-furniture-construc.jpg",
      "/dismantling-old-kitchen-cabinets-renovation-prepar.jpg",
    ],
  },
  {
    icon: Sparkles,
    title: "Послуги клінінгу",
    description:
      "Професійне прибирання після переїзду, ремонту або демонтажних робіт з використанням сучасного обладнання та екологічно чистих засобів.",
    details: [
      "Генеральне прибирання після переїзду",
      "Прибирання після ремонту та будівництва",
      "Миття вікон, дзеркал та скляних поверхонь",
      "Видалення будівельного пилу та залишків",
      "Дезінфекція та санітарна обробка",
      "Прибирання офісних та комерційних приміщень",
      "Чищення килимів та м'яких меблів",
      "Прибирання балконів та лоджій",
    ],
    price: "від 15 грн/м²",
    images: [
      "/professional-cleaning-service-team-apartment-post-.jpg",
      "/cleaning-workers-mopping-floors-window-washing-pro.jpg",
    ],
  },
]

export function ServicesSection() {
  const { openForm } = useCallbackForm()

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Наші послуги</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Повний спектр послуг для вашого комфортного переїзду та вирішення побутових завдань
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <div className="text-lg font-semibold text-primary">{service.price}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">{service.description}</CardDescription>

                {service.images && (
                  <div className="grid grid-cols-2 gap-2 my-4">
                    {service.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative h-32 rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${service.title} - зображення ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={openForm}
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Замовити послугу
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
