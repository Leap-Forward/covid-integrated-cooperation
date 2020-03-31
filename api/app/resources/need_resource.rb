class NeedResource < JSONAPI::Resource
  attributes :name, :initiative_count
  attribute :need_type, delegate: :air_type

  relationship :initiatives, to: :many
  relationship :need_categories, to: :many


  def self.updatable_fields(context)
    super - [:initiative_count]
  end

  def self.creatable_fields(context)
    super - [:initiative_count]
  end
 
  def initiative_count
    @model.initiatives.count
  end  
end
