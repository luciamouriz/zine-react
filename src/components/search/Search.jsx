import React, { useState } from 'react'

export const Search = () => {

    const [movies, setMovies] = useState([])

    



    return (
        <>
            <input type="text" name="texto" className="search" id="texto" placeholder="BUSCAR"  />
        </>
    )
}
