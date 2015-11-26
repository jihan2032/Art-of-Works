class RemoveLikesReadsFromNovels < ActiveRecord::Migration
  def change
    remove_column :novels, :likes
    remove_column :novels, :reads
  end
end
