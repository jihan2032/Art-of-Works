module ApplicationHelper
  def error_messages_for(object)
    if object.errors.any?
      content_tag(:div, class: 'alert alert-danger') do
        content_tag :div do
          object.errors.full_messages.each do |msg|
            concat content_tag(:li, msg)
          end
        end
      end
    end
  end
end
