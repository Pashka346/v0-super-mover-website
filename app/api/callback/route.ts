import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    console.log("[v0] Callback API called")

    const { name, phone, service, message } = await request.json()
    console.log("[v0] Received data:", { name, phone, service, message })

    const botToken = "8365301078:AAGerFioxUnEVI78y53CECBKV88Iw2sXUvw"
    const chatId = "7477617037"

    let telegramMessage = `🔔 Нова заявка!\n\n👤 Ім'я: ${name}\n📞 Телефон: ${phone}`

    if (service) {
      telegramMessage += `\n🛠 Послуга: ${service}`
    }

    if (message) {
      telegramMessage += `\n💬 Повідомлення: ${message}`
    }

    telegramMessage += `\n\n⏰ ${new Date().toLocaleString("uk-UA")}`

    console.log("[v0] Sending to Telegram:", { chatId, messageLength: telegramMessage.length })

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    })

    const responseData = await response.json()
    console.log("[v0] Telegram API response:", responseData)

    if (!response.ok) {
      console.error("[v0] Telegram API error:", responseData)
      throw new Error(`Telegram API error: ${JSON.stringify(responseData)}`)
    }

    console.log("[v0] Message sent successfully!")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error sending callback request:", error)
    return NextResponse.json({ error: "Failed to send callback request" }, { status: 500 })
  }
}
