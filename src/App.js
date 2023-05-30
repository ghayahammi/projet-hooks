import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {moviesData} from './moviesData';
import { useState } from 'react';
import Movie_list from './Movie_list';
import Add_movie from './Add_movie';
import SearchMovie from './SearchMovie';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Details from './Details';


function App() {
  const[data,setdata]=useState(moviesData)
  const [addmovie, setaddmovie] = useState(false);
  const [searchName,setsearchName]=useState('')
  const[ searchRating,setRating]=useState(0)
  console.log(data,'fff')
  const addhandler=(newMovie)=>{
    setdata([...data,newMovie])
  }
  return (
    <div >
     <Routes> 
      <Route path="/" element={<SearchMovie setsearchName={setsearchName} setRating={setRating}/>}/>
      </Routes>
      <Routes>
      <Route path="/" element={ <Add_movie addhandler={addhandler}/>}/>
      </Routes>
      <Routes>
      <Route path="/" element={<Movie_list moviesData={data} searchName={searchName} searchRating={searchRating}/>
      }/> </Routes>
      <Routes>
      <Route path="/Details/:id" element={<Details/>}/>
    </Routes>

    </div>

    
  );
}

export default App;
