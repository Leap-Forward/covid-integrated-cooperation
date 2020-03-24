class AirNeedTaxonomy < AirTable
  self.table_name = "Need Taxonomy"
  self.base_key = ENV['AIRTABLE_BASE']

  @@model = "NeedCategory"
  @@fields = {
    "Need" => "name",
    "Type of Need" => :multi_string
  }

  def map_multi_string airtable_column, values
    if airtable_column == "Type of Need"
      chomped_values = []
      my_model = self.find_model
      (values || []).each do | value |
        chomped_values << value.chomp
        my_model.find_or_create_need_area_by(name: chomped_values.last)
      end
      to_remove = my_model.need_areas.where.not(name: chomped_values)
      my_model.need_areas.delete(to_remove) unless to_remove.blank?
    end
  end


  # has_many :brews, class: "Brew", column: "Brews"

  # def self.chinese
  #   all(filter: '{Country} = "China"')
  # end

  # def self.cheapest_and_best
  #   all(sort: { "Rating" => "desc", "Price" => "asc" })
  # end

  # def location
  #   [self["Village"], self["Country"], self["Region"]].compact.join(", ")
  # end

  # def green?
  #   self["Type"] == "Green"
  # end
end
