class BandsController < ApplicationController

  before_action :ensure_logged_in

  def new
    render :new
  end

  def create
    @band = Band.new(band_params)

    if @band.save
      flash[:success] = ["You have added your band"]
      redirect_to bands_url
    else
      flash.now[:errors] = @band.errors.full_messages
      render :new
    end
  end

  def edit
    render :edit
  end

  def udpate
    @band = Band.find_by(id: params[:id])

    if @band.update(band_params)
      flash[:success] = ["You have added your band"]
      redirect_to bands_url
    else
      flash[:errors] = @band.errors.full_messages
      render :edit
    end
  end

  def index
    @bands = Band.all 
  
    render :index
  end

  def show
    @band = Band.find_by(id: params[:id])

    :show
  end

  def destroy
    @band = Band.find_by(id: params[:id])

    @band.destroy if @band

  end

  private

  def band_params
    params.require(:band).permit(:name)
  end
end
