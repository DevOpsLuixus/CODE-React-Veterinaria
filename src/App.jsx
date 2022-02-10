import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import { ListadoPacientes } from './components/ListadoPacientes';





function App() {
  //codigo javascript
  const [paciente, setPaciente] = useState([]);



  return (
    //lo que se va en pantalla
    <div className='container mx-auto mt-20'>
      <Header />
        <div className='mt-12 md:flex'>
          <Formulario />
          <ListadoPacientes />
        </div>
    </div>
  )
}

export default App
