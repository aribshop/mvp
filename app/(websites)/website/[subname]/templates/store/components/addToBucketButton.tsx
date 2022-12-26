"use client"

import { useAtom } from "jotai";
import { bucketAtom } from "../utils/state";

type Props = {
  name: string;
  price: number;
  quantity: number;
  id: string;
};

export default function AddToBucketButton({
  name,
  price,
  quantity,
  id,
}: Props) {
  const [_, setBucket] = useAtom(bucketAtom);

  const addToBucket = () => {
    setBucket((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item) {
        item.quantity += quantity;
      } else {
        prev.push({ name, price, quantity, id });
      }
      return [...prev];
    });
  };

  return (
    <button
      onClick={addToBucket}
      className="border-gray-900 text-gray-900 rounded-md p-2 mt-4"
    >
      Add to cart
    </button>
  );
}
