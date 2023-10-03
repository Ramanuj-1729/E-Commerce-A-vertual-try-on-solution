import { useEffect, useState } from 'react';
import Breadcrumb from '../shared/Breadcrumb/Breadcrumb';
import Dashboard from './Dashboard/Dashboard';
import Orders from './Orders/Orders';
import Addresses from './Addresses/Addresses';
import { getUser } from '../../http';
import { useDispatch } from 'react-redux';
import { clearAuth } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [forceRerender, setForceRerender] = useState(false);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await getUser(window.location.pathname.split('/')[2]);
                setUserData(data);
                setLoading(false);
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
        fetchUsers();
    }, [forceRerender]);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        dispatch(clearAuth());
        navigate('/account/login');
    };
    
    return (
        <>
            <div className='mt-5'>
                <Breadcrumb currPage="Account" />
            </div>

            {loading ? <h1>Loading...</h1> : <div className='mx-12'>
                <div>
                    <div className='flex jus items-center space-x-4 my-6'>
                        <img className='w-24 h-24 bg-red rounded-full pt-3' src="/images/profile.png" alt="Profile" />
                        <span className='text-lg font-semibold'>Welcome, {userData.firstName} {userData.lastName}<b className='text-2xl'>👋</b></span>
                    </div>
                </div>
                <div className='flex my-3 border-y-[2px] border-gray py-3'>
                    <ul className='h-fit space-y-3 text-black bg-[#f7f7f7]'>
                        <li className='border-b-[2px] border-gray pt-3'>
                            <button onClick={() => handleTabChange('dashboard')} className={`flex items-center mb-3 p-3 w-60 space-x-5 hover:bg-red hover:text-white ${activeTab === 'dashboard' ? 'bg-red text-white' : 'text-black'}`}>
                                <img className='w-5 h-5' src="/images/dashboard.png" alt="dashboard" />
                                <span>Dashboard</span>
                            </button>
                        </li>
                        <li className='border-b-[2px] border-gray'>
                            <button onClick={() => handleTabChange('orders')} className={`flex items-center mb-3 p-3 w-60 space-x-5 hover:bg-red hover:text-white ${activeTab === 'orders' ? 'bg-red text-white' : 'text-black'}`}>
                                <img className='w-5 h-5' src="/images/orders.png" alt="orders" />
                                <span>Orders</span>
                            </button>
                        </li>
                        <li className='border-b-[2px] border-gray'>
                            <button onClick={() => handleTabChange('addresses')} className={`flex items-center mb-3 p-3 w-60 space-x-5 hover:bg-red hover:text-white ${activeTab === 'addresses' ? 'bg-red text-white' : 'text-black'}`}>
                                <img className='w-5 h-5' src="/images/address.png" alt="address" />
                                <span>Addresses</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={handleLogout} className={`flex items-center mb-3 p-3 w-60 space-x-5 hover:bg-red hover:text-white ${activeTab === 'logout' ? 'bg-red text-white' : 'text-black'}`}>
                                <img className='w-5 h-5' src="/images/logout.png" alt="logout" />
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                    {activeTab === 'dashboard' && <Dashboard user={userData} forceRerender={setForceRerender} />}
                    {activeTab === 'orders' && <Orders />}
                    {activeTab === 'addresses' && <Addresses />}
                </div>
            </div>}
        </>
    )
}

export default AccountPage;
