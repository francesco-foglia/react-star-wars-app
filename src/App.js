import React from 'react';
import './App.css';
import StarWarsContainer from "./features/people/StarWarsContainer";

function App() {
  return (
    <div className="container is-fluid my-5">
      {/* <div className='section'> */}
      <StarWarsContainer />
      {/* </div> */}
    </div>
  );
}

export default App;
