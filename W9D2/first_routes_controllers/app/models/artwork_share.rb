class ArtworkShare < ApplicationRecord
    validates :artwork_id, :viewer_id, presence: true
    validates :viewer_id, uniqueness: { scope: :artwork_id,
        message: ": can't share artwork with a viewer twice"}

    belongs_to :artwork,
    class_name: :Artwork,
    foreign_key: :artwork_id

    belongs_to :viewer,
    class_name: :User,
    foreign_key: :viewer_id
end