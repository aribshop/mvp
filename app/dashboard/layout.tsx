import Image from "next/image";
import Link from "next/link";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black text-white w-full min-h-screen">
      <div className="flex sticky top-0 px-8 py-2 justify-between items-center pb-3 border-b border-b-slate-50/50">
        <h1>Arib.shop</h1>

        <Image
          className="rounded-full w-8 h-8"
          alt="logo"
          width={50}
          height={5}
          src="https://laknabil.me/nabil.png"
        />
      </div>

      <div className="w-full flex mt-12 px-12 ">
        <div className="sticky max-w-md flex flex-col space-y-8">
          <Link
          
            className="text-lg font-light px-4 py-1 hover:bg-neutral-700 rounded-md"
            href={"dashboard/new"}
          >
            New
          </Link>
          <Link
            className="text-lg font-light px-4 py-1 hover:bg-neutral-700 rounded-md"
            href={"dashboard/products"}
          >
            products
          </Link>
          <Link
            className="text-lg font-light px-4 py-1 hover:bg-neutral-700 rounded-md"
            href={"dashboard/orders"}
          >
            orders
          </Link>
          <Link
            className="text-lg font-light px-4 py-1 hover:bg-neutral-700 rounded-md"
            href={"dashboard/statistics"}
          >
            statistics
          </Link>
          <Link
            className="text-lg font-light px-4 py-1 hover:bg-neutral-700 rounded-md"
            href={"dashboard/team"}
          >
            team
          </Link>
          <Link
            className="text-lg font-light px-4 py-1 hover:bg-neutral-700 rounded-md"
            href={"dashboard/settings"}
          >
            settings
          </Link>
        </div>

        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
