import React from 'react';

const Dropdown = ({children}) => {
    return (
        <div className='dropdown-content bg-white hidden border-t-2 border-gray absolute w-full left-0 top-[75px] z-10 group-hover:block'>
            {children}
        </div>
    );
}

export default Dropdown;