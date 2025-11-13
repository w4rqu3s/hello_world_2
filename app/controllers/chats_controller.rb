class ChatsController < ApplicationController
  def index
    @chats = Chat.all
    @chat = @chats.first
    @messages = @chat.messages if @chat
  end

  def show
    @chat = Chat.find(params[:id])
    @messages = @chat.messages
  end

  def create
    chat = Chat.create
    redirect_to chat_path(chat)
  end
end
