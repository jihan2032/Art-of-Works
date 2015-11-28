if <%= current_user.present? %>
  $('.chapter_actions').html("<%=j render partial: 'chapters/chapter_actions' %>")
else
  location.reload()
