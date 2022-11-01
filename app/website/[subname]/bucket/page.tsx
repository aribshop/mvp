import data from "../../../../data";
import { getWebsite } from "../../../../helper/fetching";

interface BucketProps {
  params: { subname: string };
}

const Bucket = async (props: BucketProps) => {
  // get websiteId and get the wishes and show all of them in list
  // or show a message that the bucket is empty

  const website = (await getWebsite(props.params.subname))!;

  const wishes = (await data.wiches(website.id))!;

  if (wishes.length === 0) {
    return (
      <div className="max-w-md mx-auto  bg-neutral-100 rounded-lg shadow-md p-8">
        <h1 className="text-3xl text-center">Bucket is empty</h1>
      </div>
    );
  } else {
    return (
      <div className="max-w-md mx-auto  bg-neutral-100 rounded-lg shadow-md p-8">
        <h1 className="text-3xl text-center">Bucket</h1>
        <ul>
          {wishes.map((wish, index) => (
            <li
              key={index}
              className="text-zinc-800 text-xl mt-4 flex justify-between"
            >
              <div className="">
                <span>{wish.product.name}</span>
                <br />
                <span>${wish.product.price}</span>
              </div>

              <span className="font-mono text-xs">group#{wish.group}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Bucket;
