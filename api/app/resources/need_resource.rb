class NeedResource < JSONAPI::Resource
  attributes :name

  relationship :initiatives, to: :many
end
