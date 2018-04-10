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
			json.extract! comment, :id, :user_id, :body, :article_id, :created_at
			json.user_name comment.user.username
			json.profileImg asset_path(comment.user.profile_img.url)
		end 
	end
end


json.set! :steps do 
	@article.steps.each do |step|
		json.set! step.id do 
			json.extract! step, :id, :title, :body, :ord, :article_id
		end
	end
end


