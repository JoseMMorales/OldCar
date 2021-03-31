# OldCar App 
### Final project of Full Stack Development Bootcamp at CodeSpace(Malaga).

## This project...
Front-end side of OldCar App, designed for people who loves classic cars, with lots of different brands and models. Built as user oriented for easily manage your favourites adverts, handling your own cars to be published, and even if you are not user registered you can put online your jewells on wheels. In this App communication is really important, so that's why email service is up and running for all users (Not/Yes) registered to keep in toush with OldCar Support team and owners who have left their credentials in the add.

Furthermore, there is an ADMIN area where user assigned with that role will be able to have a general overview of registered movements, being able to remove all users/cars who are not active in OldCar DDBB.

### Eveything you can do in OldCar...   
:+1: :tada: :computer: :confetti_ball: :clap: :grimacing:
* Multi search, combination of 6 different parameters(Selects/Inputs) to be more accurate in your research.
* Register and Login, having free access to your profile if you want to do any ammendment. 
* Favourite list, for your own reference at user area of cars you are in love.
* (Registered) Publish cars, totally car editable profiles to change content or images for being displayed.
* (Not registered) Publish cars, all details are ready for publishing (content, images), confirmation email will be sent through after all successful proccess is been completed.
* Admin Area, very specific area not available for all users as you should be assigned in your role.

## OldCar Stylessheet... 
A framework is been built with [Sass](https://sass-lang.com/)(Syntactically Awesome Style Sheets) for a stable and reusable system, each component has their own SCSS file in case there is any reason to use it in the future. Generally, the two pillars of this framework are [FlexBox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) for responsiveness in order to adapt the design to all devices.

#### Sass goodies used...
:candy: :chocolate_bar: :lollipop: :cookie:
Nesting, Mixins, Variables, Partials

## Security in Front-end...
:lock: Security is a very important task when creating an App, so I have given a few features to make sure OldCar is not vulnerable at all. Privates routes have been set up at App.js to assure that not users have access to those areas. Forms have been protected by validations for not getting any data that is not matching with that field. [JWT Web Token](https://jwt.io/introduction) has been used to confirm any user is registered, storage locally and cleaned up when users' sessions have finished.

## Demo...
### Multi search...
<img src="./public/gif/multiSearch.gif" />

### As a User...
<img src="./public/gif/user.gif" />

### As Admin...
<img src="./public/gif/admin.gif" />

## Installing
* **Note that you should have installed NodeJS ^10.16.3 to proceed with steps below**
* Clone the project to your local directory
* `$git clone https://github.com/JoseMMorales/OldCar.git`
* `$cd OldCar`
* `$npm install`
* `$npm start`

## Technologies: 
* NodeJS ^10.16.3
* ReactJS ^17.0.2
* Hooks
* CSS3
* Sass

## Dependencies used: 
* framer-motion: ^3.10.6
* jwt-decode: ^3.1.2
* react: ^17.0.2
* react-dom: ^17.0.2
* react-dropdown-select: ^4.7.4
* react-icons: ^4.2.0
* react-router-dom: ^5.2.0
* react-router-hash-link: ^2.4.0
* react-scripts: 4.0.1
* sass: ^1.32.8

## Author
Jose MMorales
