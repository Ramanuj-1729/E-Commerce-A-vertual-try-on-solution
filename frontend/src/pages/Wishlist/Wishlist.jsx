import CartItem from "../../components/shared/CartItem/CartItem";
import ProductTable from "../../components/shared/ProductTable/ProductTable";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Wishlist = () => {
    const { isAuth } = useSelector(state => state.authSlice);
    return (
        <>
            <div className='mt-5'>
                <Breadcrumb currPage="Wishlist" />
            </div>

            <div className="mx-12 mt-12 mb-40">
                <div className="mb-12">
                    <h1 className="font-medium text-5xl text-fadeFont">Wishlist</h1>
                </div>

                {
                    !isAuth ? (
                        <div>
                            Sign in to sync your Saved Items across all your devices.
                            <NavLink className="ml-2 text-red" to="/account/login">Log in</NavLink>
                        </div>
                    )
                        :
                        <div>
                            <ProductTable
                                columnName={
                                    <>
                                        <th>Stock Status</th>
                                        <th className="mr-8">Action</th>
                                    </>
                                }

                                row={
                                    <CartItem>
                                        <td className="font-medium">In Stock</td>
                                        <td>
                                            <button className="bg-buttonColor font-light text-sm text-white py-1 px-4 rounded-full">Add to Cart</button>
                                        </td>
                                    </CartItem>
                                }
                            />
                        </div>
                }
            </div>
        </>
    );
}

export default Wishlist;