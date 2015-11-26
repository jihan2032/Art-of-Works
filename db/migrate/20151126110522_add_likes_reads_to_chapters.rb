class AddLikesReadsToChapters < ActiveRecord::Migration
  def change
    add_column :chapters, :likes, :integer, default: 0
    add_column :chapters, :reads, :integer, default: 0
  end
end
