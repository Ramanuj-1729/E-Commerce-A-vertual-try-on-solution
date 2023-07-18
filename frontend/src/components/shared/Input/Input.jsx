
const Input = ({label, inputType}) => {
    return (
        <div>
            <label className="block text-fadeFont mb-1" htmlFor="text-input">{label}</label>
            <input id="text-input" className="border-[1px] border-gray px-6 py-3 rounded w-full text-fadeFont" type={inputType} />
        </div>
    );
}

export default Input;