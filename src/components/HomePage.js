
import './HomePage.css';
import aboutpicture from '../assets/lobster.jpg';
import {
    Heading
  } from "@chakra-ui/react";


export default function HomePage () {
    return (
    <>
    <div className='homepageDiv'>
        <article className='textAbout'>
                <Heading as="h1">
                Little Lemon Restaurant!
                </Heading>
                <img src={aboutpicture} className='imageRestaurantPic' alt='vision of love'></img>
            Little Lemon restaurant, bla bla bla,<br/>
            We are proud, bla, bla, bla<br/>
            In Chicago everyone knows Little Lemon, because it's the coolest place in town<br/>
            We are <b>THE BEST</b><br/> 
            Our founder was Helopolis Yzhaklyvalis, Greek immigrant.
            In 1966 he arrived bla bla bla bla bla bla.
            We are Proud to serve you the best meals, prepared with fresh indigrients, with love and passion <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </article>
    </div>
    </>
    );
}