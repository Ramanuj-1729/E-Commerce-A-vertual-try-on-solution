import { XMarkIcon } from "@heroicons/react/24/outline";


const CartItem = ({children}) => {
    
    return (
        <tr className="flex items-center justify-between">
            <td className="flex items-center">
                <XMarkIcon className="w-6 h-6 cursor-pointer" />
                <img className="h-52" src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="" />
                <div>External Product</div>
            </td>
            <td className="font-medium text-red">$499.99</td>
            {children}
        </tr>
    );
}

export default CartItem;