import { useState } from 'react'
// import { useGlobalContext } from '../context'

const register = () => {
  return (
    <div className='flex flex-col items-center md:justify-center h-screen'>
      <div className='w-full md:w-60 bg-white shadow-md rounded-sm p-4'>
        <h1 className='text-2xl font-medium pb-8'>Register User</h1>
        <form>
          <label htmlFor='email'>Email</label>
          <br />
          <input
            type='text'
            className='border-2 border-gray-300 rounded-sm mb-5 w-full'
          />
          <br />

          <label htmlFor='name'>Name</label>
          <br />
          <input
            type='text'
            className='border-2 border-gray-300 rounded-sm mb-5 w-full'
          />
          <br />

          <label htmlFor='password'>Password</label>
          <br />
          <input
            type='password'
            className='border-2 border-gray-300 rounded-sm mb-5 w-full'
          />

          <i className='text-red-500 text-[0.8rem] pb-4 block font-medium'>
            error
          </i>
          <button className='bg-black text-white rounded-sm font-bold w-full py-2'>
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
export default register
