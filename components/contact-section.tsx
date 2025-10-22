"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          service,
          message,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send request")
      }

      toast({
        title: "Заявку відправлено!",
        description: "Ми зв'яжемося з вами протягом 5 хвилин",
      })

      // Очищаємо форму
      setName("")
      setPhone("")
      setService("")
      setMessage("")
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Помилка",
        description: "Не вдалося відправити заявку. Спробуйте ще раз або зателефонуйте нам.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Зв'яжіться з нами</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Готові допомогти вам з переїздом або вантажними роботами. Зателефонуйте або залиште заявку
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">096 440 50 84</p>
                  <p className="text-sm text-muted-foreground">Працюємо цілодобово</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Зона обслуговування</h3>
                  <p className="text-muted-foreground">м. Житомир та Житомирська область</p>
                  <p className="text-sm text-muted-foreground">Виїжджаємо в будь-який район</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Режим роботи</h3>
                  <p className="text-muted-foreground">Пн-Нд: 24/7</p>
                  <p className="text-sm text-muted-foreground">Без вихідних та свят</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Швидка відповідь</h3>
                  <p className="text-muted-foreground">Відповідаємо протягом 5 хвилин</p>
                  <p className="text-sm text-muted-foreground">Безкоштовна консультація</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Залишити заявку</CardTitle>
              <CardDescription>Заповніть форму і ми зв'яжемося з вами протягом 5 хвилин</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ім'я</Label>
                    <Input
                      id="name"
                      placeholder="Ваше ім'я"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+380..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Послуга</Label>
                  <Input
                    id="service"
                    placeholder="Яка послуга вас цікавить?"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Повідомлення</Label>
                  <Textarea
                    id="message"
                    placeholder="Розкажіть детальніше про ваші потреби..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                  {isLoading ? "Відправляємо..." : "Відправити заявку"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
