class CitiesController < ApplicationController

  def index
    cities = City.all
    render json: cities
  end

  def show
    city = City.find(params[:id])
    render json: city
  end

  def create
    city = City.new(city_params)
    if city.save
      render json: city, status: 201
    else
      render json: { errors: city.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    city = City.find(params[:id])
    if city.update(city_params)
      render json: city, status: 200
    else
      render json: { errors: city.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    city = City.find(params[:id])
    if city.destroy
      render nothing: true, status: 204
    else
      render json: { errors: city.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
    def city_params
      params.require(:city).permit(:name, :description)
    end

end
