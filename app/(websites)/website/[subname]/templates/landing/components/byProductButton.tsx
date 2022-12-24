import Link from "next/link";
import { use } from "react";
import { Href } from "../utils";
import { getFirstCustomProduct } from "../utils/backdata";

type Props = {
  subname: string;
};

export default function ByProductButton({ subname }: Props) {
  const h = Href(subname);

  const product = use(getFirstCustomProduct(subname));

  return (
    <Link
      href={h(`product/${product.id}`)}
      className="text-lg text-white rounded-md bg-slate-700 px-8 py-1"
    >
      By {product.metadata.name}
    </Link>
  );
}
