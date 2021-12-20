import React, {Component} from 'react';
import './index.css';
// import People from "./people/index";
// import axios from 'axios';

function Home(props) {
    console.log("props = ", props);
    return (
        <div className='border'>
            <p>Home planet</p>
            <div class="home">
                <div>
                    <span>Title:</span>
                    <span className='left-padding'>{props.home.name}</span>
                </div>
                <div>
                    <span>Terrain:</span>
                    <span className='left-padding'>{props.home.terrain}</span>
                </div>
                <div>
                    <span>Population:</span>
                    <span className='left-padding'>{props.home.population}</span>
                </div>
            </div>
        </div>
    );
}

export default Home;