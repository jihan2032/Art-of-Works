class AddAbove18ToNovels < ActiveRecord::Migration
  def change
    add_column :novels, :above_18, :boolean, default: false
  end
end
