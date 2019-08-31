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
  RECORDING_TYPES = %w(Live Studio)
  validates :band_id, :title, :year, :recording_type, presence: true
  validates :recording_type, inclusion: { in: RECORDING_TYPES }

end
