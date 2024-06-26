"use client";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import CheckboxFour from "@/components/Checkboxes/CheckboxFour";

// export const metadata: Metadata = {
//     title:
//         "Add New Boat - Boat Dashboard",
// };

/*
const SelectGroupTwo: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

    const changeTextColor = () => {
        setIsOptionSelected(true);
    };
}
*/

export default function Home() {
    return (
        <>
            <DefaultLayout>
                <div className="mt-5"></div>
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Add New Boat
                        </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-5.5 p-6.5">
                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Boat Name
                            </label>
                            <input
                                type="text"
                                placeholder="Boat Name"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Boat Number
                            </label>
                            <input
                                type="text"
                                placeholder="Boat Number"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Current location
                            </label>
                            <input
                                type="text"
                                placeholder="Current location"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Next Location
                            </label>
                            <input
                                type="text"
                                placeholder="Next Location"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Opearion Type
                            </label>
                            <div className="relative z-20 bg-white dark:bg-form-input">
                                <select
                                    // value={selectedOption}
                                    // onChange={(e) => {
                                    //     setSelectedOption(e.target.value);
                                    //     changeTextColor();
                                    // }}
                                    // className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-12 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${isOptionSelected ? "text-black dark:text-white" : ""
                                    //     }`}
                                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input`}
                                >
                                    <option value="" disabled className="text-body dark:text-bodydark">
                                        Select Country
                                    </option>
                                    <option value="Offloading" className="text-body dark:text-bodydark">
                                        Offloading
                                    </option>
                                    <option value="Backloading " className="text-body dark:text-bodydark">
                                        Backloading
                                    </option>
                                    <option value="Bulks supply or receive" className="text-body dark:text-bodydark">
                                        Bulks supply or receive
                                    </option>
                                    <option value="Offloading cargo and Bulks" className="text-body dark:text-bodydark">
                                        Offloading cargo and Bulks
                                    </option>
                                </select>

                                <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.8">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                fill="#637381"
                                            ></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="col-span-1 grid grid-cols-2 gap-5">
                            <div className="col-span-1">
                                <DatePickerOne title="Arrival Time" />
                            </div>
                            <div className="col-span-1">
                                <DatePickerOne title="Departure Time" />
                            </div>
                        </div>

                        <div className="col-span-1 gap-4 grid grid-cols-2">
                            <div className="col-span-1">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    OBM On board
                                </label>
                                <div className="relative z-20 bg-white dark:bg-form-input">
                                    <select
                                        // value={selectedOption}
                                        // onChange={(e) => {
                                        //     setSelectedOption(e.target.value);
                                        //     changeTextColor();
                                        // }}
                                        // className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-12 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${isOptionSelected ? "text-black dark:text-white" : ""
                                        //     }`}
                                        className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input`}
                                    >
                                        <option value="" disabled className="text-body dark:text-bodydark">
                                            Select Country
                                        </option>
                                        <option value="Barite free" className="text-body dark:text-bodydark">
                                            Barite free
                                        </option>
                                        <option value="Barite Relihnet" className="text-body dark:text-bodydark">
                                            Barite Relihnet
                                        </option>
                                        <option value="Barite Free Relihnent" className="text-body dark:text-bodydark">
                                            Barite Free Relihnent
                                        </option>
                                        <option value="Barite innovert" className="text-body dark:text-bodydark">
                                            Barite innovert
                                        </option>
                                    </select>

                                    <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g opacity="0.8">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                    fill="#637381"
                                                ></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Manifested/ instructed
                                </label>
                                <div className="flex gap-4">
                                    <CheckboxFour title={"Yes"} />
                                    <CheckboxFour title={"No"} />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 gap-5 grid grid-cols-2">
                            <div className="col-span-1">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Quantity will Supply
                                </label>
                                <input
                                    type="text"
                                    placeholder="Quantity will Supply"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="col-span-1">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Remaining Quantity
                                </label>
                                <input
                                    type="text"
                                    placeholder="Remaining Quantity"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>
                        </div>

                        <div className="col-span-2 my-4 h-[1px] bg-slate-500"></div>


                        <div className="col-span-2 gap-5 grid grid-cols-2">
                            <div className="col-span-2">
                                <div className="border-b border-stroke  py-4 dark:border-strokedark">
                                    <h3 className="font-medium text-black dark:text-white">
                                        Cement On board
                                    </h3>
                                </div>
                            </div>
                            <div className="col-span-2 gap-5 grid grid-cols-2">
                                <div className="col-span-1 gap-5 grid grid-cols-2">
                                    <div className="col-span-1">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Quantity will Supply
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Quantity will Supply"
                                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Remaining Quantity
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Remaining Quantity"
                                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-1">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Manifested/ instructed
                                    </label>
                                    <div className="flex gap-5">
                                        <CheckboxFour title={"Yes"} />
                                        <CheckboxFour title={"No"} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 gap-5 grid grid-cols-2">
                            <div className="col-span-2">
                                <div className="border-b border-stroke  py-4 dark:border-strokedark">
                                    <h3 className="font-medium text-black dark:text-white">
                                        Blended Cmenet On board
                                    </h3>
                                </div>
                            </div>
                            <div className="col-span-2 gap-5 grid grid-cols-2">
                                <div className="col-span-1 gap-5 grid grid-cols-2">
                                    <div className="col-span-1">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Quantity will Supply
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Quantity will Supply"
                                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Remaining Quantity
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Remaining Quantity"
                                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-1">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Manifested/ instructed
                                    </label>
                                    <div className="flex gap-5">
                                        <CheckboxFour title={"Yes"} />
                                        <CheckboxFour title={"No"} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 gap-5 grid grid-cols-2">
                            <div className="col-span-2">
                                <div className="border-b border-stroke  py-4 dark:border-strokedark">
                                    <h3 className="font-medium text-black dark:text-white">
                                        Safra On board
                                    </h3>
                                </div>
                            </div>
                            <div className="col-span-2 gap-5 grid grid-cols-2">
                                <div className="col-span-1 gap-5 grid grid-cols-2">
                                    <div className="col-span-1">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Quantity will Supply
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Quantity will Supply"
                                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Remaining Quantity
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Remaining Quantity"
                                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-1">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Manifested/ instructed
                                    </label>
                                    <div className="flex gap-5">
                                        <CheckboxFour title={"Yes"} />
                                        <CheckboxFour title={"No"} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 gap-5 grid grid-cols-2">
                            <div className="col-span-2">
                                <div className="border-b border-stroke  py-4 dark:border-strokedark">
                                    <h3 className="font-medium text-black dark:text-white">
                                        Freash Water On board
                                    </h3>
                                </div>
                            </div>
                            <div className="col-span-2 gap-5 grid grid-cols-2">
                                <div className="col-span-1 gap-5 grid grid-cols-2">
                                    <div className="col-span-1">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Quantity will Supply
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Quantity will Supply"
                                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Remaining Quantity
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Remaining Quantity"
                                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-1">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Manifested/ instructed
                                    </label>
                                    <div className="flex gap-5">
                                        <CheckboxFour title={"Yes"} />
                                        <CheckboxFour title={"No"} />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-span-2 gap-5 grid grid-cols-2">
                            <div className="col-span-2">
                                <div className="border-b border-stroke  py-4 dark:border-strokedark">
                                    <h3 className="font-medium text-black dark:text-white">
                                        WBM On board
                                    </h3>
                                </div>
                            </div>
                            <div className="col-span-2 gap-5 grid grid-cols-2">
                                <div className="col-span-1 gap-5 grid grid-cols-2">
                                    <div className="col-span-1">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Quantity will Supply
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Quantity will Supply"
                                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Remaining Quantity
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Remaining Quantity"
                                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-1">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Manifested/ instructed
                                    </label>
                                    <div className="flex gap-5">
                                        <CheckboxFour title={"Yes"} />
                                        <CheckboxFour title={"No"} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 gap-5 grid grid-cols-2">
                            <div className="col-span-2">
                                <div className="border-b border-stroke  py-4 dark:border-strokedark">
                                    <h3 className="font-medium text-black dark:text-white">
                                        Brine On board
                                    </h3>
                                </div>
                            </div>
                            <div className="col-span-2 gap-5 grid grid-cols-2">
                                <div className="col-span-1 gap-5 grid grid-cols-2">
                                    <div className="col-span-1">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Quantity will Supply
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Quantity will Supply"
                                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Remaining Quantity
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Remaining Quantity"
                                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-1">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Manifested/ instructed
                                    </label>
                                    <div className="flex gap-5">
                                        <CheckboxFour title={"Yes"} />
                                        <CheckboxFour title={"No"} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 gap-5 grid grid-cols-2">
                            <div className="col-span-2">
                                <div className="border-b border-stroke  py-4 dark:border-strokedark">
                                    <h3 className="font-medium text-black dark:text-white">
                                        Brine On board
                                    </h3>
                                </div>
                            </div>
                            <div className="col-span-2 gap-5 grid grid-cols-2">
                                <div className="col-span-1 gap-5 grid grid-cols-2">
                                    <div className="col-span-1">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Quantity will Supply
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Quantity will Supply"
                                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Remaining Quantity
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Remaining Quantity"
                                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-1">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Manifested/ instructed
                                    </label>
                                    <div className="flex gap-5">
                                        <CheckboxFour title={"Yes"} />
                                        <CheckboxFour title={"No"} />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}
