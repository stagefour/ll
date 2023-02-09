import './Main.css';
import demonic from '../assets/demonic.jpg';

import {
    Heading
  } from "@chakra-ui/react";


export default function Main () {
    return (
        <>
        <div className='specialsDiv'>
            <Heading as="h1">
                Little Lemon Restaurant!<br/>
                Specials for today
            </Heading>
            <details>
                Here's going to be some special offers, promotions etc. <br/>
                I've put something in it just for show.<br/>
                But it's not what this exercise is about,<br/>
                so this sub-page seems a bit empty.<br/>
                Jump into the book-table stuff <b>and grade it well ;)</b><br/>
            </details>
        <div className="rowRow">
        <img className="specialPic" src={demonic} alt="demonicChef"></img>
        <article>
            <b>Here are our specials for today:</b><br/>
            Here - in the nearest future - the list of superb special offers will show up. <br/>
            For now - it's just for testing.
        </article>
        </div>
        </div>
        </>
    );
};

