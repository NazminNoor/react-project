

import './App.css'
import CardDitails from './Components/cards/CardDitails'
import {BrowserRouter, Router,Routes,Route} from 'react-router-dom'


import Cards from './Components/cards/Cards'
import Form from './Components/Item/Form'

function App() {
  

  return (
    <>
     {/* <Form/> */}
   
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/cardditails" element={ <CardDitails/>} />
        
      </Routes>
     
     </BrowserRouter>

    </>
  
    
  )
}

export default App
