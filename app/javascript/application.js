import { Application } from "@hotwired/stimulus"
import ChatSubscriptionController from "./controllers/chat_subscription_controller"
import message_form_controller from "./controllers/message_form_controller"

const application = Application.start()
application.register("chat-subscription", ChatSubscriptionController)
application.register("message-form", message_form_controller)

window.Stimulus = application
