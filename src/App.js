import React, {useState} from 'react';
import './App.css';
import People from "./People/index";
import Home from "./People/home";
import Films from "./People/films";
import Species from "./People/species";
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8082/planets'
})

function App() {
  let [people_id, setPeopleId] = useState("");
  let [planet, setPlanet] = useState("");
  
  async function enterKey(e) {
    if (e.charCode == 13) {
      getPlanet();
    }
  }
  async function getPlanet() {
    people_id = parseInt(people_id);
    console.log(people_id)
    if (people_id == 0 || people_id == '' || !Number.isInteger(people_id)) {
      alert("Enter at least one value.");
      return;
    } else {
      let url = '/getById/' + people_id;
      let res = await api.get(url);
      setPlanet(res.data.planet)
    }
  }
  function changeInput (e) {
    setPeopleId(e.target.value)
  }
  
  function renderElement() {
    if (planet != '' && planet != {}) {
      return (
        <>
          <People people={planet}></People>
          <Home home={planet.homeworld}></Home>
          <Species species={planet.species}></Species>
          <Films films={planet.films}></Films>
        </>
      )
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='people'>
          <span>People ID: </span>
          <input type="text" id="people_id" value={people_id} onChange={changeInput} onKeyPress={enterKey}/>
          <button onClick={getPlanet}>Search...</button>
        </div>
        {renderElement()}
      </header>
    </div>
  );
}

export default App;
