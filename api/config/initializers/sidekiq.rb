# require 'dotenv'
# require 'airrecord'
# Dotenv.load('.env')
# puts "ENV initializer: #{ENV.keys} #{ENV.values}"
sidekiq_config = { url: ENV['ACTIVE_JOB_URL'] }
# Airrecord.api_key = ENV['AIRTABLE_API_KEY']

Sidekiq.configure_server do |config|
  config.redis = sidekiq_config
  Sidekiq::Status.configure_client_middleware config, expiration: 30.minutes
  
  config.on(:startup) do
  end
end

Sidekiq.configure_client do |config|
  config.redis = sidekiq_config
  Sidekiq::Status.configure_client_middleware config, expiration: 30.minutes  
end
