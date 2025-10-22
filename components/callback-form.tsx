"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useCallbackForm } from "@/components/callback-form-context"

export function CallbackForm() {
  const { isOpen, openForm, closeForm } = useCallbackForm()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted with:", { name, phone })
    setIsLoading(true)

    try {
      console.log("[v0] Sending request to /api/callback")
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      })

      console.log("[v0] Response status:", response.status)
      const responseData = await response.json()
      console.log("[v0] Response data:", responseData)

      if (!response.ok) {
        throw new Error("Failed to send callback request")
      }

      toast({
        title: "Заявку відправлено!",
        description: "Ми зателефонуємо вам протягом 5 хвилин",
      })

      closeForm()
      setName("")
      setPhone("")
    } catch (error) {
      console.error("[v0] Error submitting callback:", error)
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
    <>
      {/* Floating callback button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Button onClick={openForm} className="bg-primary hover:bg-primary/90 shadow-lg rounded-full p-4 h-auto">
          <Phone className="h-6 w-6" />
          <span className="ml-2 hidden sm:inline">Замовити дзвінок</span>
        </Button>
      </div>

      {/* Callback form modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Замовити дзвінок</span>
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={closeForm}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>Залиште свої контакти і ми зателефонуємо вам протягом 5 хвилин</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="callback-name">Ім'я</Label>
                  <Input
                    id="callback-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше ім'я"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="callback-phone">Телефон</Label>
                  <Input
                    id="callback-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+380..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                  {isLoading ? "Відправляємо..." : "Замовити дзвінок"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
