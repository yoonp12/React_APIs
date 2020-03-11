import React from 'react'

const People = ({starWarsList, homeTown, redirectHandler}) => {
    return(
        <div>
            <h2>Name:{starWarsList.name}</h2>
            <h2>Hair Color:{starWarsList.hair_color}</h2>
            <h2>Eye Color:{starWarsList.eye_color}</h2>
            <h2>Skin Color:{starWarsList.skin_color}</h2>
            <h2>Home Planet:<a onClick={redirectHandler}>{homeTown.name}</a></h2>
        </div>
    )
}

export default People