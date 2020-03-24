class AirFamilyNeed < AirTable
  self.table_name = "Family"
  self.base_key = ENV['AIRTABLE_BASE']

  @model = "Need"
  @fields = {
    "Need" => "name",
    "Taxonomy" => :need_categories,
    "Initiatives" => :initiatives
  }
  @store_air_type = true
end
