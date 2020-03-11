import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from '@reach/router'
import StarWarsWrapper from './components/StarWarsWrapper';

function App() {
  return (
    <div className="jumbotron d-flex justify-content-around">
        <StarWarsWrapper path="/" />

    </div>
  );
}

export default App;
