class AirTable < Airrecord::Table
  @@fields = {}
  @@model = ""
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
      attributes[model_field] = self[airtable_field]
      attributes["air_type"] = self.class.table_name
    end
    attributes
  end

  def self.sync_all 
    byebug
    all = self.all
    air_ids = all.collect {|e| e.id}
    self.model.where.not(air_id: air_ids).destroy_all
    all.each do | airrecord |
      airrecord.sync
    end
  end

end
