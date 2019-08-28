# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(username: 'Bob_The_Sob')
user2 = User.create(username: 'Snark_Shark')
user3 = User.create(username: "Marylyn_Classy_Class")

artwork1 = Artwork.create(title: 'Sobbing', image_url: 'sobbing.img', artist_id: user1.id)
artwork2 = Artwork.create(title: 'Snarky', image_url: 'snarking_around.img', artist_id: user2.id)
artwork3 = Artwork.create(title: 'Classy', image_url: 'i\'mclassy.img', artist_id: user3.id)

artworkshare1 = ArtworkShare.create(artwork_id: artwork3.id, viewer_id: user2.id)
artworkshare2 = ArtworkShare.create(artwork_id: artwork3.id, viewer_id: user1.id)
artworkshare3 = ArtworkShare.create(artwork_id: artwork1.id, viewer_id: user2.id)

comment1 = Comment.create(commenter_id: user1.id, artwork_id: artwork1.id, body: "It's beaaautifool")
comment2 = Comment.create(commenter_id: user2.id, artwork_id: artwork1.id, body: "Someone's a narcissist")
comment3 = Comment.create(commenter_id: user3.id, artwork_id: artwork2.id, body: "Crass")

like1 = Like.create(liker_id: user1.id, likeable_type: artwork2.class, likeable_id: artwork2.id)
like2 = Like.create(liker_id: user3.id, likeable_type: artwork2.class, likeable_id: artwork2.id)
like3 = Like.create(liker_id: user1.id, likeable_type: artwork3.class, likeable_id: artwork3.id)
like4 = Like.create(liker_id: user2.id, likeable_type: artwork3.class, likeable_id: artwork3.id)
like5 = Like.create(liker_id: user3.id, likeable_type: artwork3.class, likeable_id: artwork3.id)
like6 = Like.create(liker_id: user1.id, likeable_type: comment2.class, likeable_id: comment2.id)