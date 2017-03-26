class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :places
end
