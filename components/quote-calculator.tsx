"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator } from "lucide-react"
import { useCallbackForm } from "@/components/callback-form-context"

export function QuoteCalculator() {
  const { openForm } = useCallbackForm()

  const [serviceType, setServiceType] = useState("")
  const [rooms, setRooms] = useState("")
  const [floor, setFloor] = useState("")
  const [distance, setDistance] = useState("")
  const [estimate, setEstimate] = useState<number | null>(null)

  const calculateEstimate = () => {
    let basePrice = 0

    // Base price by service type
    switch (serviceType) {
      case "apartment":
        basePrice = 800
        break
      case "office":
        basePrice = 1500
        break
      case "materials":
        basePrice = 300
        break
      case "demolition":
        basePrice = 500
        break
      case "cleaning":
        basePrice = 400
        break
      default:
        basePrice = 600
    }

    // Add room multiplier
    if (rooms) {
      const roomMultiplier = serviceType === "cleaning" ? 150 : 200
      basePrice += Number.parseInt(rooms) * roomMultiplier
    }

    // Add floor multiplier
    if (floor) {
      basePrice += Number.parseInt(floor) * 50
    }

    // Add distance multiplier
    if (distance) {
      const dist = Number.parseInt(distance)
      if (dist > 10) {
        basePrice += (dist - 10) * 20
      }
    }

    setEstimate(basePrice)
  }

  return (
    <section id="calculator" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Швидкий розрахунок вартості</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Отримайте попередню вартість послуг за лічені секунди
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="h-6 w-6 text-primary" />
                <span>Калькулятор вартості</span>
              </CardTitle>
              <CardDescription>Заповніть форму для отримання попередньої вартості послуг</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="service-type">Тип послуги</Label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Оберіть послугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Квартирний переїзд</SelectItem>
                      <SelectItem value="office">Офісний переїзд</SelectItem>
                      <SelectItem value="materials">Підйом матеріалів</SelectItem>
                      <SelectItem value="demolition">Демонтажні роботи</SelectItem>
                      <SelectItem value="cleaning">Послуги клінінгу</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rooms">
                    {serviceType === "cleaning" ? "Кількість кімнат для прибирання" : "Кількість кімнат"}
                  </Label>
                  <Select value={rooms} onValueChange={setRooms}>
                    <SelectTrigger>
                      <SelectValue placeholder="Оберіть кількість" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 кімната</SelectItem>
                      <SelectItem value="2">2 кімнати</SelectItem>
                      <SelectItem value="3">3 кімнати</SelectItem>
                      <SelectItem value="4">4+ кімнат</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="floor">Поверх</Label>
                  <Select value={floor} onValueChange={setFloor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Оберіть поверх" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 поверх</SelectItem>
                      <SelectItem value="2">2 поверх</SelectItem>
                      <SelectItem value="3">3 поверх</SelectItem>
                      <SelectItem value="4">4 поверх</SelectItem>
                      <SelectItem value="5">5+ поверх</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="distance">Відстань (км)</Label>
                  <Input
                    id="distance"
                    type="number"
                    placeholder="Введіть відстань"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                  />
                </div>
              </div>

              <Button
                onClick={calculateEstimate}
                className="w-full bg-primary hover:bg-primary/90"
                disabled={!serviceType}
              >
                Розрахувати вартість
              </Button>

              {estimate && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-2">{estimate.toLocaleString()} грн</div>
                      <p className="text-sm text-muted-foreground">
                        Попередня вартість послуг. Точна ціна розраховується після огляду об'єкта.
                      </p>
                      <Button onClick={openForm} className="mt-4 bg-primary hover:bg-primary/90">
                        Замовити послугу
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
