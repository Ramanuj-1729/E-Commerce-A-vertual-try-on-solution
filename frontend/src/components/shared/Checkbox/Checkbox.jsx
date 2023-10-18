import CheckboxIcon from '@mui/material/Checkbox';

const Checkbox = ({checked, onChange, color}) => {
    return (
        <CheckboxIcon
            sx={{
                '&.Mui-checked': {
                    color: {color},
                },
                '& .MuiSvgIcon-root': { fontSize: 28 }
            }}
            onChange={onChange}
            checked={checked}
        />
    )
}

export default Checkbox