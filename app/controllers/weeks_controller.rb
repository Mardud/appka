class WeeksController < ApplicationController
  def create
    @goal = Goal.find(params[:goal_id])
    @week = @goal.weeks.create(params[:week].permit(:number))
    redirect_to users_path
  end

  def show
    @week = Goal.find(params[:goal_id]).weeks.find(params[:id])
  end
end
