class ChatChannel < ApplicationCable::Channel
  def subscribed
    chat = Chat.find(params[:id])
    stream_for chat
  end

  def receive(data)
    chat = Chat.find(params[:id])
    message = chat.messages.create(body: data["body"])
    ChatChannel.broadcast_to(chat, message: render_message(message))
  end

  private

  def render_message(message)
    ApplicationController.renderer.render(
      partial: "messages/message",
      locals: { message: message }
    )
  end
end
