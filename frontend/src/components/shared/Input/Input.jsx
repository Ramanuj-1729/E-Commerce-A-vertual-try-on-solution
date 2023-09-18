
const Input = ({label, inputType, name, value, onChange}) => {
    return (
        <div>
            <label className="block text-fadeFont mb-1" htmlFor={label}>{label}</label>
            <input id={label} className="border-[1px] border-gray px-6 py-3 rounded w-full text-fadeFont" autoComplete="true" name={name} type={inputType} value={value} onChange={onChange} />
        </div>
    );
}

export default Input;