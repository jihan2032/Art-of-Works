class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title
      t.integer :user_id
      t.string :cover_photo
      t.text :abstract
      t.boolean :above_18, default: false

      t.timestamps null: false
    end
  end
end
