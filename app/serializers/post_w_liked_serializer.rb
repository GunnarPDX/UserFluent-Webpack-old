# frozen_string_literal: true

class PostWLikedSerializer < ActiveModel::Serializer
  attributes :id, :title, :thumbnail, :full_image, :content, :created_at, :time, :likes, :liked, :owner, :session_user_id, :views
  belongs_to :user
  has_many :comments

end