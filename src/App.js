import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {moviesData} from './moviesData';
import { useState } from 'react';
import Movie_list from './Movie_list';
import Add_movie from './Add_movie';
import SearchMovie from './SearchMovie'


function App() {
  const[data,setdata]=useState(moviesData)
  const [addmovie, setaddmovie] = useState(false);
  const [searchName,setsearchName]=useState('')
  const[ searchRating,setRating]=useState(0)
  console.log(data)
  const addhandler=(newMovie)=>{
    setdata([...data,newMovie])
  }
  return (
    <div >
     <SearchMovie setsearchName={setsearchName} setRating={setRating}/>
      <Add_movie addhandler={addhandler}/>
      <Movie_list moviesData={moviesData} searchName={searchName} searchRating={searchRating}/>
 
    </div>

    
  );
}

export default App;
