class PlacesController < ApplicationController

  def index
    places = Place.all
    render json: places
  end

  def show
    place = Place.find(params[:id])
    render json: place
  end

  def create
    place = Place.new(place_params)
    # check the params sent by angular
    # binding.pry
    if place.save
      render json: place, status: 201
    else
      render json: { errors: place.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    place = Place.find(params[:id])
    if place.update(place_params)
      render json: place, status: 200
    else
      render json: { errors: place.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    place = Place.find(params[:id])
    if place.destroy
      render nothing: true, status: 204
    else
      render json: { errors: place.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
    def place_params
      params.require(:place).permit(:name, :description, :city_id)
    end

end
