import React, { useState } from 'react'
import People from './People'
import Planet from './Planet'
import Error from './Error'
import axios from 'axios';
import { Router, Link } from '@reach/router'
import { navigate } from '@reach/router'


const StarWarsWrapper = () => {
    const [starWarsList, setStarWarsList] = useState([])

    const [ homeTown, setHomeTown] = useState([])

    const [ planetInfo, setPlanetInfo] = useState("")

    const submitHandler = (event) => {
        event.preventDefault();
        let str = document.getElementsByClassName('search')[0].value
        let id = document.getElementsByClassName('specific')[0].value
        axios.get(`https://swapi.co/api/${str}/${id}/`)
            .then(response => {
                setStarWarsList(response.data)
                console.log(starWarsList)
                if( str === 'people'){
                    let homeworld = (response.data.homeworld)
                    setPlanetInfo(response.data.homeworld)
                    axios.get(homeworld)
                        .then(response => {
                            setHomeTown(response.data)
                        })
                    navigate(`/people/${id}`)
                    
                }else{
                    navigate(`/planet/${id}`)
                }
            })
            .catch(err=>{
                navigate("/error")
            }) 
    }    
    const redirectHandler = (event) => {
        event.preventDefault();
        var url = planetInfo
        var id = url.substring(url.lastIndexOf("/")-1)
        console.log(id)
        axios.get(`https://swapi.co/api/planets/${id}`)
            .then(response => {
                setStarWarsList(response.data)
            })
        navigate(`/planet/${id}`)
    }
    
    return(
        <div>
            
        <form >
            <label >Search For: </label>
            <select className="search">
                <option value="people" >People</option>
                <option value="planets" >Planet</option>                
            </select>

                <input type="text" className="specific" placeholder="ID"/>
                <button onClick={submitHandler}>Search</button>                    
        </form>
        
        <Router>
            <People path="/people/:id" redirectHandler={redirectHandler} starWarsList={starWarsList} homeTown={homeTown} />
            <Planet path="/planet/:id" starWarsList={starWarsList} />
            <Error path ="/error" />
        </Router>
        </div>
    )
}

export default StarWarsWrapper