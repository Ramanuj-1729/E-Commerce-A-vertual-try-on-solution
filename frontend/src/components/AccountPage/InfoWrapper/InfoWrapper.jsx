const InfoWrapper = ({infoHeading, children}) => {
    return (
        <div className="py-5 px-8 bg-[#f7f7f7] w-full ml-8 relative">
            <h2 className="text-2xl font-medium mb-5">{infoHeading}</h2>
            {children}
        </div>
    );
}

export default InfoWrapper;