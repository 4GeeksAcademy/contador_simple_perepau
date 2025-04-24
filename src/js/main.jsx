import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';


let counter = 0 


const app =ReactDOM.createRoot(document.getElementById('root')) 
setInterval(() => {
  
app.render(
  <React.StrictMode>
    <Home 
    digitSix={Math.floor(counter / 100000) % 10}
    digitFive={Math.floor(counter / 10000) % 10}
    digitFour={Math.floor(counter / 1000) % 10}
    digitThree={Math.floor(counter / 100) % 10}
    digitTwo={Math.floor(counter / 10) % 10}
    digitOne={Math.floor(counter / 1) % 10}
    />
  </React.StrictMode>,
)
counter ++
}, 1000)

