class AddAbstractToNovels < ActiveRecord::Migration
  def change
    add_column :novels, :abstract, :text
  end
end
