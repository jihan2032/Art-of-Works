class CreateReadChapters < ActiveRecord::Migration
  def change
    create_table :read_chapters do |t|
      t.integer :user_id
      t.integer :chapter_id

      t.timestamps null: false
    end
  end
end
