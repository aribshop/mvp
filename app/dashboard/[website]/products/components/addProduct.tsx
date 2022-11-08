"use client";

import { FunctionComponent, useState } from "react";

interface AddProductProps {
  websiteId: string;
}

const AddProduct: FunctionComponent<AddProductProps> = () => {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <>
      {showPanel && (
        <div className="bg-neutral-500 absolute inset-0 rounded-md shadow-md border-neutral-200 overflow-hidden">
          <h1 className="font-bold text-lg">Add Product</h1>
          <button onClick={() => setShowPanel(false)}>Close</button>
        </div>
      )}

      <button
        onClick={() => setShowPanel(true)}
        className="border-dashed border-2 border-white rounded-md flex justify-center items-center"
      >
        <span>Add new Product</span>
      </button>
    </>
  );
};

export default AddProduct;
