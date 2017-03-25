class TrackPlace < ApplicationRecord
  belongs_to :place
  belongs_to :track
end
