import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {

    const [count, setCount] = useState(0)
    
    return (
        <ShoppingCartContext.Provider value={{count, setCount}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider