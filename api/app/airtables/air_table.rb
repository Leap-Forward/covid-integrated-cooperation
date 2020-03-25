# Dir.glob(File.expand_path(File.join('app', 'airtables', '*.rb')), &method(:require))
# require 'airrecord'
# Dotenv.load('.env')
# puts "ENV air_table: #{ENV.keys} #{ENV.values}"
# Airrecord.api_key = ENV['AIRTABLE_API_KEY']

class AirTable < Airrecord::Table
  @fields = {}
  @model = ""
  @store_air_type = false
  def self.fields
    @fields
  end

  def blank_record?
    false
  end

  def self.model 
    @model.constantize
  end

  def self.store_air_type
    @store_air_type
  end

  def update_model model 
    model.update(self.map_fields)
  end  

  def find_model
    self.class.model.find_by(air_id: self.id)
  end

  def find_or_create_model
    self.class.model.find_or_create_by(air_id: self.id)
  end

  def sync 
    unless self.blank_record?
      self.update_model self.find_or_create_model
    end
  end

  def map_fields 
    attributes = {}
    self.class.fields.each_pair do |airtable_field, model_field| 
      Rails.logger.debug("syncing #{self.class.table_name}/#{self.id} #{airtable_field}:#{self[airtable_field]}")
      case model_field 
      when :location_link
      when :multi_string
        self.map_multi_string airtable_field, self[airtable_field]
      when :need_categories #TODO: refactor this placing key logic in child class
        self.map_need_categories self[airtable_field]
      when :initiatives
        self.map_initiatives self[airtable_field]        
      else
        attributes[model_field] = self[airtable_field]&.chomp
      end
    end
    attributes["air_type"] = self.class.table_name if self.class.store_air_type
    attributes
  end

  def map_need_categories air_keys
    my_model = self.find_model
    (air_keys || []).each do | air_key |
      unless my_model.need_categories.find_by(air_id: air_key)
        my_model.need_categories << NeedCategory.find_by(air_id: air_key)
      end
    end
    my_model.save
    to_remove = my_model.need_categories.where.not(air_id: air_keys)
    my_model.need_categories.delete(to_remove) unless to_remove.blank?
  end

  def map_initiatives air_keys
    my_model = self.find_model
    (air_keys || []).each do | air_key |
      unless my_model.initiatives.find_by(air_id: air_key)
        my_model.initiatives << Initiative.find_by(air_id: air_key)
      end
    end
    my_model.save
    to_remove = my_model.initiatives.where.not(air_id: air_keys)
    my_model.initiatives.delete(to_remove) unless to_remove.blank?
  end
 

  def self.sync_all 
    all = self.all
    air_ids = all.collect {|e| e.id}
    model_query = self.model.where.not(air_id: air_ids)
    model_query = model_query.where(air_type: self.table_name) if self.store_air_type
    model_query.destroy_all

    all.each do | airrecord |
      airrecord.sync
    end
  end

end
