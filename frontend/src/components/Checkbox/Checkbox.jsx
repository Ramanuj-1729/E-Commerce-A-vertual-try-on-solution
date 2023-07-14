import CheckboxIcon from '@mui/material/Checkbox';

const Checkbox = ({color}) => {
    return (
        <CheckboxIcon
            sx={{
                '&.Mui-checked': {
                    color: {color},
                },
                '& .MuiSvgIcon-root': { fontSize: 28 }
            }}
        />
    )
}

export default Checkbox