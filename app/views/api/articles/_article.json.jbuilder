json.extract! article, :id, :title, :created_at
json.image_url asset_path(project.image.url(:thumb))

json.author project.author, :username, :id
json.profile_pic asset_path(project.author.image.url(:avatar))

if project.title.length > 25
  json.short_title project.title[0..25] + " ..."
else
  json.short_title project.title
end