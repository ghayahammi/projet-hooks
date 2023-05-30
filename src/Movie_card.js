import React, { Component } from 'react';
import './App.css';
import ReactStars from 'react-stars';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

 
function App({el}){
  return(

        <div className="test">
      
      <Link to={`/Details/${el.id}`} > 
        <img src={el.image} alt="Film" />
        </Link> 
<div className="hello">
  
{
            <ReactStars
              count={5}
              size={15}
              activeColor="#ffd700"
              value={el.rating}
              edit={false}
            />
          }
</div>
<div className="hello">
<p1>Name:</p1>
  <p>{el.name}</p>
</div>
<div className="hello">
<p1>Date:</p1>
  <p>{el.date}</p>
</div>
<div className="hello">
<p1>Type:</p1>
  <p>{el.type}</p>
</div>
<div className="hello">
<p1>Seasons:</p1>
  <p>{el.seasons}</p>
</div>
<div className="hello">
<p1>Description:</p1>
  <p>{el.description}</p>
</div>

</div>
)
}

 




  

  export default App;
