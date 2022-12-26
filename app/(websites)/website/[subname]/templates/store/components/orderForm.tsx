"use client";

import { useState } from "react";
import AddToBucketButton from "./addToBucketButton";

type Props = {
  productID: string;
  price: number;
  name: string;
};

export default function OrderForm(props: Props) {
  const [quantity, setQuantity] = useState(1);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <div className="flex flex-col">
        <label className="text-gray-900 text-lg font-medium">Quantity</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-900 text-lg font-medium">Size</label>
        <select className="border border-gray-300 rounded-md p-2">
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>

      <hr />

      <div className="flex flex-col">
        <label className="text-gray-900 text-lg font-medium">Name</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-900 text-lg font-medium">Phone</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <AddToBucketButton
        id={props.productID}
        name={props.name}
        price={props.price}
        quantity={quantity}
      />
      <button className="bg-gray-900 text-white rounded-md p-2 mt-4">
        Buy now
      </button>
    </div>
  );
}
