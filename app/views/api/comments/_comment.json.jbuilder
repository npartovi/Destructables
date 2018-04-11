json.extract! comment, :id, :user_id, :body, :article_id, :created_at
json.user_name comment.user.username
json.profileImg asset_path(comment.user.profile_img.url)