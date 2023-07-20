const ProductTable = ({ columnName, row }) => {
    return (
        <table className="table-auto w-full border-b-[1px] border-gray">
            <thead>
                <tr className="flex items-center justify-between font-normal text-base border-b-[1px] border-gray pb-5">
                    <th className="ml-36">Product</th>
                    <th className="ml-[156px]">Price</th>
                    {columnName}
                </tr>
            </thead>
            <tbody className="divide-y divide-gray">
                {row}
            </tbody>
        </table>
    );
}

export default ProductTable;