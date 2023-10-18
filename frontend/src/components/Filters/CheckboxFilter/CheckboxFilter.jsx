import Checkbox from '../../shared/Checkbox/Checkbox';

const CheckboxFilter = ({checked, onChange, label, value}) => {
    return (
        <div className='flex items-center justify-between'>
            <span>
                <Checkbox checked={checked} onChange={onChange} color="#000000" />
                <small className=' font-medium text-base'>{label}</small>
            </span>
            <span>({value})</span>
        </div>
    )
}

export default CheckboxFilter;