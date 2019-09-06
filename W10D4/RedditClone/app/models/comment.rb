class Comment < ApplicationRecord
    validates :content, presence: true

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id

    belongs_to :post

    
end
