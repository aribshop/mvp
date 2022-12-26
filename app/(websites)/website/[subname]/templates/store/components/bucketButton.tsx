"use client";

import { useAtom } from "jotai";
import { bucketAtom } from "../utils/state";

export default function BucketButton() {
  const [bucket, setBucket] = useAtom(bucketAtom);

  return (
    <div className="text-gray-700 py-1 px-4 hover:bg-slate-200 rounded-md">
      {bucket.length} items
    </div>
  );
}
