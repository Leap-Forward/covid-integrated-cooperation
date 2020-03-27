class NeedAreaResource < JSONAPI::Resource
  attributes :name

  relationship :need_categories, to: :many
end
