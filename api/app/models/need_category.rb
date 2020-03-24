class NeedCategory < ApplicationRecord
  has_and_belongs_to_many :need_areas
  has_and_belongs_to_many :needs
  
  def find_or_create_need_area_by attributes
    unless self.need_areas.find_by attributes
      self.need_areas << NeedArea.find_or_create_by(attributes)
      self.save
    end
  end
end
