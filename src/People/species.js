import React, {Component} from 'react';
import './index.css';
// import People from "./people/index";
// import axios from 'axios';

function Species(props) {
    console.log("props = ", props);
    return (
        <div className='border'>
            <p>Species</p>
            <div class="home">
                <div className='two-column'>
                    <span className='right-title'>Title:</span>
                    <span className='content'>{props.species.name}</span>
                </div>
                <div className='two-column'>
                    <span className='right-title'>Average Lifespan:</span>
                    <span className='content'>{props.species.average_lifespan}</span>
                </div>
                <div className='two-column'>
                    <span className='right-title'>Classification:</span>
                    <span className='content'>{props.species.classification}</span>
                </div>
                <div className='two-column'>
                    <span className='right-title'>Language:</span>
                    <span className='content'>{props.species.language}</span>
                </div>
            </div>
        </div>
    );
}

export default Species;