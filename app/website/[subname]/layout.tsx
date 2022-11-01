import { FunctionComponent, PropsWithChildren } from "react";

import Head from "next/head";
interface SubnameLayoutProps {
  params: { subname: string };
  children: React.ReactNode;
}

const SubnameLayout = ({ children, params }: SubnameLayoutProps) => {


  return (
    <>
      <Head key={"hello world"}>
        <title>{params.subname}</title>
      </Head>
      <span>Hello World - ${Math.random()}</span>
      <div>{children}</div>
    </>
  );
};

export default SubnameLayout;
