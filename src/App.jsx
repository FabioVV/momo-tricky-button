import { useState } from 'react'
import Teddy from './assets/teddy.jpg'
import gif from './assets/g.gif'

import './App.css'

function changeButtonPos(){
  let button = document.getElementById('no')
  
  let X = Math.floor((Math.random() * 600) + 1);
  let Y = Math.floor((Math.random() * 600) + 1);

  // button.style.transform  = `translate(${X}px, ${Y}px)`
  //button.setAttribute('disabled', '')
  button.style.position  = `absolute`
  button.style.left  = `${X}px`
  button.style.top  = `${Y}px`

}



function App() {
  const [yes, setYes] = useState(false)
  

  return (
    <>
      

      {yes ? <h1>Eu também te amo ❤🥺❤</h1>:<h1>Momo, você me ama?</h1>}

      <div id='foto'>
        <img height={350} width={250} src={gif} className="logo" alt="Vite logo" />
      </div>

      <main>

        <div id='buttons'>
          <button onClick={()=>setYes(true)} className="button-9" role="button">Sim</button>
          <button onMouseOver={()=>changeButtonPos()} onClick={()=>changeButtonPos()} className="button-9 no" role="button" id='no'>Não</button>
        </div>

      </main>
    </>
  )
}

export default App
