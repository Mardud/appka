class UsersController < ApplicationController
  respond_to :json
  before_filter :authenticate_user!
  def new
    @user = User.new
  end

  def index
    @users = User.all
  end

  def create
    @user = User.create(user_params)
    respond_to do |format|
      format.json { render json: @user }
      format.html # show.html.erb
    end
    head :ok
  end

  def show
    @user = current_user

    respond_to do |format|
      format.json { render json: @user }
      format.html # show.html.erb
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def current
    @user = current_user

    respond_to do |format|
      format.json { render json: @user }
      format.html # show.html.erb
    end
  end

  def update
    @user = current_user

    if @user.update(params[:user].permit(:email, :password))
      redirect_to @user
    else
      render 'edit'
    end
  end

  def destroy
    @user = current_user
    @user.destroy
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
