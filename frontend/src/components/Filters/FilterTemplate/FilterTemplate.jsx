import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const FilterTemplate = ({ heading, children }) => {
    const [toggle, setToggle] = useState(true);

    const handleOnClick = () => {
        setToggle(current => !current)
    }

    return (
        <div className='relative border-b-2 border-gray pb-16 mb-8'>
            <div className='mb-5'>
                <h3 className='font-medium text-lg mb-3'>{heading}</h3>
                <button onClick={handleOnClick} className='absolute top-0 right-0'>{toggle === false ? <PlusSmallIcon className='h-6 w-6' /> : <MinusSmallIcon className='h-6 w-6' />}</button>
            </div>
            <div style={toggle === false ? { display: 'none' } : { display: 'inline' }}>
                {children}
            </div>
        </div>
    );
}

export default FilterTemplate;