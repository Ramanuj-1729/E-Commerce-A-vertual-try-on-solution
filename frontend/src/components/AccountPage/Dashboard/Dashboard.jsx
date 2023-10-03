import { useState } from "react";
import InfoWrapper from "../InfoWrapper/InfoWrapper";
import { updateUser } from "../../../http";

const Dashboard = ({ user, forceRerender }) => {
    const [formActive, setFormActive] = useState(false);
    const [userData, setUserData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    });

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleEditSubmit = async (e, id) => {
        e.preventDefault();
        try {
            const res = await updateUser(userData, user._id);
            setUserData({});
            setFormActive(false);
            forceRerender(prev=>!prev);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    return (
        <>
            <InfoWrapper infoHeading="Dashboard">
                <div className="space-y-5">
                    <div className="flex items-center">
                        <div className="font-medium w-56">First Name</div>
                        <span className="text-fadeFont">{user.firstName}</span>
                    </div>
                    <div className="flex items-center">
                        <div className="font-medium w-56">Last Name</div>
                        <span className="text-fadeFont">{user.lastName}</span>
                    </div>
                    <div className="flex items-center">
                        <div className="font-medium w-56">Email</div>
                        <span className="text-fadeFont">{user.email}</span>
                    </div>
                </div>
                <button onClick={() => setFormActive(true)} className='bg-red py-[5px] px-8 cursor-pointer font-medium ease-in duration-200 text-white absolute top-5 right-5 hover:bg-hoverRed'>Edit</button>

                {
                    formActive
                    &&
                    <form className="space-y-3 mt-5">
                        <h2 className="text-lg font-semibold">Edit Details</h2>
                        <input name="firstName" value={userData.firstName} onChange={handleInputChange} className="block" type="text" placeholder="First Name" />
                        <input name="lastName" value={userData.lastName} onChange={handleInputChange} className="block" type="text" placeholder="Last Name" />
                        <input name="email" value={userData.email} onChange={handleInputChange} className="block" type="text" placeholder="Email" />
                        <button onClick={handleEditSubmit} className="bg-red py-2 px-8 cursor-pointer font-medium ease-in duration-200 text-white mr-3 hover:bg-hoverRed">Save</button>
                        <button onClick={() => setFormActive(false)}>Cancle</button>
                    </form>
                }
            </InfoWrapper>
        </>
    );
}

export default Dashboard;