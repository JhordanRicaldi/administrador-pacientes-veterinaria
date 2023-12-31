import React from 'react'
import { useState,useEffect } from 'react'
import { Error } from './Error'

export const Formulario = ({pacientes, setPacientes,dataPaciente,setDataPaciente}) => {

  const [nombre,setNombre] = useState('')
  const [propietario,setPropietario] = useState('')
  const [email,setEmail] = useState('')
  const [fecha,setFecha] = useState('')
  const [sintomas,setSintomas] = useState('')

  const [error, setError] = useState(false)

  const generarId  = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return fecha + random

  }

  useEffect(()=>{
    //revisa si el objeto esta vacio
      if (Object.keys(dataPaciente).length>0){
        setNombre(dataPaciente.nombre)
        setPropietario(dataPaciente.propietario)
        setEmail(dataPaciente.email)
        setFecha(dataPaciente.fecha)
        setSintomas(dataPaciente.sintomas)
      }

     
  },[dataPaciente])


  const handleSubmit = (e)=> {
    e.preventDefault();
    if([nombre,propietario,email,fecha,sintomas].includes('')){
      setError(true)
      return;
    }
    setError(false)

    //objeto paciente
    const ObjetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    } 

    if(dataPaciente.id){
      ObjetoPaciente.id = dataPaciente.id
      const datosActualizados = pacientes.map(pacienteState =>  pacienteState.id === 
        dataPaciente.id ? ObjetoPaciente : pacienteState)

      setPacientes(datosActualizados)
      setDataPaciente({})

    }else{
      //nuevo registro
      ObjetoPaciente.id = generarId();
      setPacientes([...pacientes, ObjetoPaciente])

    }

    //reiniciar formulario

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')



    
   


  }
  return (
    <div className=' md:w-1/2 lg:w-2/5 mb-6'>
      <h2 className=' text-center  font-black text-2xl'>Seguimiento Pacientes</h2>

      <p className=' text-center mt-2 font-medium mb-3'>
        Añade pacientes y <span className=' text-indigo-600'> Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className='  mt-5 bg-white rounded-md shadow-md py-7 px-5 mx-5 sm:m-4 md:m-2'    
      >
        <div className='mb-4'>

          {error && 
            <Error>Todos los campos son obligatorios</Error>
          }

          <label htmlFor="mascota"  className='block uppercase font-bold text-gray-600 mb-1'>
            Nombre mascota
            </label>

          <input type="text"
           id='mascota'
            placeholder='Nombre de la Mascota'
           className='w-full p-2 border-2 rounded-lg  placeholder-gray-400'
           value={nombre}
           onChange={ e => setNombre(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="propietario"  className='block uppercase font-bold text-gray-600 mb-1'>
            Nombre Propietario
            </label>

          <input type="text"
           id='propietario'
            placeholder='Nombre del Propietario'
           className='w-full p-2 border-2 rounded-lg  placeholder-gray-400'
           value={propietario}
           onChange={ e => setPropietario(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="email"  className='block uppercase font-bold text-gray-600 mb-1'>
            Email
            </label>

          <input type="email"
           id='email'
           
            placeholder='Email Contacto Propietario'
           className='w-full p-2 border-2 rounded-lg  placeholder-gray-400'
           value={email}
           onChange={ e => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="alta"  className='block uppercase font-bold text-gray-600 mb-1'>
            Alta
            </label>

          <input type="date"
           id='alta'
            placeholder='Nombre de la Mascota'
           className='w-full p-2 border-2 rounded-lg  placeholder-gray-400'
           value={fecha}
           onChange={ e => setFecha(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="sintomas"  className='block uppercase font-bold text-gray-600 mb-1'>
            Sintomas
            </label>
          <textarea  id='sintomas' className='w-full p-2 border-2 rounded-lg  placeholder-gray-400'
          placeholder='Describe los Sintomas'
          value={sintomas}
          onChange={e=> setSintomas(e.target.value)}
          />
        </div>

        <input type="submit" value={ dataPaciente.id ? "Editar Paciente" : "Agregar Paciente" }


          className=' bg-indigo-700 hover:bg-indigo-600 w-full rounded-lg p-2 text-white uppercase font-bold cursor-pointer'
          
        />
      </form>
    </div>
  )
}
