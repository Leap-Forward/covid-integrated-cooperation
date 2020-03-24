sidekiq_config = { url: ENV['ACTIVE_JOB_URL'] }

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
