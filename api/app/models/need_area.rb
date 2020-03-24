class NeedArea < ApplicationRecord
  has_and_belongs_to_many :need_categories
end
