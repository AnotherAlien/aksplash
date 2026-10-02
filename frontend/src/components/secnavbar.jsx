import { useGlobalContext } from '../context'
import { secnavbare } from '../utils/file'

const SecNavbar = () => {
const { activeMenu, setActiveMenu, changeInputTo } = useGlobalContext()

  return (
    <div className='px-2 sm:px-4 py-4 border-b border-gray-300'>
      <ul className='flex gap-5 whitespace-nowrap no-x-scroll'>
        {secnavbare.map((menu) => {
          const { id, title } = menu
          return (
            <li
              key={id}
              onClick={()=>{setActiveMenu(id)
                changeInputTo(title)}
              }

              className={` hover:text-black text-[0.9rem] font-medium ${activeMenu === id ? 'text-black font-bold!' : 'text-gray-500'}`}
            >
              {title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SecNavbar
