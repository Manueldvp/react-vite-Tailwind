import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {

    const [count, setCount] = useState(0)

    
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


    // Prices Total
    

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
            openCheckoutSide
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider