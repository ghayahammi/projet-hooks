import ReactStars from 'react-stars'
const SearchMovie=({ setsearchName ,setRating})=>{
  const ratingChanged = (newRating) => {
    setRating(newRating)
  }
  return (
    <div>

    <input onChange={(event)=> setsearchName (event.target.value)}/>
    <ReactStars  count={5} size={24} color2={'#ffd700'}   onChange={ratingChanged}/>
 
  
  
    </div>
  )
}
export default SearchMovie;