puts 'Seeding Novels...'
for i in 0..20
  novel = Novel.new
  novel.title = "novel#{i}"
  novel.abstract = "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
  Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla."
  novel.user_id = User.first.id
  novel.category = "cat#{i}"
  novel.save
end
