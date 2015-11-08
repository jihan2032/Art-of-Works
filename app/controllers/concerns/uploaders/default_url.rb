module Uploaders
  module DefaultUrl
    extend ActiveSupport::Concern

    module ClassMethods
      def set_default_url(extension = :jpg)
        define_method :default_url do
          ActionController::Base.helpers.asset_path "fallback/#{model.class.table_name}/#{mounted_as}/" + [version_name, "default.jpg"].compact.join('_')
        end
      end
    end
  end
end
