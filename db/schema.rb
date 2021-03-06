# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180412181553) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string "title", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "img_url_file_name"
    t.string "img_url_content_type"
    t.integer "img_url_file_size"
    t.datetime "img_url_updated_at"
    t.index ["user_id", "title"], name: "index_articles_on_user_id_and_title", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.string "body"
    t.integer "user_id"
    t.integer "article_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "article_id"], name: "index_comments_on_user_id_and_article_id"
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "user_id"
    t.integer "article_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "article_id"], name: "index_favorites_on_user_id_and_article_id", unique: true
  end

  create_table "steps", force: :cascade do |t|
    t.string "title"
    t.string "body", null: false
    t.integer "ord", null: false
    t.integer "article_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "step_img_file_name"
    t.string "step_img_content_type"
    t.integer "step_img_file_size"
    t.datetime "step_img_updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "profile_img"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_img_file_name"
    t.string "profile_img_content_type"
    t.integer "profile_img_file_size"
    t.datetime "profile_img_updated_at"
    t.index ["username", "session_token"], name: "index_users_on_username_and_session_token"
  end

end
