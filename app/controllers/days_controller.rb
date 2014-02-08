class DaysController < ApplicationController
  def create
    @week = Week.find(params[:week_id])
    @day = @week.days.create(params[:day].permit(:d_num))
    redirect_to users_path
  end

  def show
    @day = Week.find(params[:week_id]).days.find(params[:id])
  end
end
