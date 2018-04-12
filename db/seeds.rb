# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!( {username: 'username', password: 'password', email: 'username@username.com'})
user2 = User.create!( {username: 'nima', password: 'password1', email: 'nima@gmail.com', profile_img: "http://wordpress-blog-assets-production.s3.amazonaws.com/e/wp-content/uploads/2018/03/JoJos-Bizarre-Adventure.jpg" })
user3 = User.create!( {username: 'yujie', password: 'password1', email: 'yujie@gmail.com', profile_img: "https://img.kpopmap.com/2016/05/SooHan.jpg" })
user4 = User.create!( {username: 'andy', password: 'password1', email: 'andy@gmail.com', profile_img: "http://kb4images.com/images/profile-pictures/37318255-profile-pictures.jpg" })
user5 = User.create!( {username: 'lex', password: 'password1', email: 'lex@gmail.com', profile_img: "http://www.messagescollection.com/wp-content/uploads/2015/04/cute-cat-profile-for-facebook.jpg"})
user6 = User.create!( {username: 'e-baby', password: 'password1', email: 'e-baby@gmail.com', profile_img: "https://assets.entrepreneur.com/content/3x2/1300/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?width=700&crop=2:1"})

article1 = Article.create!({ title: "Dell Latitude 13-7350 Palmrest Touchpad Removal & Installation", img_url: "https://images-na.ssl-images-amazon.com/images/I/61u9L8dCZSL._SL1200_.jpg", user_id: user1.id })

step1 = Step.create!({ title: "disconnect tablet", body: "Slide button to the left to unlock tablet from base", ord: 1, article_id: article1.id, step_img: "https://www.parts-people.com/blog/wp-content/uploads/2016/03/undocktablet.jpg" })
step2 = Step.create!({ title: "unscrew keyboard" , body: "Use flat head screwdriver to pry open and remove Keyboard Bezel.
Unscrew palmrest and keyboard screws (7 x M2 x 3mm)." , ord: 2, article_id: article1.id, step_img: "https://www.parts-people.com/blog/wp-content/uploads/2016/03/kbbezelremoval.jpg" })
step3 = Step.create!({ title: "Unscrew bottom", body: "Unscrew an remove Bottom Base Cover (8 x 2mm x 3mm T4 torx) (2 x 2mm x 6mm T4 torx).", ord: 3, article_id: article1.id, step_img: "https://www.parts-people.com/blog/wp-content/uploads/2016/03/base2x3torx.jpg" })
step4 = Step.create!({ title: "Cable Removal", body: "Unplug and remove cable. Unscrew and remove SD Card (2 x M2 x 3mm).", ord: 4, article_id: article1.id, step_img: "https://www.parts-people.com/blog/wp-content/uploads/2016/03/2.jpg" })
step5 = Step.create!({ title: "Unplug DC Jack cabel", body: "Unplug and remove cables.
Unscrew and remove USB Circuit Board (2 x M2 x 3mm).
Unplug DC Jack cable.", ord: 5, article_id: article1.id, step_img: "https://www.parts-people.com/blog/wp-content/uploads/2016/03/usbcircuitboard2x3.jpg" })
step6 = Step.create!({ title: "Unscrew Inner Bottom", body: "Unscrew and remove DC Jack (1 x M2 x 3mm).", ord: 6, article_id: article1.id, step_img: "https://www.parts-people.com/blog/wp-content/uploads/2016/03/dcjackscrew.jpg" })
step7 = Step.create!({ title: "Disconnect Cable", body: "Disconnect cables from circuit board.
Unscrew and remove USB / Display Port Circuit Board (2 x M2 x 3mm).", ord: 7, article_id: article1.id, step_img: "https://www.parts-people.com/blog/wp-content/uploads/2016/03/usbdisplayportcircuitboard2x3.jpg" })
step8 = Step.create!({ title: "Remove Cables", body: "Unplug and remove cables.
Unscrew and remove Docking Station Mainboard (2 x M2 x 3mm).", ord: 8, article_id: article1.id, step_img: "https://www.parts-people.com/blog/wp-content/uploads/2016/03/base2x6torx.jpg" })
step9 = Step.create!({ title: "Hinge Removal", body: "Remove hinge cover.
Unscrew and remove LCD Hinges (9x M2.5 x 5mm).", ord: 9, article_id: article1.id, step_img: "https://www.parts-people.com/blog/wp-content/uploads/2016/03/hingecoverremoval.jpg" })
step10 = Step.create!({ title: "Ribbon Cable Reveal", body: "Turn over ribbon and unplug keyboard connectors.
Remove Keyboard.
The remaining part is the Palmrest Touchpad", ord: 10, article_id: article1.id, step_img: "https://www.parts-people.com/blog/wp-content/uploads/2016/03/keyboardcables.jpg" })


