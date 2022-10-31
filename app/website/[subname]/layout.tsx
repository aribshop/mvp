import { FunctionComponent, PropsWithChildren } from "react";

import Head from "next/head";
interface SubnameLayoutProps {
  params: { subname: string };
}

const SubnameLayout: FunctionComponent<
  PropsWithChildren<SubnameLayoutProps>
> = ({ children, params }) => {
  return (
    <>
      <head key={"hello world"}>
        <title>{params.subname }</title>
      </head>
      <span>Hello World - ${Math.random()}</span>
      <div>{children}</div>
    </>
  );
};

export default SubnameLayout;
