class MessagesController < ApplicationController
  def create
    chat = Chat.find(params[:chat_id])
    message = chat.messages.new(message_params)
    message.user = current_user
    if message.save
      ChatChannel.broadcast_to(chat, message: mod_message(message))
    else
      render "chats/show"
    end
  end

private
  def message_params
    params.expect(message: :body)
  end
  def mod_message(message)
    render_to_string(partial: "messages/message", locals: { message: message, current_user: message.user })
  end
end
