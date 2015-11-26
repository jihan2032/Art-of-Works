source 'https://rubygems.org'
gem 'rails', '4.2.3'
gem 'mysql2', '~> 0.3.18'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'database_cleaner'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc

group :development, :test do
  gem 'byebug'
  gem 'web-console', '~> 2.0'
  gem 'spring'
end

group :production do
  gem 'unicorn'
  gem 'pg'
end

group :production do 
  gem 'unicorn-worker-killer'
end

gem 'autoprefixer-rails'
gem 'carrierwave'
gem 'bootstrap-sass'
gem 'haml-rails'
gem 'mini_magick'
gem 'searchkick'

group :development, :staging, :test do
  gem 'factory_girl_rails'
  gem 'faker'
  gem 'simplecov', require: false
end

group :development, :test do
  gem 'rspec-rails'
  gem 'rspec-collection_matchers'
end

group :test do
  gem 'rspec_junit_formatter'
end

gem 'kaminari'
group :development, :staging, :test do
  gem 'pry'
end

group :development do
  gem 'quiet_assets'
  gem 'annotate'
end

group :development do
  gem 'capistrano-rvm', require: false
  gem 'capistrano-passenger', require: false
  gem 'capistrano-rails', require: false
  gem 'capistrano-sidekiq', require: false
end
gem 'db_fixtures_dump'
gem 'devise'
