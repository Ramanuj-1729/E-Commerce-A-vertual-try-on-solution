import React from 'react'

const AddressForm = ({name, address, onChange, isCheckboxChecked, handleSubmit, setFormActive, setIsCheckboxChecked, buttonName}) => {
    return (
        <div className="mt-5">
            <h2 className="text-lg font-semibold">{name}</h2>

            <form className="space-y-3 mt-3">
                <input name="recipientName" value={address.recipientName} onChange={onChange} className="block" type="text" placeholder="Recipient Name" />
                <input name="apartment" value={address.apartment} onChange={onChange} className="block" type="text" placeholder="House No. / Apartment / Building" />
                <input name="city" value={address.city} onChange={onChange} type="text" placeholder="City" />
                <div className="space-x-3">
                    <input name="postalCode" value={address.postalCode} onChange={onChange} type="text" placeholder="Postal Code" />
                    <input name="state" value={address.state} onChange={onChange} type="text" placeholder="State" />
                    <input name="country" value={address.country} onChange={onChange} type="text" placeholder="Country" />
                </div>
                <input name="phoneNumber" value={address.phoneNumber} onChange={onChange} className="block" type="text" placeholder="Phone Number" />

                <span className="flex items-center space-x-3">
                    <label htmlFor="isDefault">Default</label>
                    <input checked={isCheckboxChecked} onChange={() => setIsCheckboxChecked((prev) => !prev)} type="checkbox" id="isDefault" />
                </span>

                <div>
                    <button onClick={handleSubmit} className='bg-red py-1 px-6 cursor-pointer font-medium ease-in duration-200 text-white mr-5 hover:bg-hoverRed'>{buttonName}</button>
                    <button onClick={() => setFormActive(false)}>Cancle</button>
                </div>
            </form>
        </div>
    )
}

export default AddressForm