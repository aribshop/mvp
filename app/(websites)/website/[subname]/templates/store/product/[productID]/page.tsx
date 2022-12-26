import AddToBucketButton from "../../components/addToBucketButton";

type Props = {
  params: {
    subname: string;
    productID: string;
  };
};

export default function Product(props: Props) {
  return (
    <div className="flex items-stretch h-full">
      <div className=" relative bg-indigo-600 ">
        <img className="w-full " src="https://laknabil.me/background.png" />

        <div className="absolute top-0 left-0">
          <h3 className=" text-lg font-medium text-black py-2 px-4  bg-white">
            Helo world
          </h3>
          <p className="font-medium text-black py-2 px-4  bg-white">15$</p>
        </div>
      </div>

      <div className="max-w-lg w-full p-4">
        <p className="text-gray-900 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempora
          saepe iusto accusantium earum impedit vel nesciunt molestias dolor,
          ducimus nostrum in nemo ipsum, ex nisi itaque, ullam quis?
          Consequatur.
        </p>

        <div>
          <div className="flex flex-col">
            <label className="text-gray-900 text-lg font-medium">
              Quantity
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="number"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-900 text-lg font-medium">Size</label>
            <select className="border border-gray-300 rounded-md p-2">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          <hr />

          <div className="flex flex-col">
            <label className="text-gray-900 text-lg font-medium">Name</label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-900 text-lg font-medium">Phone</label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="phone"
            />
          </div>

          <AddToBucketButton id="sdsd" name="sdd" price={15} quantity={2} />
          <button className="bg-gray-900 text-white rounded-md p-2 mt-4">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
