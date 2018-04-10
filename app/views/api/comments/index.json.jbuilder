json.comments @comments.each do |comment|
  json.body comment.body
  json.profileImg  asset_path(comment.user.profile_img.url)
  json.userName comment.user.username
end