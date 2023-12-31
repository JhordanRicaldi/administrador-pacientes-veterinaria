import React from 'react'

export const Paciente = ({pacientes,setDataPaciente,eliminarPaciente}) => {
  const {nombre,propietario,email,fecha,sintomas,id} = pacientes;


  return (
    <div className='bg-white  mx-4  pt-5 p-5  my-4 '>
      <p className=' font-black text-md text-gray-600 uppercase py-1 '> 
        Nombre : 
        <span className=' normal-case  font-normal'> {nombre}</span> 
        </p>

        <p className=' font-black text-md text-gray-600 uppercase py-1 '> 
        Propietario : 
        <span className=' normal-case  font-normal'> {propietario}</span> 
        </p>

        <p className=' font-black text-md text-gray-600 uppercase py-1 '> 
        Email : 
        <span className=' normal-case  font-normal'> {email}</span> 
        </p>

        <p className=' font-black text-md text-gray-600 uppercase py-1 '> 
        Fecha Alta : 
        <span className=' normal-case  font-normal'> {fecha}</span> 
        </p>

        <p className=' font-black text-md text-gray-600 uppercase py-1 '> 
        Sintomas : {''}
        <span className=' normal-case  font-normal' > 
          {sintomas}
        </span> 
        </p>

        <div className='flex justify-between mt-2'>
          <button
           type='button'
           className=' bg-indigo-600  uppercase font-bold text-white rounded-lg px-8 py-2 
            hover:bg-indigo-500'
            onClick={()=>setDataPaciente(pacientes)}
            >
            Editar
          </button>
          <button type='button'
           className=' bg-red-600  uppercase font-bold text-white rounded-lg px-8 py-2 
            hover:bg-red-500'
            onClick={()=> eliminarPaciente(id)}
            >
            Eliminar
          </button>
        </div>

    </div>


  )
}
