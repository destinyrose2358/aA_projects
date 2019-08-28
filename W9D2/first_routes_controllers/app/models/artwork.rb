class Artwork < ApplicationRecord
    validates :title, :image_url, :artist_id, presence: true
    validates :title, uniqueness: {scope: :artist_id,
        message: ": an artist can't have two pieces with the same name!"}
    
    belongs_to :artist,
    class_name: :User,
    foreign_key: :artist_id

    has_many :artwork_shares,
    class_name: :ArtworkShare,
    foreign_key: :artwork_id,
    dependent: :destroy

    has_many :shared_viewers,
    through: :artwork_shares,
    source: :viewer

    has_many :comments,
    class_name: :Comment,
    foreign_key: :artwork_id,
    dependent: :destroy

    has_many :likes,
    as: :likeable

    has_many :likers,
    through: :likes,
    source: :liker
end