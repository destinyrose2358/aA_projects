# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require "action_view"

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper
  COLORS = %w(white black red/ginger blue/grey cream brown cinnamon fawn)
  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :sex, inclusion: { in: %w(M F) }
  validates :color, inclusion: { in: COLORS }

  has_many :rental_requests,
  class_name: :CatRentalRequest,
  foreign_key: :cat_id,
  dependent: :destroy

  def age
    time_ago_in_words(birth_date)
  end

  def display_attrs
    attributes.reject { |k,v| %w(id name created_at updated_at).include?(k) }
  end

end
