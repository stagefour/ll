
import './Menu.css';
import dish1 from '../assets/dish1.jpg';
import dish2 from '../assets/dish2.jpg';
import dish3 from '../assets/dish3.jpg';
import dish4 from '../assets/dish4.jpg';
import dish5 from '../assets/dish5.jpg';
import {
    Heading
  } from "@chakra-ui/react";



function MenuList () {



    const dishes = [
        {
            id: 1,
            name: 'The Magic of the Oven',
            url: dish1,
            description: 'Vegetables baked in our magic oven',
            price: '$5.95'
        },
        {
            id: 2,
            name: 'Legs on the Rice',
            url: dish2,
            description: 'Legs of the goat served on deliciously cooked rice',
            price: '$8.35'
        },
        {
            id: 3,
            name: 'The Sun of Terror',
            url: dish3,
            description: 'The dark sun made of kohlrabi, served with the chicken cutlet',
            price: '$3.55'
        },
        {
            id: 4,
            name: 'Vegetarian Dream',
            url: dish4,
            description: 'Baked potatoes served with two delicious sauces',
            price: '$3.95'
        },
        {
            id: 5,
            name: 'Four Eyed Legs',
            url: dish5,
            description: 'Grilled chicken legs served with boiled eggs and the argula salad ',
            price: '$6.95'
        } ];
    console.log (dishes);
    return (
    <>
    <Heading as="h4">ENJOY</Heading>
    <ul>
        {dishes.map((dish)=><li key={dish.id}>
            <div className='dishDiv'>
                <b>{dish.name}</b>
                <img src={dish.url} className="dishPic" alt="dish"/>
                <br/>
                {dish.description} <br/>
                Price: <b>{dish.price}</b>
            </div>
        </li>)}
    </ul>
    </>
    );
};

export default function Menu () {
    return (
        <>
        <div className='menuDiv'>
        <Heading as="h1">
        Little Lemon Restaurant!
        <br/>
        Our Menu:
        </Heading>
        <details>
            Here's our incredible menu <br/>
            If you want to order online - you can't<br/>
            Because this exercise is all about booking the table online<br/>
            So - don't really bother about this sub-page.<br/>
            Just - book the table and <b>come to us!!!</b><br/>
        </details>
        <section>
            <MenuList />
        </section>
        </div>
        </>
    );
};
