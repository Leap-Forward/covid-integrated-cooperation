class NeedCategoryResource < JSONAPI::Resource
  attributes :name

  # relationship :need_categories, to: :many
end
