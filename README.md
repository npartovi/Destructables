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

Front page will display various articles that have been submitted. Each Article item is a link straight to article that will render the article with image and body text for each step. Using AJAX requests to fetch particular projects and render them using React.

## Create New Article Form

[Imgur](https://i.imgur.com/UXOaplI.png)

Upon clicking the create new article button, users will be present with a modal that will take in a title for the article that you will be publishing. Here users can add images an optional title for each step as well as body text and a step image. Using ActiveRecord, form data was appended in order to package up the projects that consists of steps, which in turn consist of photos so that the backend will handle creating the project along with the necessary associations.

## Article Show Page

[Imgur](https://i.imgur.com/vH97lRC.png)

Users can see the step-by-step guide that another user has created. Implementation: An AJAX request was used to fetch the necessary data for React to render.


## Comments

[Imgur](https://i.imgur.com/3aicbr1.png)

Users will be able to comment on each Article show page at the bottom. Comment authors will be presented with a delete or edit button upon submitting their comment. Commenting is only allowed for logged in users. non-logged in users will not see the comment form.



