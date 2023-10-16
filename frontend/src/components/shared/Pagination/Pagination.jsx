import PaginationComponent from '@mui/material/Pagination';

const Pagination = ({count, page, onChange}) => {
    return (
        <PaginationComponent className='my-10' count={count} page={page} onChange={onChange} size="large" />
    );
}

export default Pagination;