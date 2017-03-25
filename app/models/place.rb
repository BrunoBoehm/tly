class Place < ApplicationRecord
  belongs_to :city
  has_many :track_places
  has_many :tracks, through: :track_places
end
