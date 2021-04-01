# OldCar App 
### Final project of Full Stack Development Bootcamp at CodeSpace(Malaga).

## This project...
Front-end side of OldCar App, designed for people who loves classic cars, with lots of different brands and models. Built as user oriented for easily manage your favourites adverts, handling your own cars to be published, and even if you are not user registered you can put online your jewells on wheels. In this App communication is really important, so that's why email service is up and running for all users (Not/Yes) registered to keep in toush with OldCar Support team and owners who have left their credentials in the add.

Furthermore, there is an ADMIN area where user assigned with that role will be able to have a general overview of registered movements, being able to remove all users/cars who are not active in OldCar DDBB.

### Eveything you can do in OldCar...   
:point_right: &nbsp; Multi search, combination of 6 different parameters(Selects/Inputs) to be more accurate in your research.<br />
:point_right: &nbsp; Register and Login, having free access to your profile if you want to do any ammendment.<br />
:point_right: &nbsp; Favourite list, for your own reference at user area of cars you are in love.<br />
:point_right: &nbsp; (Registered) Publish cars, totally car editable profiles to change content or images for being displayed.<br />
:point_right: &nbsp; (Not registered) Publish cars, all details are ready for publishing (content, images), confirmation email will be sent through after all successful proccess is been completed.<br />
:point_right: &nbsp; Admin Area, very specific area not available for all users as you should be assigned in your role.<br />

## OldCar Stylesheet... 
A framework is been built with [Sass](https://sass-lang.com/)(Syntactically Awesome Style Sheets) for a stable and reusable system, each component has their own SCSS file in case there is any reason to use it in the future. Generally, the two pillars of this framework are [FlexBox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) for responsiveness in order to adapt the design to all devices.

#### Sass goodies used...
:lollipop: Nesting, Mixins, Variables, Partials

## Security in Front-end...
#### :lock::lock: &nbsp; <b>Security is a very important task when creating an App, so I have given a few features to make sure OldCar is not vulnerable at all.</b> &nbsp; :lock::lock: <br /> 

* Privates routes have been set up at App.js to assure that not users have not access to those areas that is required being registered. <br/>
* Forms have been protected by validations for not getting any data that is not matching with that field.<br/> 
* [JWT Web Token](https://jwt.io/introduction) has been used to confirm any user is registered, storage locally and cleaned up when users' sessions have finished.

## Demo...
### Multi search...
As mentioned before multi search is done in tow sections of OldCar keeping search when going throgh details page for each car and refreshing your search details when reaching home page.

<img src="./public/gif/multiSearch.gif" />

### As a User...
Clear example of how to manage your own site at OldCar App, just a few clicks to create your profile as you want, with favourites and cars published with details that you want.

<img src="./public/gif/user.gif" />

### As Admin...
Admin is the most powerful role at OldCar as you can manage all profiles around, modifying the ones that are not active.

<img src="./public/gif/admin.gif" />

## App General Structure

<div align="center">

|**Main Structure**  | **Pages Structure** | | **Components Structure** |
| ------------- | ------------- | ------------- |
| ![Screenshot 2021-04-01 at 09 24 41](https://user-images.githubusercontent.com/43299285/113258348-1f3ce400-92cc-11eb-9870-652c93e2d687.png) | ![Pages](https://user-images.githubusercontent.com/43299285/113260104-29f87880-92ce-11eb-8917-46dc50268b2d.png) | ![Components](https://user-images.githubusercontent.com/43299285/113260144-35e43a80-92ce-11eb-9d32-49adec575247.png) |

</div>

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
