class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :city_id
  belongs_to :city
end
