# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_27_214103) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artwork_shares", force: :cascade do |t|
    t.integer "artwork_id", null: false
    t.integer "viewer_id", null: false
    t.index ["artwork_id"], name: "index_artwork_shares_on_artwork_id"
    t.index ["viewer_id", "artwork_id"], name: "index_artwork_shares_on_viewer_id_and_artwork_id", unique: true
  end

  create_table "artworks", force: :cascade do |t|
    t.text "title", null: false
    t.text "image_url", null: false
    t.integer "artist_id", null: false
    t.index ["artist_id", "title"], name: "index_artworks_on_artist_id_and_title", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.integer "commenter_id", null: false
    t.integer "artwork_id", null: false
    t.text "body", null: false
    t.index ["artwork_id"], name: "index_comments_on_artwork_id"
    t.index ["commenter_id"], name: "index_comments_on_commenter_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "liker_id", null: false
    t.string "likeable_type", null: false
    t.bigint "likeable_id", null: false
    t.index ["likeable_type", "likeable_id"], name: "index_likes_on_likeable_type_and_likeable_id"
    t.index ["liker_id", "likeable_id", "likeable_type"], name: "index_likes_on_liker_id_and_likeable_id_and_likeable_type", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.text "username", null: false
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
