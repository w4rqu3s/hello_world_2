class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :messages
  has_many :sent_chats, class_name: "Chat", foreign_key: "sender_id"
  has_many :received_chats, class_name: "Chat", foreign_key: "receiver_id"
  has_one_attached :profile
end
