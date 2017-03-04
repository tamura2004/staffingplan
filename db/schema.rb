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

ActiveRecord::Schema.define(version: 20170228113749) do

  create_table "depts", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "groups", force: :cascade do |t|
    t.string   "name"
    t.integer  "dept_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dept_id"], name: "index_groups_on_dept_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "plans", force: :cascade do |t|
    t.integer  "month"
    t.decimal  "work",       precision: 3, scale: 2
    t.integer  "user_id"
    t.integer  "project_id"
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.index ["project_id"], name: "index_plans_on_project_id"
    t.index ["user_id"], name: "index_plans_on_user_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string   "number"
    t.string   "name"
    t.string   "start_month"
    t.string   "end_month"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "number"
    t.string   "name"
    t.integer  "dept_id"
    t.integer  "group_id"
    t.integer  "job_id"
    t.integer  "team_id"
    t.string   "start_month"
    t.string   "end_month"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["dept_id"], name: "index_users_on_dept_id"
    t.index ["group_id"], name: "index_users_on_group_id"
    t.index ["job_id"], name: "index_users_on_job_id"
    t.index ["team_id"], name: "index_users_on_team_id"
  end

end
