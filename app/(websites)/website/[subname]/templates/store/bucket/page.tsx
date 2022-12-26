"use client";

import { useAtom } from "jotai";
import { bucketAtom } from "../utils/state";

export default function Bucket() {
  const [bucket, setBucket] = useAtom(bucketAtom);
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-bold">Bucket</h1>
      <div className="flex flex-col items-center justify-center space-y-4">
        {bucket.map((item) => (
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="text-2xl font-bold">{item.name}</div>
            <div className="text-2xl font-bold">{item.price}</div>
            <div className="text-2xl font-bold">{item.quantity}</div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setBucket([])}
        className="border-gray-900 text-gray-900 rounded-md p-2 mt-4"
      >
        Clear bucket
      </button>

      <button className="bg-gray-900 text-white rounded-md p-2 mt-4">
        Checkout
      </button>
    </div>
  );
}
