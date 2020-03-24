source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.4', '>= 5.2.4.2'
# Use sqlite3 as the database for Active Record
# gem 'sqlite3'
gem 'pg'
gem 'seedbank'
# Use Puma as the app server
gem 'puma', '~> 3.11'
gem 'dotenv-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
group :development do
  gem 'capistrano'
  gem 'capistrano-rvm'
  gem 'capistrano-rails'
  gem 'capistrano-bundler'
  gem 'capistrano-upstart-service'
  # gem 'cap-deploy-tagger', github: 'sharipov-ru/cap-deploy-tagger', branch: 'capistrano-3.7-support'
end

# Workers
gem 'redis-namespace'
gem 'sidekiq'
gem 'sidekiq-status'
gem 'sidekiq-history'
gem 'sidekiq-scheduler'
gem 'sinatra', require: false

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'coolline'              # sytax highlighting as you type
  gem 'coderay'               # use with coolline
  gem 'awesome_print'           # pretty pring debugging output  
end

group :development do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'better_errors'
  gem 'binding_of_caller'     # extra features for better_errors
  # gem 'meta_request'          # for rails_panel chrome extension

  # Guard
  gem 'guard-rspec'
  gem 'guard-bundler'
  gem 'guard-migrate'
  gem 'terminal-notifier-guard'  
end

group :test do
  gem 'minitest'                # include minitest to prevent require 'minitest/autorun' warnings

  # Testing
  gem 'rspec-its'
  gem 'rspec-rails'
  gem 'fuubar'
  gem 'json_spec'
  gem 'rspec-mocks'
  gem 'rspec_junit_formatter'
  gem 'rspec-instafail'
  gem 'rspec-sidekiq'

  gem "shoulda"
  gem 'shoulda-matchers'
  gem "shoulda-kept-assign-to"
  gem 'rspec-collection_matchers'
  gem 'database_cleaner'

  gem "factory_bot_rails"  
end

gem 'airrecord'


# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
