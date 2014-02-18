class TasksController < ApplicationController
  respond_to :json
  def index
    @tasks = Day.find(params[:day_id]).tasks
    respond_to do |format|
      format.json { render json: @tasks }
      format.html # show.html.erb
    end
  end

  def create
    @day = Day.find(params[:day_id])
    @task = @day.tasks.create(params[:task].permit(:t_name, :date ,:done))
    respond_to do |format|
      format.html { redirect_to users_path }
      format.json { render json: true }
    end
  end

  def show
    @task = Day.find(params[:day_id]).tasks.find(params[:id])

    respond_to do |format|
      format.json { render json: @user }
      format.html # show.html.erb
    end
  end

  def edit
    @task = Day.find(params[:day_id]).tasks.find(params[:id])
  end

  def update
    @task = Day.find(params[:day_id]).tasks.find(params[:id])

    if @task.update(params[:task].permit(:t_name, :date ,:done))
      redirect_to users_path
    else
      render 'edit'
    end
  end

  def destroy
    @task = Day.find(params[:day_id]).tasks.find(params[:id])
    @task.destroy
    respond_to do |format|
      format.html { redirect_to users_path }
      format.json { render json: true }
    end
  end


  private
  def user_params
    params.permit(:email, :password)
  end
end
