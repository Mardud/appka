class TasksController < ApplicationController
  respond_to :json
  def index
    @tasks = Day.find(params[:day_id]).tasks
  end

  def create
    @day = Day.find(params[:day_id])
    @task = @day.tasks.create(params[:task].permit(:t_name, :done))
    redirect_to users_path
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

    if @task.update(params[:task].permit(:t_name, :done))
      redirect_to users_path
    else
      render 'edit'
    end
  end

  def destroy
    @task = Day.find(params[:day_id]).tasks.find(params[:id])
    @task.destroy

    redirect_to users_path
  end


  private
  def user_params
    params.permit(:email, :password)
  end
end
