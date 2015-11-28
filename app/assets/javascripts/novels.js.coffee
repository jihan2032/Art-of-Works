$ ->
  SelectizeOtions = ->
    options =
      plugins: [
        'restore_on_backspace'
        'remove_button'
      ]
      delimiter: ','
      persist: false
    options

  if $('#genres_select').length > 0
    $('#genres_select').selectize new SelectizeOtions

$(document).ready ->
  $('.dropdown-toggle').dropdown()

