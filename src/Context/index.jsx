import { createContext } from "react";

const cartContext = createContext()

export const cartContextProvider = ({ children }) => {
    return (
        <cartContext.Provider>
            {children}
        </cartContext.Provider>
    )
}
