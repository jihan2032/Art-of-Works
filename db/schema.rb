# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20151108110731) do

  create_table "chapters", force: :cascade do |t|
    t.string   "title",      limit: 255
    t.integer  "chapter_no", limit: 4,   default: 1
    t.integer  "parent_id",  limit: 4,   default: 0
    t.integer  "novel_id",   limit: 4
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.integer  "user_id",    limit: 4
  end

  create_table "liked_chapters", force: :cascade do |t|
    t.integer  "user_id",    limit: 4
    t.integer  "chapter_id", limit: 4
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  create_table "novels", force: :cascade do |t|
    t.string   "title",       limit: 255
    t.integer  "user_id",     limit: 4
    t.string   "category",    limit: 255
    t.string   "cover_photo", limit: 255
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.text     "abstract",    limit: 65535
    t.integer  "likes",       limit: 4,     default: 0
    t.integer  "reads",       limit: 4,     default: 0
  end

  create_table "read_chapters", force: :cascade do |t|
    t.integer  "user_id",    limit: 4
    t.integer  "chapter_id", limit: 4
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  limit: 255, default: "", null: false
    t.string   "encrypted_password",     limit: 255, default: "", null: false
    t.string   "reset_password_token",   limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          limit: 4,   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: 255
    t.string   "last_sign_in_ip",        limit: 255
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
    t.string   "first_name",             limit: 255
    t.string   "last_name",              limit: 255
    t.string   "mobile_number",          limit: 255
    t.string   "title",                  limit: 255
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
