# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  album_id   :integer          not null
#  title      :string           not null
#  ord        :integer          not null
#  lyrics     :text
#  track_type :string           default("Regular"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord
  TRACK_TYPES = %w(Regular Bonus)

  validates :title, :ord, presence: true
  validates :track_type, inclusion: { in: TRACK_TYPES }
  validates :ord, uniqueness: { scope: :album_id, message: "must be unique in an album"}

  after_initialize :default_track

  belongs_to :album

  has_one :band,
  through: :album,
  source: :band

  has_many :notes,
  dependent: :destroy



  private

  def default_track
    self.track_type ||= "Regular"
  end
end
