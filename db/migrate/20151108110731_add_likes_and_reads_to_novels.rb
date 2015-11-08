class AddLikesAndReadsToNovels < ActiveRecord::Migration
  def change
    add_column :novels, :likes, :integer, default: 0
    add_column :novels, :reads, :integer, default: 0
  end
end
