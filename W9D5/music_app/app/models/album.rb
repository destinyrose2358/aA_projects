# == Schema Information
#
# Table name: albums
#
#  id             :bigint           not null, primary key
#  band_id        :integer          not null
#  title          :string           not null
#  year           :integer          not null
#  recording_type :string           not null
#

class Album < ApplicationRecord
  RECORDING_TYPES = %w(Studio Live)
  validates :band_id, :title, :year, :recording_type, presence: true
  validates :recording_type, inclusion: { in: RECORDING_TYPES }
  after_initialize :default_recording

  belongs_to :band
  has_many :tracks,
  dependent: :destroy

  private

  def default_recording
    self.recording_type ||= "Studio"
  end
end
