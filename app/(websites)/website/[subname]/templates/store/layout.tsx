import React from "react";
import { getSite } from "../utils/backdata";
import Navigation from "./components/nav";

type Props = {
  params: {
    subname: string;
  };
  children: React.ReactNode;
};
export default async function StoreLayout(props: Props) {
  const site  = await getSite(props.params.subname)

  
  return (
    <div className="w-full min-h-screen relative ">
      <Navigation siteName={site.name}  subname={props.params.subname}/>

      
      {props.children}
    </div>
  );
}
