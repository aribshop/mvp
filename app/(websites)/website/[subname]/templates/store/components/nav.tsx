type Props = {
  siteName: string;
};

export default function Navigation(props: Props) {
  return (
    <nav className="p-4 bg-white flex items-center space-x-8">
      <div className="bg-black px-4 py-1 text-white rounded-lg font-medium ">
        {props.siteName}
      </div>

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
    </nav>
  );
}
