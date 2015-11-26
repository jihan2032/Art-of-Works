puts 'Seeding Novels with genres...'
for i in 0..20
  novel = Novel.all[i]
  novel.genres << Genre.first
  novel.genres << Genre.last if Genre.count > 1 
end
