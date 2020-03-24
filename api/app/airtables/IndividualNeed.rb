require 'airrecord'

puts "IndividualNeed"

class IndividualNeed < Airrecord::Table
  self.base_key = ENV['AIRTABLE_BASE']
  self.table_name = "IndividualNeeds"

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
