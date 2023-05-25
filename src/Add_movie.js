import { useState } from "react";
import ReactModal from "react-modal";
import "./Add_movie.js";
import './App.css';


const Add_movie = ({ addhandler }) => {
    const [modalIsOpen, setModal] = useState(false);
    const [name,setname]=useState("")
    console.log(name)
    const [rating,setrating]=useState("")
    const [date,setdate]=useState("")
    const [seasons,setseasons]=useState("")
    const [type,settype]=useState("")
    const [description,setdescription]=useState("")
    const [image,setimage]=useState("")

    const open = () => {
        setModal(true);
      };
      const close = () => {
        setModal(false);
      };
      const add = () => {
        const newmovie = {
          id: Math.random(),
          name,
          rating,
          description,
          date,
          type,
          image,
          seasons,
        };
        
        addhandler(newmovie);
        close();
      };
    return(  <div >
             <div className="Add-btn-container">
        <button onClick={open} className="btn-play">
          Add Movie
        </button>
        <ReactModal isOpen={modalIsOpen} className="add-modal">
        <form>
             <label>
                 Name:
             <input type="text" name="name"  
             value={name} 
             onChange={(e)=>(setname(e.target.value))}
             />
             Rating:
             <input type="text"  value={rating} 
             onChange={(e)=>(setrating(e.target.value))}/>
                 Date: 
                 <input type="text"   value={date} 
             onChange={(e)=>(setdate(e.target.value))}/>
                 Seasons:
                 <input type="text"   value={seasons} 
             onChange={(e)=>(setseasons(e.target.value))}/>
                 Type :
                 <input type="text"  value={type} 
             onChange={(e)=>(settype(e.target.value))}/>
                 Description :
                 <input type="text"  value={description} 
             onChange={(e)=>(setdescription(e.target.value))}/>
                 Image :
                 <input type="text"  value={image} 
             onChange={(e)=>(setimage(e.target.value))}/>
            </label>
         </form>
         <button className="Modal-btn" onClick={close}>
            close{" "}
          </button>
          <button className="Modal-btn" onClick={add}>
            submit{" "}
          </button>
        </ReactModal>
        </div>
     </div>
       )
    
   
      
    

}
export default Add_movie;