import InfoWrapper from "../InfoWrapper/InfoWrapper";

const Dashboard = ({ user }) => {

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
                <button className='bg-red py-[5px] px-8 cursor-pointer font-medium ease-in duration-200 text-white absolute bottom-5 hover:bg-hoverRed'>Edit</button>
            </InfoWrapper>
        </>
    );
}

export default Dashboard;