class CommentsController < ApplicationController

    def create
    end

    def index
    end

    def destroy
    end

    private

    def comment_params
        params.require(:comment).permit(:user_id, :artwork_id, :body)
    end
end