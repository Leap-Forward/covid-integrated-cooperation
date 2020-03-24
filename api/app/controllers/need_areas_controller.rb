class NeedAreasController < ApplicationController
  before_action :set_need_area, only: [:show, :update, :destroy]

  # GET /need_areas
  def index
    @need_areas = NeedArea.all

    render json: @need_areas
  end

  # GET /need_areas/1
  def show
    render json: @need_area
  end

  # POST /need_areas
  def create
    @need_area = NeedArea.new(need_area_params)

    if @need_area.save
      render json: @need_area, status: :created, location: @need_area
    else
      render json: @need_area.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /need_areas/1
  def update
    if @need_area.update(need_area_params)
      render json: @need_area
    else
      render json: @need_area.errors, status: :unprocessable_entity
    end
  end

  # DELETE /need_areas/1
  def destroy
    @need_area.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_need_area
      @need_area = NeedArea.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def need_area_params
      params.require(:need_area).permit(:name)
    end
end
