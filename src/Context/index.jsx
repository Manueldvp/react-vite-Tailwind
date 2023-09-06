import { createContext, useState } from "react";
import apiUrl from '../Api'
import { apiUrlCategory } from "../Api";
import { useEffect } from "react";

export const ShoppingCartContext = createContext();

export const initializeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem('account')
  const signOutInLocalStorage = localStorage.getItem('sign-out')
  let parsedAccount
  let parsedSignOut

  if (!accountInLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage)
  }

  if (!signOutInLocalStorage) {
    localStorage.setItem('sign-out', JSON.stringify(false))
    parsedSignOut = false
  } else {
    parsedSignOut = JSON.parse(signOutInLocalStorage)
  }
}

const ShoppingCartProvider = ({ children }) => {
   //My account
   const [account, setAccount] = useState({})

   // Sign out
   const [signOut, setSignOut] = useState(false)

    const [count, setCount] = useState(0)

    //Get products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    //Get categories
    const [searchByCategory, setSearchByCategory] = useState(null)
    
    // Get products by title
    const [searchByTittle, setSearchByTittle] = useState(null)
   

    useEffect(() => {
        fetch(`${apiUrl}`)
        .then(res => res.json())
        .then(data => setItems(data));
      }, [])

      const filteredItemsByTitle = (items, searchByTittle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTittle.toLowerCase()))
      }

      const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory))
      }
    

      const filterBy = (searchType, items, searchByTittle, searchByCategory) => {
          if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTittle)
          }

          if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
          }
          if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTittle.toLowerCase()))
          }
          if (!searchType) {
            return items;
          }
      }

      useEffect(() => {
        if (searchByTittle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTittle, searchByCategory))
        if (searchByTittle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTittle, searchByCategory))
        if (!searchByTittle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTittle, searchByCategory))
        if (!searchByTittle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTittle, searchByCategory))
      }, [items, searchByTittle, searchByCategory])



    // Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail / Show Product

    const [productDetailShow, setProductDetailShow] = useState({});
    
    // add cart product
    const [cartProducts, setCartProducts] = useState([]);

    // checkout side menu
    const [isCheckoutSideOpen, setIsCheckoutSideOpen] = useState(false);
    const openCheckoutSide = () => setIsCheckoutSideOpen(true)
    const closeCheckoutSide = () => setIsCheckoutSideOpen(false)


    // Shopping Cart Order
    const [order, setOrder] = useState([])

   

    

    
    

    return (
        <ShoppingCartContext.Provider value={{
            count, 
            setCount, 
            openProductDetail, 
            setIsProductDetailOpen,
            closeProductDetail, 
            isProductDetailOpen,
            productDetailShow,
            setProductDetailShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideOpen,
            setIsCheckoutSideOpen,
            closeCheckoutSide,
            openCheckoutSide,
            order,
            setOrder,
            items,
            setItems,
            searchByTittle,
            setSearchByTittle,
            filteredItems,
            searchByCategory,
            setSearchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider