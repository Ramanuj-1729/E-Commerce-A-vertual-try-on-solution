const CategoryBar = () => {
    return (
        <section className='flex items-center justify-center space-x-32 my-16'>
            <div className="flex items-center justify-center flex-col space-y-4 group cursor-pointer">
                <img className="h-10 transition duration-500 ease-out group-hover:-translate-y-2" src="/images/tshirt.svg" alt="" />
                <span>T-Shirts</span>
            </div>
            <div className="flex items-center justify-center flex-col space-y-4 group cursor-pointer">
                <img className="h-10 transition duration-500 ease-out group-hover:-translate-y-2" src="/images/jeans.png" alt="" />
                <span>Jeans</span>
            </div>
            <div className="flex items-center justify-center flex-col space-y-4 group cursor-pointer">
                <img className="h-10 transition duration-500 ease-out group-hover:-translate-y-2" src="/images/suit.png" alt="" />
                <span>Suits</span>
            </div>
            <div className="flex items-center justify-center flex-col space-y-4 group cursor-pointer">
                <img className="h-10 transition duration-500 ease-out group-hover:-translate-y-2" src="/images/trouser.png" alt="" />
                <span>Trousers</span>
            </div>
            <div className="flex items-center justify-center flex-col space-y-4 group cursor-pointer">
                <img className="h-10 transition duration-500 ease-out group-hover:-translate-y-2" src="/images/hat.png" alt="" />
                <span>Hats</span>
            </div>
            <div className="flex items-center justify-center flex-col space-y-4 group cursor-pointer">
                <img className="h-10 transition duration-500 ease-out group-hover:-translate-y-2" src="/images/belt.png" alt="" />
                <span>Belts</span>
            </div>
        </section>
    );
}

export default CategoryBar;