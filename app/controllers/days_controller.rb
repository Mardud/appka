class DaysController < ApplicationController
  def create
    @week = Week.find(params[:week_id])
    @day = @week.days.create(params[:day].permit(:d_num))
    respond_to do |format|
      format.html { redirect_to users_path }
      format.json { render json: true }
    end
  end

  def show
    @day = Week.find(params[:week_id]).days.find(params[:id])
  end

  def index
    @day = Week.find(params[:week_id]).days.all

    respond_to do |format|
      format.json { render json: @day }
      format.html # show.html.erb
    end
  end
end
