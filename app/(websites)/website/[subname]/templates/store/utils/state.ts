import { atomWithStorage } from "jotai/utils";

type Bucket = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};
export const bucketAtom = atomWithStorage<Bucket[]>("bucket", []);
