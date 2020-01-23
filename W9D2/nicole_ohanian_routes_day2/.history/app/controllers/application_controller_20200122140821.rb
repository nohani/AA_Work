class ApplicationController < ActionController::Base

    def invalid_model_error(model)
        if model.save
        render json: model
        else
        render json: { errors: model.errors.full_messages }, status: 422
        end
    end
end
