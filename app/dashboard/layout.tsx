import Image from "next/image";
import Link from "next/link";

import { redirect } from "next/navigation";

interface LayoutParams {
  children: React.ReactNode;
  params: {
    website?: string;
  };
}
function Layout(props: LayoutParams) {
  const { children, params } = props;

  return (
    <div className="bg-black text-white w-full min-h-screen">
      <div className="flex sticky top-0 px-8 py-2 justify-between items-center pb-3 border-b border-b-slate-50/50">
        <h1>
          <Link href="/dashboard">Arib.shop</Link>
        </h1>

        <Link
          href="/dashboard/new"
          className="text-black px-4 py-1 rounded-lg shadow bg-white text-sm font-medium hover:bg-white/70"
        >
          New Website
        </Link>
        <Image
          className="rounded-full w-8 h-8"
          alt="logo"
          width={50}
          height={5}
          src="https://laknabil.me/nabil.png"
        />
      </div>

      {children}
    </div>
  );
}

export default Layout;
