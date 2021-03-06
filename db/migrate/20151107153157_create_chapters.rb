class CreateChapters < ActiveRecord::Migration
  def change
    create_table :chapters do |t|
      t.string :title
      t.integer :chapter_no, default: 1
      t.integer :parent_id, default: 0
      t.integer :novel_id

      t.timestamps null: false
    end
  end
end
