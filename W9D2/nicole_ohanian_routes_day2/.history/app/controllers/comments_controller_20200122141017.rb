class CommentsController < ApplicationController

    def create
        new_comment = Comment.new(comment_params)
        model_error_checker(new_comment)
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