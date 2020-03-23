class NeedCategoriesController < ApplicationController
  before_action :set_need_category, only: [:show, :update, :destroy]

  # GET /need_categories
  def index
    @need_categories = NeedCategory.all

    render json: @need_categories
  end

  # GET /need_categories/1
  def show
    render json: @need_category
  end

  # POST /need_categories
  def create
    @need_category = NeedCategory.new(need_category_params)

    if @need_category.save
      render json: @need_category, status: :created, location: @need_category
    else
      render json: @need_category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /need_categories/1
  def update
    if @need_category.update(need_category_params)
      render json: @need_category
    else
      render json: @need_category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /need_categories/1
  def destroy
    @need_category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_need_category
      @need_category = NeedCategory.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def need_category_params
      params.require(:need_category).permit(:name)
    end
end
