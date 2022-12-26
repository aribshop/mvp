import { Href } from "../../utils";
import BucketButton from "./bucketButton";

type Props = {
  siteName: string;
  subname: string;
};

// todo use React Lazy to load the bucket button

export default function Navigation(props: Props) {
  const h = Href(props.subname, "store");
  return (
    <nav className="p-4 bg-white flex items-center space-x-8">
      <a href={h("")} className="bg-black px-4 py-1 text-white rounded-lg font-medium ">
        {props.siteName}
      </a>

      <ul className="flex items-center space-x-1">
        <li>
          <a className="text-gray-700 py-1 px-4 hover:bg-slate-200 rounded-md">
            All
          </a>
        </li>
        <li>
          <a className="text-gray-700 py-1 px-4 hover:bg-slate-200 rounded-md">
            New Arrivals
          </a>
        </li>
        <li>
          <a className="text-gray-700 py-1 px-4 hover:bg-slate-200 rounded-md">
            Featured
          </a>
        </li>
      </ul>

      <div className="flex-1" />

      <a href={h("bucket")}>
        <BucketButton />
      </a>
    </nav>
  );
}
