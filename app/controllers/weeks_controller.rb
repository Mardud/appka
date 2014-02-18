class WeeksController < ApplicationController
  def create
    @goal = Goal.find(params[:goal_id])
    @week = @goal.weeks.create(params[:week].permit(:number))
    respond_to do |format|
      format.html { redirect_to users_path }
      format.json { render json: true }
    end
  end

  def show
    @week = Goal.find(params[:goal_id]).weeks.find(params[:id])
  end

  def index
    @week = Goal.find(params[:goal_id]).weeks.all

    respond_to do |format|
      format.json { render json: @week }
      format.html # show.html.erb
    end
  end
end
