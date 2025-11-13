class MessagesController < ApplicationController
  def create
    chat = Chat.find(params[:chat_id])
    message = chat.messages.new(message_params)

    if message.save
      ChatChannel.broadcast_to(message.chat, message: render_message(message))
      head :ok
      # redirect_to chat_path(chat)
    else
      head :unprocessable_entity
      # redirect_to chat_path(chat), alert: "Não foi possível enviar a mensagem."
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end

  def render_message(message)
    ApplicationController.renderer.render(partial: "messages/message", locals: { message: message })
  end
end
