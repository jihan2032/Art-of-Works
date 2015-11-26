class RemoveLikesReadsFromChapters < ActiveRecord::Migration
  def change
    remove_column :chapters, :likes
    remove_column :chapters, :reads
  end
end
