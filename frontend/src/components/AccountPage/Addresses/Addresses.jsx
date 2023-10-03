import { useEffect, useState } from "react";
import InfoWrapper from "../InfoWrapper/InfoWrapper";
import AddressCard from "./AddressCard/AddressCard";
import { addAddress, deleteAddress, getAddresses, updateAddress } from "../../../http";
import AddressForm from "./AddressForm/AddressForm";

const Addresses = () => {
    const [address, setAddress] = useState({
        user: window.location.pathname.split('/')[2],
        recipientName: '',
        apartment: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        phoneNumber: '',
        isDefault: false
    });
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formActive, setFormActive] = useState(false);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [isAddFromActive, setIsAddFromActive] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await getAddresses(window.location.pathname.split('/')[2]);
                setAddresses(data);
                setLoading(false);
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
        fetchUsers();
    }, [formActive, isDeleted]);

    const handleAddAddress = () => {
        setFormActive(true);
        setIsAddFromActive(true);
        setAddress({
            user: window.location.pathname.split('/')[2],
            recipientName: '',
            apartment: '',
            city: '',
            state: '',
            postalCode: '',
            country: '',
            phoneNumber: '',
            isDefault: false
        });
        setIsCheckboxChecked(false);
    }

    const handleUpdateAddress = async (id) => {
        setIsAddFromActive(false);
        setFormActive(true);
        setAddress(addresses.find(address => address._id === id));
        setIsCheckboxChecked(addresses.find(address => address._id === id).isDefault);
    }

    const handleDelete = async (id) => {
        try {
            const res = await deleteAddress(id);
            setIsDeleted(prev => !prev);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setAddress({ ...address, [name]: value });
    }

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        try {
            address.isDefault = isCheckboxChecked;
            const { data } = await addAddress(address);
            setAddress({
                user: window.location.pathname.split('/')[2],
                recipientName: '',
                apartment: '',
                city: '',
                state: '',
                postalCode: '',
                country: '',
                phoneNumber: '',
                isDefault: false
            });
            setIsCheckboxChecked(false);
            setIsDeleted(false);
            setFormActive(false);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    const handleEditSubmit = async (e, id) => {
        e.preventDefault();
        try {
            address.isDefault = isCheckboxChecked;
            const res = await updateAddress(address, address._id);
            setAddress({
                user: window.location.pathname.split('/')[2],
                recipientName: '',
                apartment: '',
                city: '',
                state: '',
                postalCode: '',
                country: '',
                phoneNumber: '',
                isDefault: false
            });
            setIsCheckboxChecked(false);
            setIsDeleted(false);
            setFormActive(false);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    return (
        <>
            <InfoWrapper infoHeading="Your Shipping Addresses">
                <button onClick={handleAddAddress} className='bg-red py-2 px-8 cursor-pointer font-medium ease-in duration-200 text-white absolute top-5 right-8 hover:bg-hoverRed'>Add New Address</button>
                <div className={`${addresses.length <= 0 ? '' : 'grid grid-cols-3 gap-4'}`}>
                    {loading ? <h1>Loading...</h1> : addresses.length <= 0 ? <h2 className="text-sm text-fadeFont">You have not added any address, please add the address by clicking on <b>Add New Address</b>.</h2> : addresses.map(address => <AddressCard key={address._id} address={address} handleDelete={handleDelete} handleUpdate={handleUpdateAddress} />)}
                </div>

                {
                    formActive
                    &&
                    <AddressForm name={isAddFromActive ? 'Add New Address' : 'Edit Address'} address={address} onChange={handleInputChange} isCheckboxChecked={isCheckboxChecked} handleSubmit={isAddFromActive ? handleAddSubmit : handleEditSubmit} setFormActive={setFormActive} setIsCheckboxChecked={setIsCheckboxChecked} buttonName={isAddFromActive ? 'Add Address' : 'Edit Address'} />
                }
            </InfoWrapper>
        </>
    );
}

export default Addresses;