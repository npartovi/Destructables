# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!( {username: 'demo_user', password: 'password', email: 'username@username.com', profile_img: "data:image/png;base64,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"})
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

article2 = Article.create!({ title: "iPhone 6 disassembly, screen replacement and repair", img_url: "https://cdn.mos.cms.futurecdn.net/365c03a7a21f5a736b2c783b3b70f15d-480-80.jpg", user_id: user2.id})

step1 = Step.create!({ title: "", body: "Below you can see the sim removal pin and the iphone tool kit required for disassembly, which is available to order from our site. If you are replacing a badly cracked screen, cover it in sticky tape before starting.", ord: 1, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone61.jpg" })
step2 = Step.create!({ title: "", body: "First turn your phone off. Now remove the sim tray by pushing your sim removal tool into the hole circled below. If you don't have the sim removal tool, use something like a paperclip.", ord: 2, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone62.jpg" })
step3 = Step.create!({ title: "", body: "The sim tray has now been removed.", ord: 3, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone63.jpg" })
step4 = Step.create!({ title: "", body: "Next remove the 2 pentalobe screws, circled below.", ord: 4, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone64.jpg" })
step5 = Step.create!({ title: "", body: "Now attach a suction cup near the bottom of the screen, as shown below. If your screen is cracked, try and place the suction cup in an area which isn't damaged, but note that removal of the screens needs to start at the bottom end.", ord: 5, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone65.jpg" })
step6 = Step.create!({ title: "", body: "Pull the suction cup up and you should lift the screen enough to allow you to get the edge of a plastic tool under the edge of the screen, as pictured below. Lever up both bottom corners of the screen then run your plastic tool along both sides of the screen.", ord: 6, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone66.jpg" })
step7 = Step.create!({ title: "", body: "Lift the screen up like below and note the metal shield which covers the cable that connects the battery to the circuit board, indicated below.", ord: 7, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone67.jpg" })
step8 = Step.create!({ title: "", body: "Now remove the two screws, circled below, and lift the metal cover away.", ord: 8, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone68.jpg" })
step9 = Step.create!({ title: "", body: "The two screws and the metal shield have been removed and you can now access the cable that connects the battery to the circuit board. The cable has a plug and socket (press fit) type connection. Disconnect the cable by carefully levering it up, away from the circuit board.", ord: 9, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone69.jpg" })
step10 = Step.create!({ title: "", body: "The cable from the battery has now been disconnected.", ord: 10, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone610.jpg" })
step11 = Step.create!({ title: "", body: "Looking at the other end of the phone you'll see a metal cover held in place by 5 screws. Remove these screws and the metal cover (the EMI shield). Make sure the screws go back in the same position they were removed from as the screws are different sizes and can damage the circuit board if replaced in the wrong position.", ord: 11, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone611.jpg" })
step12 = Step.create!({ title: "", body: "The EMI shield has now been removed, as shown below. You now have access to four ribbon cables from the screen (only two are visible at first). Each of these cables has a plug and socket like connection, so lever each up, away from the circuit board. With the first two cables disconnected, you have access to the third and fourth cable. Again, these have a plug and socket like connection, so lever up, away from the circuit board. You can then lift the screen free.", ord: 12, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone612.jpg" })
step13 = Step.create!({ title: "", body: "Below you can see the screen, separated from the rest of the phone.", ord: 13, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone613.jpg" })
step14 = Step.create!({ title: "", body: "Now turn the screen over and remove all the screws you can see.", ord: 14, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone615.jpg" })
step15 = Step.create!({ title: "", body: "Now carefully disconnect the cable from the home button. Again, this cable has a plug and socket like connection, so lever up to disconnect. Be very careful not to damage the home button or cable, because although it is inexpensive to replace, the fingerprint recognition feature will not work with a replacement part and you will have a problem if you need to restore the phone.", ord: 15, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone616.jpg" })
step16 = Step.create!({ title: "", body: "The cable from the home button has now been disconnected. You now need to remove the large metal plate from the back of the screen. Note that the area circled below will be stuck down with double sided adhesive, so first use heat from a hot air gun or hairdryer to soften the adhesive then lift the metal plate free.", ord: 16, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone617.jpg" })
step17 = Step.create!({ title: "", body: "The metal plate has now been removed.", ord: 17, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone618.jpg" })
step18 = Step.create!({ title: "", body: "Now return to the home button. To remove the home button, first apply some heat from a hot air gun or hairdryer to soften the adhesive holding the cable, indicated by the arrow, in place. Carefully peel the cable away from the back of the screen. If the cable is firmly stuck, use more heat until it comes away without force. Again, be very careful not to damage this cable. Once the cable is free, push the home button though from the front of the screen. If the part is stuck, apply more heat and carefully push the part free. Do not use force.", ord: 18, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone619.jpg" })
step19 = Step.create!({ title: "", body: "The home button is now free.", ord: 19, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone620.jpg" })
step20 = Step.create!({ title: "", body: "If your new screen does not come with the earpiece, front facing camera or proximity sensor, then you'll need to remove them from your old screen. First lift the front facing camera, indicated by the arrow below, from right to left.", ord: 20, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone621.jpg" })
step21 = Step.create!({ title: "", body: "You now have access to the earpiece, indicated by the arrow below, which can simply be lifted free. To detach the flex ribbon cable for the front facing camera and proximity sensor, first apply some heat with a hot air gun or hair dryer for around 30 seconds, which will soften the adhesive holding it in place. The cable should now come away without force. If the part is stuck firmly, use more heat and a plastic tool to carefully lift the cable free.", ord: 21, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone622.jpg" })
step22 = Step.create!({ title: "", body: "The earpiece, front facing camera and proximity sensor are now free. Now simply reattach the parts to your new screen and reverse the whole procedure for reassembly. If you've found this disassembly guide useful, please support formymobile.co.uk and order the tools and parts you need from our site. We ship worldwide!", ord: 22, article_id: article2.id, step_img: "http://www.formymobile.co.uk/Dismantle/iphone623.jpg" })

article3 = Article.create!({ title: "Canon EOS Digital Rebel (300D) LCD Screen Replacement", img_url: "https://www.usa.canon.com/internet/wcm/connect/us/20a16e44-3720-4507-92bd-a84aac2066d9/digital_rebel-675x450.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-20a16e44-3720-4507-92bd-a84aac2066d9-l20U", user_id: user3.id})

step1 = Step.create!({ title: "Remove the eyecup", body: "Remove the eyecup by gently pushing it upwards, so it doesn't block us in the final step of pulling the back casing from the camera's body.", ord: 1, article_id: article3.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/RKVDPDvmBmPXWlwo" })
step2 = Step.create!({ title: "Remove bottom screws", body: "Remove the three 1/8' philips screws from the bottom of the back casing", ord: 2, article_id: article3.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/wcVP3sHZHK1aXyTY" })
step3 = Step.create!({ title: "Remove screws inside CF card compartment", body: "Open the CF card compartment by moving it upwards and tilting it away from the camera body.
Remove the two 3/16' philips screws besides the CF card slot opening.", ord: 3, article_id: article3.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/ABKtNZEE6UACvQwr" })
step4 = Step.create!({ title: "Remove screws from lateral rubber coating", body: "Remove the black screws from the camera's left rubber covering - note it is a 5/16' screw at the top and a 3/16' screw at the bottom.", ord: 4, article_id: article3.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/InqkUADnLR6LwOOb" })
step5 = Step.create!({ title: "Remove lateral rubber coating", body: "Remove lateral rubber coating", ord: 5, article_id: article3.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/qfBy1txQbRKnYHgi" })
step6 = Step.create!({ title: "Remove hidden screw from the back casing", body: "With a pointy tool, remove the soft cap covering the screw.Remove the 3/16' philips screw.", ord: 6, article_id: article3.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/Nrqdp3XMXZRJEwOa" })
step7 = Step.create!({ title: "Detach the back casing from the camera's body", body: "Use a plastic opening tool to help detaching the back casing from the camera's body.", ord: 7, article_id: article3.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/FyHNM1MonXIq2iOv" })
step8 = Step.create!({ title: "Lift back casing from the camera's body", body: "Carefully lift the back casing from the camera's body from left to right.", ord: 8, article_id: article3.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/vUOJl2ZKQUBSXFn3" })
step9 = Step.create!({ title: "Remove flat cable linking the camera's body to the back casing", body: "Locate the connector which holds the flat cable to the main circuit board. Unlock the connector by gently pulling up its black piece from the side the flat cable comes into it.
Pull the flat cable from the connector and you'll have completely removed the back casing from the camera.", ord: 9, article_id: article3.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/6R1IxGFfQ6SPI2lE" })
step10 = Step.create!({ title: "Remove screws from LCD chassis", body: "emove the three 1/8' philips screws holding the LCD chassis to the camera's body.", ord: 10, article_id: article3.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/HEuZQSWKMJhHn1dT" })
step11 = Step.create!({ title: "Remove power and flat data cable from the main board", body: "Remove the power cable from the main board.Unlock the flat cable connector by pulling out its black edges.Pull out the flat cable from the connector on the main board.", ord: 11, article_id: article3.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/wmWC6Urn3MNmNr1d" })

article4 = Article.create!({ title: "Xbox One Teardown", img_url: "https://d3nevzfk7ii3be.cloudfront.net/igi/K5QQnantx6DQiOjL", user_id: user4.id})

step1 = Step.create!({ title: "", body: "In hopes of finding some screws, or other magical entry point, we channel our inner dentist and use a metal spudger to remove the plaque rubber feet from the console.Just like sitting in the dentist's chair, we have no luck here. No screws. No easy way in. Novocaine, please!", ord: 1, article_id: article4.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/hiKwKVhZi2EfHRYb" })
step2 = Step.create!({ title: "", body: "Don't panic; we're prepared.Despite the lack of screws, we find a way in with a plastic opening tool—prying the grille up.This is similar to the Bottom Vent disassembly procedure in the Xbox 360.", ord: 2, article_id: article4.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/en1yOeQIVASjfA5K" })
step3 = Step.create!({ title: "", body: "Speak, friend, and enter. Giving the right password and freeing some clips, we gain access to the innards of the Xbox One.We flip open the top case, granting us a peek at the mines of Moria dark chambers within.While our first peek doesn't reveal much, we are ready to venture through shadow and circuit…", ord: 3, article_id: article4.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/E3vGmnPjieupNKR2" })
step4 = Step.create!({ title: "", body: "Our Pro Tech Screwdriver Set is almost as anxious to get into this console as we are.The Pro Tech set was much easier to get through customs than our backup opening tools.While we're not sure how they stand up against orcs, our screwdrivers are awesome for removing the small screws holding the Wi-Fi board in place.A quick wave of our spudger, and the Wi-Fi board is out and ready for inspection.Marvell Avastar 88W8897 2x2 MIMO Wi-Fi Combination Radio Chip Supports 802.11ac, NFC, Bluetooth and Wireless DisplayMarvell Avastar 88W8782U WLAN SOC w/USB 2.0 Interface Support", ord: 4, article_id: article4.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/nHM4VM61bXtP53GE" })
step5 = Step.create!({ title: "", body: "This is interesting. And by interesting we mean unique. We've uncovered a speaker inside the Xbox One. Or it could be an early prototype of an arc reactor. Probably a speaker.We're happy that this speaker is held in place with a simple plastic bracket—no tools required.", ord: 5, article_id: article4.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/XflqQXWcDNICYqaO" })
step6 = Step.create!({ title: "", body: "There are eight 64 mm T9 Torx screws securing the upper metal shield to the chassis.That is just over two-and-a-half inches of threaded fun!Game consoles are one place where we haven't seen the smaller, lighter, thinner trend taken to extremes—and we're okay with that. We like a device with a little meat on its bones, if it means finding standard fasteners like these screws—a win for repairability.", ord: 6, article_id: article4.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/QjLsOMlm2qEwsdk1" })
step7 = Step.create!({ title: "", body: "This is our first real glimpse inside the Xbox One.Well, that was easy. The entire Xbox One assembly simply lifts off from the lower case.We appreciate a mystery, wrapped in an enigma, hidden inside a hobbit hole as much as the next person, but for repair purposes, it's nice when things are a little more straightforward.How much do we care about the Hobbit Hole breakfast at Denny's? Oh, you know…", ord: 7, article_id: article4.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/N3lBLdcNKWJYmhLB" })
step8 = Step.create!({ title: "", body: "In another win for repairability, the Blu-ray/DVD drive is connected to the motherboard via a SATA data connector.", ord: 8, article_id: article4.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/dgoFVHVFqP6qHPtR" })
step9 = Step.create!({ title: "", body: "While we are tempted to re-watch the entire LOTR trilogy on Blu-ray, our own quest to destroy the One Xbox in the fires of the teardown table is more dire.", ord: 9, article_id: article4.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/R5EZNIhvy3K4ymIh" })
step10 = Step.create!({ title: "", body: "We take a look at the underside of the optical drive, finding a few ICs and a large ribbon cable:Microsoft MS0DDDSPB1 1326-BTSL ATNGS501Texas Instruments 37T AVY7", ord: 10, article_id: article4.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/RQQsaoHxgAXCInju" })
step11 = Step.create!({ title: "", body: "Unfortunately, the Xbox One doesn't officially feature a replaceable hard drive—but then, we're not much for playing by the rules. Out it comes.Bad news: replacing the hard drive requires voiding the warranty. Good news: it's a standard 2.5 inch SATA II drive. Sad news, the Xbox One doesn't support unformatted hard drives.Inside our Xbox One, we find a Samsung Spinpoint M8 ST500LM012 500 GB 5400 RPM with 8MB Cache SATA II 3.0Gb/s hard drive.", ord: 11, article_id: article4.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/Td6NTQAI5fJbfikf" })
step12 = Step.create!({ title: "", body: "The RF Module board detaches outward from the lower case.The back of the RF Module board features one lone IC from Info Storage Devices labeled 9160F1MS03 1327 2317B057. We believe this is an Audio User Interface chip from ", ord: 12, article_id: article4.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/goKqxLQ62nx2cKgf" })
step13 = Step.create!({ title: "", body: "'X' marks the spot. The heat sink/fan assembly is secured to the motherboard with a few T9 Torx screws.", ord: 13, article_id: article4.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/1CKRPtKjBKGonPtK" })
step14 = Step.create!({ title: "", body: "Flip motherboard to unscrew heatsink mount", ord: 14, article_id: article4.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/MNguYBYAkr3vgPnf" })
step15 = Step.create!({ title: "", body: "After the infamous red ring of death, we're not surprised to see a beefy cooling system on this Xbox.", ord: 15, article_id: article4.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/6CudjFuUBs32otCX" })
step16 = Step.create!({ title: "", body: "With that, game time is over! Let's tally up this console's repairability score.", ord: 16, article_id: article4.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/vPHTcevyGeWswqT2" })

article5 = Article.create!({ title: "Amazon Fire 5th Generation Screen and LCD Replacement", img_url: "http://tabletmonkeys.com/images/2015/09/Amazon-Fire-2015-2016-tablet-model-.jpg", user_id: user5.id})

step1 = Step.create!({ title: "", body: "While holding the device firmly, wedge the iFixit Opening Tool into the crease along the outer edge of the device (as shown in the image).Slowly, grind the iFixit Opening Tool into the crease along the outer edges of the device until the entire back cover loosens.", ord: 1, article_id: article5.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/UARiCtkcZdyrM4GO" })
step2 = Step.create!({ title: "", body: "Then, remove the back cover from the device.", ord: 2, article_id: article5.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/thKIHiluJZQ3gDeO" })
step3 = Step.create!({ title: "", body: "Pry the speaker from the case using the iFixit Opening Tool. Lift the speaker up from the device to remove the speaker wires from their groove in the case", ord: 3, article_id: article5.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/xWaNhJ4cJenFiAiK" })
step4 = Step.create!({ title: "", body: "Desolder the speaker wires from the motherboard.", ord: 4, article_id: article5.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/5DmMW2JNR6IhrUZb" })
step5 = Step.create!({ title: "", body: "The battery connector is located in the upper left corner of the Amazon Fire battery pack.To disconnect the battery connector, use angled ESD precision tweezers to lift the cables up and out of their socket.", ord: 5, article_id: article5.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/DCXOydZ2tIfPrt3M" })
step6 = Step.create!({ title: "", body: "Use a PH0 size Phillips screwdriver head to unscrew the five 2 mm screws on the motherboard. These screws are circled with red in the given image.", ord: 6, article_id: article5.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/2XT4DmjTGhbXvJCg" })
step7 = Step.create!({ title: "", body: "The LCD- Motherboard connector cable has a protective overlay that you must peel back with precision tweezers in order to expose the actual connector.", ord: 7, article_id: article5.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/UoYiBK2r3PQa6AqY" })
step8 = Step.create!({ title: "", body: "Gently pull down on the connector cable using precision tweezers in order to disconnect the cable.", ord: 8, article_id: article5.id, step_img: "" })
step9 = Step.create!({ title: "", body: " is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", ord: 9, article_id: article5.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/3tWr3Zg2TTf1eXkW" })
step10 = Step.create!({ title: "", body: "The rear facing camera wire connector must be disconnected in order to remove the motherboard.", ord: 10, article_id: article5.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/osNS3hcCk21C6SNJ" })
step11 = Step.create!({ title: "", body: "To remove the rear facing wire connector, insert the iFixit Opening Tool beneath the connector and wedge it upwards.", ord: 11, article_id: article5.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/aYhHMQ24dpWFZChK" })
step12 = Step.create!({ title: "", body: "Position the iFixit Opening Tool beneath the motherboard and pull upwards to remove the motherboard from its case.", ord: 12, article_id: article5.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/VXiZUQsqH4uouGy6" })
step13 = Step.create!({ title: "", body: "Because heat is required to remove the screen and LCD, it is advisable to remove the battery entirely as well.It is important to be very careful and use little force in this step. Too much force can damage the battery. A damaged battery can lead to an electrical fire or explosion of the battery.Carefully and slowly work the iFixit Opening Tool down the edge of the battery pack. Angle the tool to pry it up.When you have successfully lifted the battery pack up on one side or corner, carefully wedge the iFixit Opening Tool under the pack about 1/2' and work around the rest of the sides.", ord: 13, article_id: article5.id, step_img: 'https://d3nevzfk7ii3be.cloudfront.net/igi/ICw3PhKk1gkKaFfP' })
step14 = Step.create!({ title: "", body: "Use a heating tool such as an iOpener or Heat gun around the edges of the Amazon Fire's glass screen. The iOpener may take longer to use. However, a heat gun can warp the plastic if used incorrectly.As you heat the edges, use a separator tool such as a guitar pick to lift the glass panel up and hold it up as you work around the device.Do not use a separation tool on the top edge of the device where the front camera would be; the digitizer cable is located in this location and can easily be severed. Instead, work in a U shape until you have 3 sides lifted from the frameBe patient with this step because it can be very time consuming and remember to use proper safety gear when using a heating device.", ord: 14, article_id: article5.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/jiCjeQuKQDVycQ2Z" })
step15 = Step.create!({ title: "", body: "Note the digitizer cable coming through to the back as it may be hard to see! Carefully thread this piece through its slot and separate the glass panel from the device frame.", ord: 15, article_id: article5.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/PipEs1cUQ4aKbpYn" })
step16 = Step.create!({ title: "", body: "If you are simply trying to replace a broken screen, you may stop here in this guide and reverse the steps to reassemble your Amazon Fire.", ord: 16, article_id: article5.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/2JeUYWxcvfWDCthu" })
step17 = Step.create!({ title: "", body: "To remove the LCD panel, flip the device over and detach the LCD digitizer cable from the frame if they have become stuck together.You can use the iFixit Opening Tool to separate the LCD panel from the adhesive and it should come out of place with ease.", ord: 17, article_id: article5.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/FDCH21xfMUxrKFCJ" })

article6 = Article.create!({ title: "Game Boy Screen Replacement", img_url: "https://d3nevzfk7ii3be.cloudfront.net/igi/YE6UHeNqDdSTGXSh", user_id: user6.id})

step1 = Step.create!({ title: "Batteries", body: "Switch your Game Boy off and remove the cartridge.", ord: 1, article_id: article6.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/MmfOfLnbQfKIIhwX.medium" })
step2 = Step.create!({ title: "", body: "Use a fingernail (or small coin) to push down on the battery door latch and remove the battery door.", ord: 2, article_id: article6.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/VORhCOESyk6DFbfy.medium" })
step3 = Step.create!({ title: "", body: "Remove the six Triwing screws from the back of the device.", ord: 3, article_id: article6.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/hAxpUIKQ1bkZKCBu.medium" })
step4 = Step.create!({ title: "", body: "Gently separate the device's front casing from the back casing after you remove the screws.", ord: 4, article_id: article6.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/VATiKKXmO6xPnIBQ.medium" })
step5 = Step.create!({ title: "", body: "Slide the front side of the casing down to expose the ribbon cable connector.", ord: 5, article_id: article6.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/K4hgYWEJAYoY5aBM.medium" })
step6 = Step.create!({ title: "", body: "Grip the ribbon connector with your thumb and forefinger. Pull down gently until the connector, not the ribbon itself, comes out of its socket. Separate the front and back casings.", ord: 6, article_id: article6.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/HMqDKftyxTOnfOrt.medium" })
step7 = Step.create!({ title: "", body: "Remove the ten screws that connect the circuit board to the outer case.", ord: 7, article_id: article6.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/WRJaAtntxDbS5mjj.medium" })
step8 = Step.create!({ title: "", body: "Remove the circuit board from the outer case using a plastic opening tool.", ord: 8, article_id: article6.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/DCwnQnNmcDuYjill.medium" })
step9 = Step.create!({ title: "", body: "Disengage the the three plastic clips that secure the screen to the circuit board.", ord: 9, article_id: article6.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/OptHtECKE6TNtXKi.medium" })
step10 = Step.create!({ title: "", body: "Flip the circuit board over revealing the device screen. Remove the two screws connecting the screen and the circuit board.", ord: 10, article_id: articl6.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/auCgtEsx5KlNJjje.medium" })
step11 = Step.create!({ title: "", body: "Desolder each surface mount joint and remove the screen from the circuit board.", ord: 11, article_id: articl6.id, step_img: "https://d3nevzfk7ii3be.cloudfront.net/igi/eWgXrdgNQYgqmRie.medium" })

article7 = Article.create!({ title: "", img_url: "", user_id: user3.id})

# step1 = Step.create!({ title: "", body: "", ord: 12, article_id: articl6.id, step_img: "" })
# step1 = Step.create!({ title: "", body: "", ord: 13, article_id: articl6.id, step_img: "" })
# step1 = Step.create!({ title: "", body: "", ord: 14, article_id: articl6.id, step_img: "" })
# step1 = Step.create!({ title: "", body: "", ord: 15, article_id: articl6.id, step_img: "" })
# step1 = Step.create!({ title: "", body: "", ord: 16, article_id: articl6.id, step_img: "" })
# step1 = Step.create!({ title: "", body: "", ord: 17, article_id: articl6.id, step_img: "" })
# step1 = Step.create!({ title: "", body: "", ord: 18, article_id: articl6.id, step_img: "" })
# step1 = Step.create!({ title: "", body: "", ord: 19, article_id: articl6.id, step_img: "" })
# step1 = Step.create!({ title: "", body: "", ord: 20, article_id: articl6.id, step_img: "" })
# step1 = Step.create!({ title: "", body: "", ord: 21, article_id: articl6.id, step_img: "" })
# step1 = Step.create!({ title: "", body: "", ord: 26, article_id: articl6.id, step_img: "" })


