
require 'sidekiq-scheduler'
# require 'dotenv'
# Dotenv.load('.env')
# puts "ENV: #{ENV.keys} #{ENV.values}"

# Dir.glob(File.expand_path(File.join('app', 'airtables', '*.rb')), &method(:require))

class AirtableSync
  include Sidekiq::Worker

  def perform
    AirNeedTaxonomy.sync_all
    AirInitiative.sync_all
    AirIndividualNeed.sync_all
    AirFamilyNeed.sync_all
  end
end

