

import './App.css';
import { useEffect, useState } from 'react';

function App() {
   const [img,setImg]=useState([])
  useEffect(()=>{
     fetch('https://random-d.uk/api/random ')
    .then(response => response.json())
    .then (data => {
      console.log(data)
      setImg(data)
    })
  },[])
  return (
    <div className="App">
                      
                      <img src={img.url} alt="bd.uk" />     
    </div>
  );
}

export default App;
