import { MinusSmallIcon, PlusSmallIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const CartItem = () => {
    const [qty, setQty] = useState(1);

    const handleQty = (type) => {
        if (type === 'increment') {
            setQty(prevQty => prevQty + 1);
        } else {
            if (qty >= 2) {
                setQty(prevQty => prevQty - 1);
            }
        }
    }
    return (
        <tr className="flex items-center justify-between">
            <td className="flex items-center">
                <XMarkIcon className="w-6 h-6 cursor-pointer" />
                <img className="h-52" src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="" />
                <div>External Product</div>
            </td>
            <td className="font-medium text-red">$499.99</td>
            <td className="flex items-center border-[1px] border-gray rounded-full space-x-5 p-2">
                <MinusSmallIcon onClick={() => handleQty('decrement')} className="w-6 h-6 cursor-pointer" />
                <span className="font-medium text-lg">{qty}</span>
                <PlusSmallIcon onClick={() => handleQty('increment')} className="w-6 h-6 cursor-pointer" />
            </td>
            <td className="font-medium text-red">$499.99</td>
        </tr>
    );
}

export default CartItem;