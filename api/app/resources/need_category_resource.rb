class NeedCategoryResource < JSONAPI::Resource
  attributes :name, :initiative_count

  relationship :initiatives, to: :many  
  relationship :needs, to: :many  

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
