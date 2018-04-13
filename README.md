# Desctructables

Destructables is a single page web application built on Rails, React.js, Redux and Postgresql. It is inspired by Instructables and allows users to create projects with a step-by-step design that includes uploading photos. Users can also browse, search and comment on various projects.

# Features


## Navbar

[Imgur](https://i.imgur.com/OllNcNq.png)

The navbar is a react component that houses many other containers to perform various different functions. Users can Login and Sign Up. Search for various articles that have been submitted to the website. Users can also be redirected to the home page anytime by click on the home icon logo. Users will also be redirected to the Login page if they try to create a new article and are not logged in. Searches were queried by the backend through an AJAX request.

## Sign Up/In Page

[Imgur](https://i.imgur.com/JiXj33N.png)

Users are able to Login if they have an account with the website, and they will also have the ability to sign up with a username, email and password. Authroutes are enabled on features that users need to be logged in to use. Session cookies were created for either the case of a login or signup, and the backend will query the currentuser to enable the profile image for that user.

## Front Page

[Imgur](https://i.imgur.com/2Qf1OaW.png)

