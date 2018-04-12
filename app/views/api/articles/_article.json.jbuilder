json.extract! article, :id, :title
json.img_url asset_path(article.img_url)

json.user do
  json.name article.user.username
  json.id article.user_id
end