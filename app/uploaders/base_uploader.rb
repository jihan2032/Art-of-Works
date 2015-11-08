# encoding: utf-8
class BaseUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick
  include Uploaders::DefaultUrl

  storage :file

  set_default_url :jpg

  # Delegates
  delegate :asset_path, :asset_url, to: :helpers
  delegate :asset_host, to: ActionController::Base

  # Helpers
  def helpers
    @helpers ||= ActionController::Base.helpers
  end

  # Storage
  def store_dir
    "uploads/#{model.class.table_name}/#{model.id}/#{mounted_as}"
  end

  # Serialization
  def as_json(options = {})
    json = super.values.first

    json
  end
end
