import { Product } from "@/types/product";

const productData: Product[] = [
  {
    number: "#DE9945",
    name: "Boat Name = 1",
    from: "Abu Dhabi",
    to: "Sharjah",
    capacity: "45",
    captain: "Jhon Doe",
  },
  {
    number: "#DF6754",
    name: "Boat Name = 2",
    from: "Abu Dhabi",
    to: "Sharjah",
    capacity: "36",
    captain: "Jhon Doe",
  },
  {
    number: "#EG9754",
    name: "Boat Name = 3",
    from: "Abu Dhabi",
    to: "Sharjah",
    capacity: "87",
    captain: "Jhon Doe",
  },
  {
    number: "#AF1254",
    name: "Boat Name = 4",
    from: "Abu Dhabi",
    to: "Sharjah",
    capacity: "23",
    captain: "Jhon Doe",
  },
  {
    number: "#VG6643",
    name: "Boat Name = 5",
    from: "-",
    to: "-",
    capacity: "0",
    captain: "-",
  },
  {
    number: "#TS097",
    name: "Boat Name = 6",
    from: "-",
    to: "-",
    capacity: "0",
    captain: "-",
  },
  {
    number: "#XQ4583",
    name: "Boat Name = 7",
    from: "-",
    to: "-",
    capacity: "0",
    captain: "-",
  },
];

const AllBoats = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          All Boats
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-6 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Boat Number#</p>
        </div>
        <div className="col-span-1 hidden items-center sm:flex">
          <p className="font-medium">Boat Name</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Route From</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Route To</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Capacity Usage</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Boat Captain</p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-6 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-1 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.number}
            </p>
          </div>
          <div className="col-span-1 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.name}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product.from}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{product.to}</p>
          </div>
          <div className="col-span-1 flex-column items-center pr-4">
            <p className="text-sm text-black dark:text-white text-center">{product.capacity}%</p>
            <div className="w-full bg-gray-200 max-w-sm my-1 mx-auto rounded-lg overflow-hidden bg-[#CACFF6]">
              <div className="bg-primary text-xs leading-none py-1" style={{ width: `${product.capacity}%` }}></div>
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{product.captain}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBoats;
