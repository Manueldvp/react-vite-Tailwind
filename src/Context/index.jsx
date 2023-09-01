import { createContext, useState } from "react";
import apiUrl from '../Api'
import { apiUrlCategory } from "../Api";
import { useEffect } from "react";

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {

    const [count, setCount] = useState(0)

    //Get products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    //Get categories
    const [searchByCategory, setSearchByCategory] = useState(null)


    // Get products by title
    const [searchByTittle, setSearchByTittle] = useState(null)
    console.log(searchByTittle);

    useEffect(() => {
        fetch(`${apiUrl}`)
        .then(res => res.json())
        .then(data => setItems(data));
      }, [])

      const filteredItemsByTitle = (items, searchByTittle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTittle.toLowerCase()))
      }

      const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
      }
    

      const filterBy = (searchType, items, searchByTittle, searchByCategory) => {
          if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTittle)
          }

          if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
          }
          if (searchType === 'BY_TITLE_AND_BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTittle.toLowerCase()))
          }
          if (!searchType) {
            return items;
          }
      }

      useEffect(() => {
        if(searchByTittle && !searchByCategory) 
            setFilteredItems(filterBy('BY_TITLE',items, searchByTittle, searchByCategory))   
        if(!searchByTittle && searchByCategory) 
          setFilteredItems(filteredItemsByCategory('BY_CATEGORY',items, searchByCategory, searchByTittle))
        if(!searchByTittle && !searchByCategory) 
          setFilteredItems(filteredItemsByCategory(null,items, searchByCategory, searchByTittle))
        if(searchByTittle && searchByCategory) 
          setFilteredItems(filteredItemsByCategory('BY_TITLE_AND_BY_CATEGORY',items, searchByCategory, searchByTittle))
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
            setFilteredItems,
            searchByCategory,
            setSearchByCategory
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider