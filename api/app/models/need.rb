class Need < ApplicationRecord
  has_and_belongs_to_many :initiatives  
  has_and_belongs_to_many :need_categories
end
