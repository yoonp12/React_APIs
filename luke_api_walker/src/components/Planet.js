import React from 'react'

const Planet = ({starWarsList}) => {
    return(
        <div>
            <h2>Name: {starWarsList.name}</h2>
            <h2>Climate: {starWarsList.climate}</h2>
            <h2>Terrain: {starWarsList.terrain}</h2>
            <h2>Surface Water: {starWarsList.surface_water}</h2>
            <h2>Population: {starWarsList.population}</h2>

        </div>
    )
}

export default Planet