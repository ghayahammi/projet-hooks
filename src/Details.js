import React from 'react'
import { useParams } from 'react-router-dom'
import {moviesData} from './moviesData'
import { Link } from 'react-router-dom'

const Details = () => {
    const{id}=useParams();
    console.log(id,"idddd")
    const film = moviesData.find((el)=> el.id === Number(id));
  return (
    <div>
      <iframe width="804" height="452" src={film.trailer}> </iframe>
      <button> <Link to ='/'>Back to MoviesCards </Link></button>
    </div>
  )
}

export default Details



