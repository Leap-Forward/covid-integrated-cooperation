class InitiativesController < ApplicationController
  before_action :set_initiative, only: [:show, :update, :destroy]

  # GET /initiatives
  def index
    @initiatives = Initiative.all

    render json: @initiatives
  end

  # GET /initiatives/1
  def show
    render json: @initiative
  end

  # POST /initiatives
  def create
    @initiative = Initiative.new(initiative_params)

    if @initiative.save
      render json: @initiative, status: :created, location: @initiative
    else
      render json: @initiative.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /initiatives/1
  def update
    if @initiative.update(initiative_params)
      render json: @initiative
    else
      render json: @initiative.errors, status: :unprocessable_entity
    end
  end

  # DELETE /initiatives/1
  def destroy
    @initiative.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_initiative
      @initiative = Initiative.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def initiative_params
      params.require(:initiative).permit(:air_id, :name, :description, :available, :website, :lat, :lng)
    end
end
