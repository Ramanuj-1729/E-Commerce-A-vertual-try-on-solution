
const AddressCard = ({ address, handleDelete, handleUpdate }) => {
    return (
        <div className="inline-block">
            <div style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }} className={`border-x-[1px] border-t-[1px] border-gray p-3 h-40 ${address.isDefault ? 'bg-[#e6fff2]' : 'bg-white'}`}>
                <div>
                    <h3 className="font-semibold mb-1">{address.recipientName}</h3>
                    <h4>{address.apartment}, {address.city}</h4>
                    <h4>{address.postalCode}, {address.state}</h4>
                    <h4>{address.country}</h4>
                    <h4>+91 {address.phoneNumber}</h4>
                </div>
            </div>
            <div style={{ borderBottomRightRadius: "5px", borderBottomLeftRadius: "5px" }} className="border-[1px] border-gray bg-[#d9d9d9] p-2">
                <button onClick={()=> handleUpdate(address._id)} className='bg-white cursor-pointer ease-in duration-200 text-sm font-medium text-fadeFont mr-3 px-2 py-[1px] rounded'>Edit</button>
                <button onClick={() => handleDelete(address._id)} className='bg-white cursor-pointer ease-in duration-200 text-sm font-medium text-fadeFont px-2 py-[1px] rounded'>Remove</button>
                {address.isDefault === true ? <span className="float-right font-medium text-fadeFont"> Default</span> : <></>}
            </div>
        </div>
    );
}

export default AddressCard;