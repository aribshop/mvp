import Image from "next/image";
import Link from "next/link";

import { redirect } from "next/navigation";

interface LayoutParams {
  children: React.ReactNode;
  params: {
    website: string;
  };
}
function Layout(props: LayoutParams) {
  const { children, params } = props;
  const { website } = params;

  return (
    <div className="w-full flex mt-12 px-12 ">
      <div className="sticky max-w-xs w-full flex flex-col space-y-8">
        <Link
          className="text-lg font-light px-4 py-1 hover:bg-neutral-700 rounded-md"
          href={`dashboard/${website}/products`}
        >
          products
        </Link>
        <Link
          className="text-lg font-light px-4 py-1 hover:bg-neutral-700 rounded-md"
          href={`dashboard/${website}/orders`}
        >
          orders
        </Link>
        <Link
          className="text-lg font-light px-4 py-1 hover:bg-neutral-700 rounded-md"
          href={`dashboard/${website}/statistics`}
        >
          statistics
        </Link>
        <Link
          className="text-lg font-light px-4 py-1 hover:bg-neutral-700 rounded-md"
          href={`dashboard/${website}/team`}
        >
          team
        </Link>
        <Link
          className="text-lg font-light px-4 py-1 hover:bg-neutral-700 rounded-md"
          href={`dashboard/${website}/settings`}
        >
          settings
        </Link>
      </div>

      <div className="p-8">{children}</div>
    </div>
  );
}

export default Layout;
