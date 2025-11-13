import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"

export default class extends Controller {
  static values = { chatId: Number }
  static targets = ["messages", "input"]

  connect() {
    this.channel = createConsumer().subscriptions.create(
      { channel: "ChatChannel", id: this.chatIdValue },
      {
        received: data => {
          this.messagesTarget.insertAdjacentHTML("beforeend", data.message)
          this.messagesTarget.scrollTop = this.messagesTarget.scrollHeight
        }
      }
    )
    console.log(`Subscribed to chat ${this.chatIdValue}`)
  }

  sendMessage(event) {
    event.preventDefault()
    const body = this.inputTarget.value.trim()
    if (body.length === 0) return

    this.channel.send({ body: body })
    this.inputTarget.value = ""
  }
}
