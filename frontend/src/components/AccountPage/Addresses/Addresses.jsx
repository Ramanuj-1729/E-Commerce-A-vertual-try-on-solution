import { useEffect, useState } from "react";
import InfoWrapper from "../InfoWrapper/InfoWrapper";
import AddressCard from "./AddressCard/AddressCard";
import { deleteAddress, getAddresses } from "../../../http";
import { useSelector } from "react-redux";

const Addresses = () => {
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useSelector(state => state.authSlice);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await getAddresses(user);
                setAddresses(data);
                setLoading(false);
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
        fetchUsers();
    }, [user, addresses]);

    const handleDelete = async (id) => {
        try {
            const res = await deleteAddress(id);
            console.log(res.data);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
    return (
        <>
            <InfoWrapper infoHeading="Your Shipping Addresses">
                <button className='bg-red py-2 px-8 cursor-pointer font-medium ease-in duration-200 text-white absolute top-5 right-8 hover:bg-hoverRed'>Add New Address</button>
                <div className={`${addresses.length <= 0 ? '' : 'grid grid-cols-3 gap-4'}`}>
                    {loading ? <h1>Loading...</h1> : addresses.length <= 0 ? <h2 className="text-sm text-fadeFont">You have not added any address, please add the address by clicking on Add New Address.</h2> : addresses.map(address => <AddressCard key={address._id} address={address} handleDelete={handleDelete} />)}
                </div>
            </InfoWrapper>
        </>
    );
}

export default Addresses;