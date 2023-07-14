import Checkbox from '../../Checkbox/Checkbox';

const CheckboxFilter = ({label, value}) => {
    return (
        <div className='flex items-center justify-between'>
            <span>
                <Checkbox color="#000000" />
                <small className=' font-medium text-base'>{label}</small>
            </span>
            <span>({value})</span>
        </div>
    )
}

export default CheckboxFilter;