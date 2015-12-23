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

  def toastr_flash_messages
    flash_messages = []
    flash.each do |name, message|
      name = name.to_sym
      type = :success if name == :notice
      type = :error   if name == :alert
      type = :info    if name == :info
      text = "<script>toastr.#{type}('#{message}');</script>"
      flash_messages << text.html_safe if message
    end
    flash_messages.join("\n").html_safe
  end

  def embed(youtube_url)
    youtube_id = youtube_url.split("=").last
    content_tag(:iframe, nil, src: "//www.youtube.com/embed/#{youtube_id}")
  end
end
