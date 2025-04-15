import { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";

const ShoppingCart = () => {
    const context = useContext(ShoppingCartContext)

    const openCheckoutSideMenu = () => {
        context.openCheckout()
        context.closeProductDetail()
    }

    return (
       <div className="relative flex gap-0.5 items-center" onClick={() => openCheckoutSideMenu()}>
        <ShoppingCartIcon  className="h-6 fill-none cursor-pointer w-6 text-[#395B64]/60"/> 
        <div className="absolute bottom-3 cursor-pointer left-4 flex justify-center items-center rounded-full bg-black w-4 h-4 text-xs text-white">
            {context.cartProducts.length}
        </div>
       </div>
    )
}

export default ShoppingCart