# json.id @article.id
# json.body @article.body
# json.title @article.title
# json.imgUrl asset_path(@article.img_url.url)
# json.comments @article.comments


json.set! :article do 
	json.id @article.id
	json.body @article.body
	json.title @article.title
	json.imgUrl asset_path(@article.img_url.url)
end

json.set! :comments do 
	@article.comments.each do |comment|
		json.set! comment.id do  
			json.partial! "api/comments/comment", comment: comment
		end 
	end
end


json.set! :steps do 
	@article.steps.each do |step|
		json.set! step.id do 
			json.extract! step, :id, :title, :body, :ord, :article_id, :step_img
		end
	end
end


