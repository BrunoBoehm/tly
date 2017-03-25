class Track < ApplicationRecord
  has_many :track_places
  has_many :places, through: :track_places
end
