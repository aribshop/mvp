import { FunctionComponent, PropsWithChildren, use } from "react";

import Head from "next/head";
import data from "../../../../data";
import Theme from "../../../../themes";
interface SubnameLayoutProps {
  params: { subname: string };
  children: React.ReactNode;
}
export const revalidate = 6000;

export const dynamic = "force-static";

export const fetchCache = "only-cache";


const SubnameLayout = ({ children, params }: SubnameLayoutProps) => {
  const { subname } = params;

  console.log("Server Side Rendering ...");

  const websites = use(data.websites());

  const website = websites.find((w) => w.subname === subname);

  return (
    <>
      <Head key={"hello world"}>
        <title>{params.subname}</title>
      </Head>
      <div>
        <Theme isLayout={true} website={website} />{children}
      </div>
    </>
  );
};


export async function generateStaticParams() {

  return []
}

export default SubnameLayout;
