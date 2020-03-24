class NeedArea < ApplicationRecord
  has_and_belongs_to_many :need_categories
  has_many :needs, through: :need_categories
  has_many :initiatives, through: :needs
end
