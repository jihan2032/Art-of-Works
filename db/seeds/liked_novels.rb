puts 'Seeding Liked chapters...'
Chapter.all.each do |chapter|
  LikedChapter.create(user_id: User.first.id, chapter_id: chapter.id)
  LikedChapter.create(user_id: User.last.id, chapter_id: chapter.id)
  ReadChapter.create(user_id: User.last.id, chapter_id: chapter.id)
  ReadChapter.create(user_id: User.last.id, chapter_id: chapter.id)
end
