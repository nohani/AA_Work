class CommentsController < ApplicationController

    def create
        new_comment = Comment.new(comment_params)
        model_error_checker(new_comment)
    end

    def index
        if comment_params.has_key?(:user_id)
            comments = User.find(comment_params[:user_id]).comments
        elsif comment_params.has_key?(:artwork_id)
            comments = Artwork.find(comment_params[:artwork_id]).comments)
        end

        if comments.empty?
            render plain: "No records found."
        else
            render json: comments
        end
    end

    def destroy
        comment = Comment.find(params.require(:id))
        if comment
            render json: comment.destroy
        else
            render json: comment.errors.full_messages, status: 404
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:user_id, :artwork_id, :body)
    end
end