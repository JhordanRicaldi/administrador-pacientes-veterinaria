import React from 'react'
import { Paciente } from './Paciente'

export const ListadoPacientes = ({pacientes,setDataPaciente,eliminarPaciente}) => {


  return (
    <div className=' md:w-1/2 lg:w-3/5 md:overflow-y-scroll  md:h-screen   md:mb-0'>

      {
        pacientes && pacientes.length ? (
          
          <>
          <h2 className=' text-center  font-black text-2xl'>Listado de Pacientes</h2>

          <p className='text-center mt-2 font-medium mb-3'>Administra tus {''}
            <span className='text-indigo-600'> 
              Pacientes y Citas
            </span>
          </p>
              
            {
              pacientes.map((paciente)=>{
                return(<Paciente pacientes={paciente} setDataPaciente={setDataPaciente} key={Math.random()}
                eliminarPaciente={eliminarPaciente}
                />)
              })
              
            }
        </>
        ) : (
          
          <div className=' justify-center  items-center'>
            <h2 className=' text-center  font-black text-2xl'>No hay Pacientes</h2>

            <p className='text-center mt-2 font-medium mb-3 mx-5'>Empieza agregando pacientes {''}
              <span className='text-indigo-600'> 
                y apareceran en este lugar
              </span>
            </p>
          </div>

          
        )
      }



    </div>
  )
}
