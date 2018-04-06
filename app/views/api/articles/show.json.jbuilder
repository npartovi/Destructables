json.id @article.id
json.body @article.body
json.title @article.title
json.image_url asset_path(@article.img_url.url)