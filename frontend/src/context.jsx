import { createContext, useState, useContext, useEffect } from 'react'
import { contributors, secnavbare } from './utils/file'

const ProductProvider = createContext()

const AppProvider = ({ children }) => {
  // Shared UI, search, and navigation state.
  const [subMenuId, setSubMenuId] = useState(null)
  const [IsMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [displayedContributors, setDisplayedContributors] =
    useState(contributors)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [activeMenu, setActiveMenu] = useState(null)

  // Values derived from the selected category and current API results.
  const selectedMenu =
    secnavbare.find((menu) => menu.id === activeMenu) || secnavbare[0]
  const featuredPhoto = searchResults[0]

  // Unsplash search endpoint used by the navbar and search features.
  const url = 'https://api.unsplash.com/search/photos'

  // Fetch images and update the shared results and contributor list.
  const fetchImages = async (customQuery, useCustomQuery = false) => {
    const query = useCustomQuery ? customQuery : searchTerm || customQuery

    const resp = await fetch(
      `${url}?query=${query}&page=${page}&per_page=30&client_id=${import.meta.env.VITE_API_KEY}`,
    )
    const data = await resp.json()
    if (!resp.ok) {
      console.log(data)
    }
    console.log(data)
    setSearchResults(data.results)

    // Keep only unique photographers from the returned images.
    const uniqueContributors = data.results
      .map((photo) => photo.user)
      .filter(
        (user, index, users) =>
          users.findIndex((item) => item.id === user.id) === index,
      )
      .slice(0, 4)
      .map((user) => ({
        id: user.id,
        title: user.name,
        sub: `${user.total_photos || 0} images`,
        image: user.profile_image.small,
      }))

    setDisplayedContributors(uniqueContributors)
    setTotalPages(data.total_pages)
  }

  // Submit the default search query.
  const handleSubmit = (e) => {
    e.preventDefault()

    fetchImages('content')
  }

  // Search for the category selected in the secondary navbar.
  const changeInputTo = (title) => {
    fetchImages(title, true)
    setPage(1)
  }

  // Load initial images when the provider mounts.
  useEffect(() => {
    fetchImages('content')
  }, [])

  // Make shared state and actions available to child components.
  return (
    <ProductProvider.Provider
      value={{
        subMenuId,
        setSubMenuId,
        IsMenuOpen,
        setIsMenuOpen,
        searchTerm,
        setSearchTerm,
        activeMenu,
        setActiveMenu,
        searchResults,
        selectedMenu,
        featuredPhoto,
        displayedContributors,
        changeInputTo,
      }}
    >
      {children}
    </ProductProvider.Provider>
  )
}
export { AppProvider, ProductProvider }

export const useGlobalContext = () => {
  return useContext(ProductProvider)
}
