# encoding: utf-8
class NovelCoverPhotoUploader < BaseUploader

  def extension_white_list
    %w(png jpg jpeg gif)
  end

  version :profile do
    process resize_to_fill: [260, 260]
  end

  version :square do
    process resize_to_fill: [150, 150]
  end

  version :icon do
    process resize_to_fill: [50, 50]
  end

  def fix_exif_rotation
    manipulate! do |img|
      img.tap(&:auto_orient)
    end
  end

  process :fix_exif_rotation
end
