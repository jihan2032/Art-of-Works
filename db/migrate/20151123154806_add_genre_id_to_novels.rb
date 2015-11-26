class AddGenreIdToNovels < ActiveRecord::Migration
  def change
    add_column :novels, :genre_id, :integer
  end
end
