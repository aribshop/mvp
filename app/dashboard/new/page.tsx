"use client";

import { FunctionComponent, useState } from "react";
import Axios from "axios";

interface NewWebsiteProps {}

const http = Axios.create({
  baseURL: "http://localhost:3000/api/website/",
});

type NewWebsite = {
  title: string;
  subname: string;
  type: string;
};

async function createWebsite(website: NewWebsite) {
  const response = await http.post("/add", website);
  return response.data;
}

const NewWebsite: FunctionComponent<NewWebsiteProps> = () => {
  const [step, setStep] = useState(0);

  const [title, setTitle] = useState("");
  const [subname, setSubname] = useState("");
  const [type, setType] = useState("");

  const [loading, setLoading] = useState(false);

  async function create() {
    if (subname.includes(" ")) return;
    console.log({ title, subname, type });
    setLoading(true);
    const website = await createWebsite({ title, subname, type });
    setLoading(false);
  }
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-xl font-medium text-center py-8">Create new Website</h1>

      <div>
        <label htmlFor="title">Title</label>
        <input
          className="border border-slate-50/50 rounded-md bg-neutral-800 "
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="subname">Subname</label>
        <input
          className="border border-slate-50/50 rounded-md bg-neutral-800 "
          type="text"
          id="subname"
          value={subname}
          onChange={(e) => setSubname(e.target.value)}
        />
        .arib.shop
      </div>

      <div>
        <label htmlFor="type">Type</label>
        <select
          className="text-black"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="dentist">Dentist</option>
          <option value="ecommerce">E-commerce</option>
        </select>
      </div>

      <button
        onClick={create}
        className="bg-white py-2 px-12 rounded-md text-black mt-12 hover:bg-neutral-600"
      >
        Create!
      </button>
    </div>
  );
};

export default NewWebsite;
