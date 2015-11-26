class CreateTableGenresNovels < ActiveRecord::Migration
  def change
    create_table :genres_novels do |t|
      t.integer :genre_id
      t.integer :novel_id
      t.timestamps null: false
    end
  end
end

