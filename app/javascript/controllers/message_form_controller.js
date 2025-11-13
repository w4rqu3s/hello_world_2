import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { chatId: Number }

  connect() {
    this.element.addEventListener("submit", (event) => {
      event.preventDefault()
      const input = this.element.querySelector("input[name='message[body]']")
      const value = input.value.trim()
      if (value === "") return

      fetch(`/chats/${this.chatIdValue}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
        },
        body: JSON.stringify({ message: { body: value } })
      })

      input.value = ""
    })
  }
}
