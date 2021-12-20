import React, {Component} from 'react';
import './index.css';
// import People from "./people/index";
// import axios from 'axios';

function Films(props) {
    console.log("props = ", props);
    return (
        <div className='border'>
            <p>Films</p>
            <div class="home">
                <div class="two-column">
                    <span className='left-title'>Title:</span>
                    <span className='content'>{props.films.title}</span>
                </div>
                <div class="two-column">
                    <span className='left-title'>Director:</span>
                    <span className='content'>{props.films.director}</span>
                </div>
                <div class="two-column">
                    <span className='left-title'>Producers:</span>
                    <span className='content'>{props.films.producer}</span>
                </div>
                <div class="two-column">
                    <span className='left-title'>Release Date:</span>
                    <span className='content'>{props.films.release_date}</span>
                </div>
            </div>
        </div>
    );
}

export default Films;