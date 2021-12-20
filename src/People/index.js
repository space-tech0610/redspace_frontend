import React, {Component} from 'react';
import './index.css';
// import People from "./people/index";
// import axios from 'axios';

function People(props) {
    console.log("props = ", props);
    return (
        <>
            <div class="two-column">
                <span>Name:</span>
                <span className='content'>{props.people.name}</span>
                <span>Height:</span>
                <span className='content'>{props.people.height}</span>
            </div>
            <div class="two-column">
                <span>Mass:</span>
                <span className='content'>{props.people.mass}</span>
                <span>Hair Color:</span>
                <span className='content'>{props.people.hair_color}</span>
            </div>
            <div class="two-column">
                <span>Skin Color:</span>
                <span className='content'>{props.people.skin_color}</span>
                <span>Gender:</span>
                <span className='content'>{props.people.gender}</span>
            </div>
            <div class="two-column">
                <span>Birth Year:</span>
                <span className='content'>{props.people.birth_year}</span>
                <span></span>
                <span className='content'></span>
            </div>
        </>
    );
}

export default People;