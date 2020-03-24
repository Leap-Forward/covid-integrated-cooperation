
require 'sidekiq-scheduler'

class AirtableSync
  include Sidekiq::Worker

  def perform
    puts 'Hello world'
  end
end

