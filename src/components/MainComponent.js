import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Search from './Search'
import Results from './Results'
import Popup from './Popup'

function MainComponent() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "https://api.themoviedb.org/3/search/movie?api_key=f3a05026119d09f84c9aaef927a18ac2&language=en-US&query=${value}&page=1&include_adult=false";

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=f3a05026119d09f84c9aaef927a18ac2&language=en-US&query=${value}&page=1&include_adult=false")
    .then(({ data }) =>{
      let results = data.results;
      // console.log(results)
        setState(prevState => {
          return { ...prevState, results: results }
        })
    })
  },[])

  const search = (e) => {
       const value = state.s
    if (e.key === "Enter") {
      axios(`https://api.themoviedb.org/3/search/movie?api_key=f3a05026119d09f84c9aaef927a18ac2&language=en-US&query=${value}&page=1&include_adult=false`).then(({ data }) => {
        let results = data.results;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    console.log("Id"+ id)
    axios(apiurl + "&id=" + id).then(({ data }) => {
      let result = data.results[0];

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Search Movies</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default MainComponent
