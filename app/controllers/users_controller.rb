class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/total
  def total
    @users = User.all.map do |user|
      total = user.plans.sum(:work)
      color = ""
      if total <= 0.2
        color = "btn-danger"
      elsif total <= 0.5
        color = "btn-warning"
      elsif total <= 0.8
        color = "btn-success"
      elsif total <= 1.2
        color = "btn-primary"
      else
        color = "btn-danger"
      end

      {
        id: user.id,
        name: user.name,
        total: total,
        color: color
      }
    end

    render json: @users
  end


  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:number, :name, :dept_id, :group_id, :job_id, :team_id, :smonth, :emonth)
    end
end
