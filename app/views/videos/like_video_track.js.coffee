if <%= current_user.present? %>
  $('.video_track_actions').html("<%=j render partial: 'video_tracks/video_track_actions' %>")
else
  location.reload()
