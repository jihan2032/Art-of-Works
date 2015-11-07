class CreateLikedChapters < ActiveRecord::Migration
  def change
    create_table :liked_chapters do |t|
      t.integer :user_id
      t.integer :chapter_id

      t.timestamps null: false
    end
  end
end
