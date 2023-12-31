import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { ListadoPacientes } from './components/ListadoPacientes'
import './App.css'

function App() {

  // const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState([])

  const [dataPaciente ,setDataPaciente] = useState({})

  useEffect(()=>{
    const ObtenerLS = () =>{
      const pacientesLS  = JSON.parse( localStorage.getItem('pacientes')) ?? [];
      setPacientes (pacientesLS)
    }
    ObtenerLS();
  },[])

  useEffect(()=>{
    localStorage.setItem( 'pacientes' , JSON.stringify( pacientes ))
  },[pacientes])

  const eliminarPaciente = (id) =>{
      const pacientesActualizados = pacientes.filter((item)=> item.id !== id ) 
      setPacientes(pacientesActualizados)

  }



  return (  
    <div className=' container mx-auto '>
  
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          dataPaciente={dataPaciente}
          setDataPaciente={setDataPaciente}
        />
        <ListadoPacientes pacientes={pacientes} setDataPaciente={setDataPaciente} eliminarPaciente={eliminarPaciente}/>
      </div>

    </div>
  )
}

export default App
