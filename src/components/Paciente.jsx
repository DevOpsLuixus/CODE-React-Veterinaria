import React from 'react';

export const Paciente = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Propietario: {''}
      <span className='font-normal normal-case'>
        Luis
      </span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Email: {''}
      <span className='font-normal normal-case'>
        Hook@hook.com
      </span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Fecha Alta: {''}
      <span className='font-normal normal-case'>
        10 Diciembre de 2021
      </span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Síntomas: {''}
      <span className='font-normal normal-case'>
        lorem ipsum dolor sit am
      </span>
    </p>


  </div>
  )};