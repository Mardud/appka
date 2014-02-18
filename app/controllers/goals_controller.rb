class GoalsController < ApplicationController
  def create
    @goal = current_user.goals.create(params[:goal].permit(:name, :cycle, :cycles, :start))
    respond_to do |format|
      format.json { render json: @goal }
      format.html # show.html.erb
    end
    head :ok
  end


  def edit
    @goal = current_user.goals.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @goal }
    end
  end


  def update
    @goal = current_user.goals.find(params[:id])

    if @goal.update(params.permit(:name, :cycle, :cycles, :start))
      respond_to do |format|
        format.html { redirect_to users_path }
        format.json { render json: @goal }
      end
    else
      render 'edit'
    end
  end

  def destroy
    @goal = current_user.goals.find(params[:id])
    @goal.destroy

    respond_to do |format|
      format.html { redirect_to users_path }
      format.json { render json: true }
    end
  end

  def show
    @goal = current_user.goals.find(params[:id])

    respond_to do |format|
      format.json { render json: @goal }
      format.html # show.html.erb
    end
  end

  def index
    @goals = current_user.goals.all

    respond_to do |format|
      format.json { render json: @goals }
      format.html # show.html.erb
    end
  end
end
