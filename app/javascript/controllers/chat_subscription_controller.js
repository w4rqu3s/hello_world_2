import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"

export default class extends Controller {
  static values = { chatId: Number }
  static targets = ["messages"]

  connect() {
    this.channel = createConsumer().subscriptions.create(
      { channel: "ChatChannel", id: this.chatIdValue },
      {
        received: data => {
          this.messagesTarget.insertAdjacentHTML("beforeend", data.message)
          this.messagesTarget.scrollTop = this.messagesTarget.scrollHeight
          const input = document.getElementById("message_body")
          if (input) input.value = ""
        }
      }
    )
    console.log(`Subscribed to chat ${this.chatIdValue}`)
      window.chatChannel = this.channel
  }
}
