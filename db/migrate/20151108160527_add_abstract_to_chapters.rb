class AddAbstractToChapters < ActiveRecord::Migration
  def change
    add_column :chapters, :abstract, :text
  end
end
