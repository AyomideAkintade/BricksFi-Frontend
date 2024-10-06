export default function OwnedProperties(){
    return (
        <div className="">
            <div className="flex flex-col gap-4 bg-white rounded-lg p-5">
                <div className="tracking-[-0.4 px] font-dmsans font-bold text-[18px] text-[#070E05]">Drop offs</div>
                <div className="table-container w-full">
                    <table className='table-auto w-full border-collapse border-[1px] border-[#E8E8E8]'>
                        <thead className="bg-[#F7F7F7] rounded-[8px] text-[14px] font-dmsans text-[#787389] font-medium sticky top-0">
                            <tr className="">
                                <th className="py-3 px-2 text-start">Date</th>
                                <th className="py-3 px-2 text-start">Items</th>
                                <th className="py-3 px-2 text-start">Tracking ID</th>
                                <th className="py-3 px-2 text-start">Delivery fee</th>
                                <th className="py-3 px-2 text-start">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-[#787389] font-Rubik text-[14.5px]">
                                <td className="py-2 px-3 border-b-[1px]">6 Aug 2023</td>
                                <td className="py-2 px-3 border-b-[1px]">Sony headphones WH100…</td>
                                <td className="py-2 px-3 border-b-[1px]">DHl 26269…</td>
                                <td className="py-2 px-3 border-b-[1px]">Not paid</td>
                                <td className="py-2 px-3 border-b-[1px]">Completed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );   
}