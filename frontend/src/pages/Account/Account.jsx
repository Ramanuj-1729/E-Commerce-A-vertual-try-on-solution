import { Outlet } from 'react-router-dom';
import Breadcrumb from '../../components/shared/Breadcrumb/Breadcrumb';

const Account = () => {
    return (
        <>
            <div className='flex items-center justify-center flex-col border-2 h-80 w-full bg-lightBlack text-white'>
                <h1 className='font-semibold text-5xl mt-5'>ACCOUNT</h1>
                <div className='my-5'>
                    <Breadcrumb currPage="Account" />
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default Account;