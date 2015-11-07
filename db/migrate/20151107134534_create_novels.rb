class CreateNovels < ActiveRecord::Migration
  def change
    create_table :novels do |t|
      t.string :title
      t.integer :user_id
      t.string :category
      t.string :cover_photo

      t.timestamps null: false
    end
  end
end
