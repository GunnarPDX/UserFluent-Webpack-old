class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  validates :title, :content, presence: true

  # mount_uploader :user_post, UserPostUploader

  is_impressionable
  acts_as_votable

  def thumbnail
    if image.nil?
      'https://res.cloudinary.com/dmqtrnawm/image/upload/w_350,h_275,c_fill/par8wc5w5foyrihwb1yd.jpg'
    else
      'https://res.cloudinary.com/dmqtrnawm/image/upload/e_improve/q_auto:best/dpr_3.0/w_350,h_275,c_fill/' + image + '.png'
    end
  end

  def full_image
    if image.nil?
      'https://res.cloudinary.com/dmqtrnawm/image/upload/w_350,h_275/dpr_3.0/par8wc5w5foyrihwb1yd.jpg'
    else
      'https://res.cloudinary.com/dmqtrnawm/image/upload/' + image + '.png'
    end
  end


  def likes
    cached_votes_up # uses cached data
    # self.get_likes.size
  end

  def views
    impressionist_count
  end

  # delegate :username, to: :user
  # delegate :username, to: :user, prefix: true

  # def as_json(_options = {})
  #   super(only: %i[title content created_at user_id username])
  # end
end
