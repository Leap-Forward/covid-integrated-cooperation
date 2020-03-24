class AirInitiative < AirTable
  self.table_name = "Initiatives"
  self.base_key = ENV['AIRTABLE_BASE']

  @model = "Initiative"
  @fields = {
    "Name" => "name",
    "Description" => "description",
    "Website" => "website",
    "Service Area Map Link" => :location_link
  }
end
