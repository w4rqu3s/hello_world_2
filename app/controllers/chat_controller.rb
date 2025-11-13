class ChatsController < ApplicationController
  def index
    @chats = Chat.where("sender_id = ? OR receiver_id = ?", current_user.id, current_user.id)
    @chat = @chats.first if @chats.any?
    @messages = @chat.messages if @chat
  end
  def show
    redirect_to root_path(id: params[:id])
  end
  def create
    contact = User.find(params[:contact_id])
    chat = Chat.find_or_create_by(sender: current_user, receiver: contact)
    redirect_to chat
  end
end
