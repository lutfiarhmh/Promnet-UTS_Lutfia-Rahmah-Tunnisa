import React from 'react';
import stu from "./g/empat.jpg";
import du from "./g/dua.jpg";
import 'animate.css';

const Galery= () => {
  return (
    <div className="Galery" id="galery" >
            <h1>Galery</h1>
     <div  className="im welcome animate__animated animate__rubberBand">
     <img src={stu}alt="Foto"/>
       <img src={du}alt="Fotodu"/>
      
     </div>
     <footer>
            <div>
                <small>copyright &copy; 2023 - Lutfia Rahmah Tunnisa</small>
            </div>
            </footer>
            
     </div>

  );
}

export default Galery;