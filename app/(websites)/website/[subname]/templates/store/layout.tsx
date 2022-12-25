import React from "react";
import Navigation from "./components/nav";

type Props = {
  params: {
    subname: string;
  };
  children: React.ReactNode;
};
export default async function Landing(props: Props) {
  return (
    <div className="w-full min-h-screen relative ">
      <Navigation siteName="Arib" />

      <div className="mt-4 flex">
        <div className="p-1 bg-pink-700">
          <a href="#">
            <img
              className="w-full "
              src="https://www.arib.shop/_next/image?url=%2Fassets%2Fdrop-shirt-0.png&w=1920&q=85"
            />
          </a>
        </div>

        <div className="max-w-sm flex flex-col">
          <div className="p-1 flex-1 bg-zinc-800">
            <a href="#">
              <img
                className="h-full "
                src="https://www.arib.shop/_next/image?url=%2Fassets%2Fdrop-shirt-0.png&w=1920&q=85"
              />
            </a>
          </div>

          <div className="p-1 flex-1 bg-pink-600">
            <a href="#">
              <img
                className="h-full  "
                src="https://www.arib.shop/_next/image?url=%2Fassets%2Fdrop-shirt-0.png&w=1920&q=85"
              />
            </a>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}
