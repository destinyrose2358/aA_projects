# == Schema Information
#
# Table name: cat_rental_requests
#
#  id         :bigint           not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("Pending")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CatRentalRequest < ApplicationRecord
    validates :start_date, :end_date, presence: true
    validates :status, inclusion: { in: %w(Pending Approved Denied) }
    #validate :

    belongs_to :cat

    private

    def overlapping_requests
        CatRentalRequest
            .where.not("start_date > ? OR end_date < ?", end_date, start_date)
    end


end
