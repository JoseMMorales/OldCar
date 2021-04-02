# OldCar App 
### Final project of Full Stack Development Bootcamp at CodeSpace(Malaga).

## About this project...
Front-end side of OldCar App, designed for people who loves classic cars, it contains a variety of different brands and models. In this site the user can easily manage favourites adverts, handling  published cars, and even if you are not registered you can put online your jewels on wheels. 

In OldCar communication is really important, so that's why email service is up and running for all users no matter either you are registered or not, just drop an email to keep in touch with OldCar Support team and cars' owners.

Furthermore, there is an ADMIN area where user assigned with that role will have a general overview of all activities, being able to remove all users/cars who are not active in OldCar DDBB.

### Everything you can do in OldCar...   
:x: &nbsp; <b>Multi search:</b> It is a combination of 6 different parameters(Selects/Inputs) to be more accurate in your research.<br />
:x: &nbsp; <b>Register and Login: </b> Create accounts with your details and having access to them.<br />
:x: &nbsp; <b>Favourites:</b> Make your own list of cars you are in love with, it will be displayed in you user area.<br />
:x: &nbsp; <b>To publish cars as a registered user:</b> Publish and edit your own cars, it will be possible to update content and images.<br />
:x: &nbsp; <b>To publish cars as a NOT registered user:</b> Publish and edit your own cars with all details needed, a confirmation email will be sent through after all successful process is been completed.<br />
:x: &nbsp; <b>Admin Area:</b> Very specific area not available for all users as you should be assigned in your role. If so, you can delete account/cars not active.<br />

## Front End Stack...
<div align="center">

![Screenshot 2021-04-01 at 11 53 00](https://user-images.githubusercontent.com/43299285/113277266-d6435a80-92e0-11eb-80c6-c11e5953dd8e.png)

</div>

## OldCar Hooks... 
To extract stateful logic from components, Hooks is perfect, so not hierarchy changing is need to share it among many components.

### Hooks goodies used...
:fishing_pole_and_fish: &nbsp; useHistory, useLocation, useState, useEffect, and useRef.

## OldCar Stylesheet... 
A framework is been built with [Sass](https://sass-lang.com/)(Syntactically Awesome Style Sheets) for a stable and reusable system, each component has their own SCSS file in case there is any reason to use it in the future. Generally, the two pillars of this framework are [FlexBox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) for responsiveness in order to adapt the design to all devices.

### Sass goodies used...
:lollipop: &nbsp; Nesting, Mixings, Variables, Partials

## Security in Front-end...
#### :lock::lock: &nbsp; <b>Security is a very important task when creating an App, so I have given a few features to make sure OldCar is not vulnerable at all.</b> &nbsp; :lock::lock: <br /> 

* Privates routes have been set up at App.js to assure that not users have not access to those areas that is required being registered. <br/>
* Forms have been protected by validations for not getting any data that is not matching with that field.<br/> 
* [JWT Web Token](https://jwt.io/introduction) has been used to confirm any user is registered, storage locally and cleaned up when users' sessions have finished.

## Demo...
### Multi search...
As mentioned before multi search is done in tow sections of OldCar keeping search when going through details page for each car and refreshing your search details when reaching home page.

<div align="center">
  <img src="./public/gif/multiSearch.gif" />
</div>

### Logged User...
Clear example of how to manage your own site at OldCar App, just a few clicks to create your profile as you want, with favourites and cars published with details that you want.

<div align="center">
  <img src="./public/gif/user.gif" />
</div>

### As Admin...
Admin is the most powerful role at OldCar as you can manage all profiles around, modifying the ones that are not active.

<div align="center">
  <img src="./public/gif/admin.gif" />
</div>

## App General Structure...

<div align="center">

|**Main Structure**  | **Pages Structure** | **Components Structure** |
| ------------------ | ------------------- | ------------------------ |
| ![Screenshot 2021-04-01 at 11 35 49](https://user-images.githubusercontent.com/43299285/113274838-6c29b600-92de-11eb-9fe3-0d4bf3a64d05.png) | ![Pages](https://user-images.githubusercontent.com/43299285/113260104-29f87880-92ce-11eb-8917-46dc50268b2d.png) | ![Components](https://user-images.githubusercontent.com/43299285/113260144-35e43a80-92ce-11eb-9d32-49adec575247.png) |

</div>

## Installing
* **Note that you should have installed NodeJS ^10.16.3 to proceed with steps below**
* Clone the project to your local directory
* `$git clone https://github.com/JoseMMorales/OldCar.git`
* `$cd OldCar`
* `$npm install`
* `sass --watch src/scss/styles.scss:build/css/styles.css`
* Open a new window terminal
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

## Dev Dependencies used: 
* sass: ^1.32.8

## Author
Jose MMorales
