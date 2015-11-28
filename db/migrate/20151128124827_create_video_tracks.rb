class CreateVideoTracks < ActiveRecord::Migration
  def change
    create_table :video_tracks do |t|
      t.string :title
      t.integer :track_no
      t.integer :parent_id
      t.integer :video_id
      t.integer :user_id
      t.text :abstract
      t.string :link_url

      t.timestamps null: false
    end
  end
end
