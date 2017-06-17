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

ActiveRecord::Schema.define(version: 20170305024041) do

  create_table "booklists", force: :cascade do |t|
    t.integer  "order"
    t.string   "book"
    t.string   "language"
    t.string   "link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bookmarks", force: :cascade do |t|
    t.integer  "order"
    t.string   "s_id"
    t.string   "sectionstring"
    t.string   "title"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "s_id"
    t.datetime "timestamp"
    t.string   "title"
    t.text     "text"
    t.string   "kind"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "counts", force: :cascade do |t|
    t.datetime "timestamp"
    t.string   "s_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dicts", force: :cascade do |t|
    t.string   "title"
    t.text     "define"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "scriptures", force: :cascade do |t|
    t.integer  "favorite"
    t.string   "book"
    t.integer  "chapter"
    t.integer  "section"
    t.integer  "verse"
    t.string   "s_id"
    t.string   "language"
    t.string   "image"
    t.string   "sectionstring"
    t.string   "title"
    t.string   "title2"
    t.text     "text"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "login"
    t.string   "kind"
    t.text     "friends"
    t.text     "blocks"
    t.string   "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
