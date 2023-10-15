import { XMarkIcon } from "@heroicons/react/24/outline";


const CartItem = ({product, removeClick, children}) => {
    const PF = 'http://localhost:5000/';
    
    return (
        <tr className="flex items-center justify-between">
            <td className="flex items-center">
                <XMarkIcon onClick={()=> {removeClick(product)}} className="w-6 h-6 cursor-pointer" />
                <img className="h-52" src={PF + product.image} alt="product" />
                <div>{product.productName}</div>
            </td>
            <td className="font-medium text-red">₹{product.price}</td>
            {children}
        </tr>
    );
}

export default CartItem;