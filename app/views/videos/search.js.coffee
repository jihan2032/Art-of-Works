$('.videos_part').html("<%=j render partial: 'videos' %>")
$('.filter_tabs').html("<%=j render partial: 'filter_tabs' %>")
if <%= params[:filter].present? %>
  $('li.popular').removeClass 'active_filter'
  if <%= params[:filter] == 'recent' %>
    $('li.recent').addClass 'active_filter'
  else if <%= params[:filter] == 'random' %>
    $('li.random').addClass 'active_filter'
