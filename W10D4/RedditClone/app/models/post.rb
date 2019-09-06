# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  url        :string
#  content    :text
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :title, presence: true
  validates :subs, presence: true

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  has_many :post_subs,
  foreign_key: :post_id,
  class_name: :PostSub,
  dependent: :destroy,
  inverse_of: :post 

  has_many :subs,
  through: :post_subs,
  source: :sub

  has_many :comments

end
