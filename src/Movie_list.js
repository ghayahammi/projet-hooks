import React, { Component } from 'react';
import './App.css';
import Movie_Card from './Movie_card';

 


const Movie_list = ({moviesData,searchName,searchRating})=>{
    return (
      
      <div className="container">
     
      
      
       {moviesData
        .filter((el)=>(
          el.name.toLowerCase().includes(searchName.toLowerCase())&&
           el.rating >=searchRating   ))
           .map((el)=>(
      
          <Movie_Card el={el}/>

     ))
}
      </div>
    );
}
  export default Movie_list;
