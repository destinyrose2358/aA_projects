class Comment < ApplicationRecord
    validates :commenter_id, :artwork_id, :body, presence: true
    validates :commenter_id, uniqueness: { scope: [:artwork_id, :body],
    message: ": Please don't spam my art, jerk."}

    belongs_to :commenter,
    class_name: :User,
    foreign_key: :commenter_id

    belongs_to :artwork,
    class_name: :Artwork,
    foreign_key: :artwork_id

    has_many :likes,
    as: :likeable

    has_many :likers,
    through: :likes,
    source: :liker

end