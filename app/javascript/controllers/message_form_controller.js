import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input"]

  connect() {
    console.log("✅ message_form_controller conectado")
  }

  send(event) {
    event.preventDefault()
    const content = this.inputTarget.value.trim()
    if (!content) return
    if (window.chatChannel) {
    window.chatChannel.send({ body: content })
  } else {
    console.error("Chat channel não inicializado!")
  }

    console.log("📤 Enviando mensagem:", content)
    this.inputTarget.value = ""
  }
}
