import React from 'react'
import logo from '../assets/logo.png'
import { useGlobalContext } from '../context'
import { navMenuItems } from '../utils/file'
const Navbar = () => {
  const {
    subMenuId,
    setSubMenuId,
    IsMenuOpen,
    setIsMenuOpen,
    searchTerm,
    setSearchTerm,
  } = useGlobalContext()

  return (
    <div>
      <nav className=' flex items-center justify-between px-2 sm:px-4 py-2 sm:py-4 xl:py-[initial]'>
        <a href='/' className='xl:hidden'>
          <img src={logo} alt='Logo' className='w-11' />
        </a>
        <div className='flex gap-6 text-gray-500 text-[1.3rem] xl:hidden'>
          <i className='fa-regular fa-user'></i>
          <i className='fa-solid fa-language'></i>
          <button onClick={() => setIsMenuOpen(!IsMenuOpen)}>
            <i className='fa-solid fa-bars'></i>
          </button>
        </div>
        {IsMenuOpen && (
          <div className='absolute top-15 xl:top-[initial] right-5 bg-white rounded-md box pl-13 pr-8 py-4 w-80! lg:w-fit! lg:flex lg:gap-6 xl:bottom-0 xl:left-17 z-10 '>
            {navMenuItems.map((item) => {
              const { id, icon, title, navMenu } = item
              return (
                <div key={id}>
                  <div className='flex justify-between items-center py-3'>
                    <div className='flex gap-4 -ml-7'>
                      {icon}
                      <h1 className='font-bold text-[0.9rem]'>{title}</h1>
                    </div>
                    <button
                      type='button'
                      className='focus:outline-none' // Remove default button styles if needed
                      onClick={() => {
                        setSubMenuId(subMenuId === id ? null : id)
                      }}
                    >
                      <i className='fa-solid fa-angle-down block! lg:hidden! text-gray-300 '></i>
                    </button>
                  </div>
                  <ul
                    className={`cursor-pointer lg:block w-25! ${subMenuId === id ? 'block' : 'hidden'}`}
                  >
                    {navMenu.map((menu) => {
                      const { subId, subTitle } = menu
                      return (
                        <li
                          key={subId}
                          className='text-[0.9rem] text-gray-500 pb-3 hover:text-black'
                        >
                          {subTitle}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        )}
      </nav>
      <div className='flex gap-6 whitespace-nowrap items-center px-2 sm:px-4 xl:pt-2'>
        <form className='bg-gray-300 rounded-3xl w-full relative flex items-center'>
          <i className='fa-solid fa-magnifying-glass absolute left-4 hover:text-gray-500'></i>
          <input
            type='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='p-2 w-full ml-9 mr-9 focus:outline-none'
          />
          <i className='fa-solid fa-users-viewfinder absolute right-4 hover:text-gray-500'></i>
        </form>
        <a href='/' className='font-semibold hidden xl:block'>
          Get aksplash+
        </a>
        <button>
          Log in
        </button>
        <a href='/' className='p-2 border boder-gray-300 rounded'>
          submit an image
        </a>
      </div>
      <aside className='fixed left-0 top-0 bottom-0 w-16 p-4 px-5 border-r border-gray-400 hidden xl:flex xl:flex-col h-screen justify-between'>
        <div className='flex flex-col gap-5pb-6 border-b border-gray-400'>
          <div className='flex flex-col gap-5 pb-6 border-b border-gray-400'>
            <a href='/' className=''>
              <img src={logo} alt='Logo' className='min-w-10 -ml-2' />
            </a>
            <i className='fa-solid fa-image text-gray-600 text-[1.3rem]'></i>
            <i className='fa-solid fa-pen text-gray-600 text-[1.3rem]'></i>
          </div>
          <div className='flex flex-col gap-5 pb-6 border-b border-gray-400'>
            <i className='fa-brands fa-wpexplorer text-gray-600 text-[1.3rem]!'></i>
            <i className='fa-solid fa-download text-gray-600 text-[1.3rem]!'></i>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <i className='fa-solid fa-user text-gray-600 text-[1.3rem]!'></i>

          <button onClick={() => setIsMenuOpen(!IsMenuOpen)}>
            <i className='fa-solid fa-bars text-gray-600 text-[1.3rem]!'></i>
          </button>
        </div>
      </aside>
    </div>
  )
}

export default Navbar
