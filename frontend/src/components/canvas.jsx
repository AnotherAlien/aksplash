import { useState } from 'react'
import SecNavbar from './secnavbar'
import { useGlobalContext } from '../context'

const Canvas = () => {
  const [featuredSearchTerm, setFeaturedSearchTerm] = useState('')
  const {
    selectedMenu,
    featuredPhoto,
    displayedContributors,
    searchResults,
    changeInputTo,
  } = useGlobalContext()
  const isFeatured = selectedMenu.title === 'Featured'

  return (
    <>

      <SecNavbar />
      <div className='flex flex-col'>
        <div className='flex gap-3 justify-between p-6 w-full h-100'>
          <div className='  w-170 h-70 mt-20 p-8 text-black'>
            <div className='flex flex-col gap-1 mt-19'>
              <h1 className='font-bold'>{selectedMenu.title}</h1>
              <p>Curated by unsplash</p>
              <p className='mt-3 max-w-xl'>{selectedMenu.sub}</p>
            </div>
            {isFeatured ? ( 
             <form
                onSubmit={(event) => {
                  event.preventDefault()
                  changeInputTo(featuredSearchTerm)
                }}
                className='bg-gray-300 rounded-3xl w-full relative flex items-center mt-5'
              >
                <i className='fa-solid fa-magnifying-glass absolute left-4 hover:text-gray-500'></i>
                <input
                  type='search'
                  value={featuredSearchTerm}
                  onChange={(event) =>
                    setFeaturedSearchTerm(event.target.value)
                  }
                  placeholder='Search images'
                  className='p-2 w-full ml-9 mr-9 bg-transparent focus:outline-none'
                />
                <i className='fa-solid fa-users-viewfinder absolute right-4 hover:text-gray-500'></i>
              </form>
            ) : (
              <button className='bg-black text-white py-2 px-4 rounded-lg mt-5 hover:bg-gray-700'>
                Submit to {selectedMenu.title}
              </button>
            )}
          </div>

               

          {/* contributors */}
          {!isFeatured && (
            <div className='flex flex-col  w-80 h-70 mt-20 border rounded-2xl border-gray-300 p-4'>
              <h1 className='m-1 font-bold'>Monthly top contributors</h1>
              {displayedContributors.map((contributor) => (
                <div
                  key={contributor.id}
                  className='flex items-center gap-3 mb-3'
                >
                  <img
                    src={contributor.image}
                    alt={contributor.title}
                    className='w-10 h-10 rounded-full object-cover'
                  />
                  <div>
                    <p>{contributor.title}</p>
                    <p className='text-sm text-gray-500'>{contributor.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          )}


          {/* photo */}
          <div className=' relative w-90 h-70 mt-20 overflow-hidden border rounded-2xl border-gray-300'>
            {featuredPhoto ? (
              <>
                <img
                  src={featuredPhoto.urls.regular}
                  alt={featuredPhoto.alt_description || selectedMenu.title}
                  className='h-full w-full object-cover'
                />
                <p className='absolute bottom-10 left-5 text-white drop-shadow-md'>
                  Featured
                </p>
                <p className='absolute bottom-2 left-5 text-white drop-shadow-md'>
                  {featuredPhoto.user.name}
                </p>
              </>
            ) : (
              <p className='flex h-full items-center justify-center text-gray-500'>
                Loading image...
              </p>
            )}
          </div>
        </div>


        {/* images */}
        <div className='hoto grid grid-cols-3 items-start gap-3  p-10 w-full h-200 '>
          {searchResults.map((photo, index) => {
            const tileHeights = ['h-40', 'h-48', 'h-56', 'h-64']
            const tileHeight =
              tileHeights[
                (photo.id.charCodeAt(0) + index * 7) % tileHeights.length
              ]

            return (
              <div key={photo.id} className={`relative ${tileHeight}`}>
                <img
                  src={photo.urls.regular}
                  alt={photo.alt_description || selectedMenu.title}
                  className='h-full w-full rounded-lg object-cover'
                />
                <p className='absolute bottom-2 left-3 text-sm text-white drop-shadow-md'>
                  {photo.user.name}
                </p>
              </div>
            )
          })}
        </div>


      </div>
    </>
  )
}

export default Canvas
