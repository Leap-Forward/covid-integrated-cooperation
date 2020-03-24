class AirTable < Airrecord::Table
  @@fields = {}
  @@model = ""
  @@store_air_type = false
  def self.fields
    @@fields
  end

  def self.model 
    @@model.constantize
  end

  def update_model model 
    model.update(self.map_fields)
  end  

  def find_model
    @@model.constantize.find_by(air_id: self.id)
  end

  def find_or_create_model
    self.class.model.find_or_create_by(air_id: self.id)
  end

  def sync 
    self.update_model self.find_or_create_model
  end

  def map_fields 
    attributes = {}
    @@fields.each_pair do |airtable_field, model_field| 
      case model_field 
      when :location_link
      when :multi_string
        self.map_multi_string airtable_field, self[airtable_field]
      else
        attributes[model_field] = self[airtable_field].chomp
      end
    end
    attributes["air_type"] = self.class.table_name if @@store_air_type
    attributes
  end

  def self.sync_all 
    all = self.all
    air_ids = all.collect {|e| e.id}
    model_query = self.model.where.not(air_id: air_ids)
    model_query = model_query.where(air_type: self.table_name) if @@store_air_type
    model_query.destroy_all

    all.each do | airrecord |
      airrecord.sync
    end
  end

end
