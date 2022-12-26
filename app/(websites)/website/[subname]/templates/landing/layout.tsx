import Link from "next/link";
import React from "react";
import { getSite } from "../utils/backdata";
import ByProductButton from "./components/byProductButton";

type Props = {
  params: {
    subname: string;
  };
  children: React.ReactNode;
};
export default async function Landing(props: Props) {
  const site = await getSite(props.params.subname);
  const template = site.template as any;

  return (
    <div className="w-full min-h-screen relative">
      <img src={template.backgroundPicture} className="w-full h-72" />
      <div className="-mt-20 w-full max-w-2xl mx-auto">
        <div>
          <img
            src={template.profilePicture}
            className="w-40 shadow-md aspect-square rounded-md"
          />
        </div>

        <h1 className="text-3xl my-2 leading-relaxed font-medium text-gray-900">
          {template.title}
        </h1>
      </div>
      {template.sections.map((section: any, i: number) => (
        <div
          className={`mt-8  ${
            i % 2 == 1 ? "flex-row-reverse" : ""
          } w-full  flex items-start  max-w-2xl mx-auto `}
        >
          <div className="flex-1">
            <img
              src={section.backgroundPicture}
              className="flex-1 aspect-video"
            />
          </div>
          <div className="flex-1 px-4">
            <h2 className="text-2xl  leading-relaxed font-medium text-gray-900">
              {section.title}
            </h2>
            <p className="text-gray-600">{section.description}</p>
          </div>
        </div>
      ))}

      <div className="mt-8 w-full max-w-2xl mx-auto text-center py-4">
        <ByProductButton subname={props.params.subname} />
      </div>

      {props.children}
    </div>
  );
}
