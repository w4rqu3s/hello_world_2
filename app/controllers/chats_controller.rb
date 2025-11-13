class ChatsController < ApplicationController
  def index
    @chats = Chat.all
    @chat = @chats.first
    @messages = @chat.messages if @chat
  end

  def show
    @chat = Chat.find(params[:id])
    @chats = Chat.all
    @messages = @chat.messages
  end

  def create
    chat = Chat.create
    redirect_to chat
  end
end
