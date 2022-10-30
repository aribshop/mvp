import Website from "../core/types/business/website";
import { Templates } from "../core/types/itemplate";

export default [
  {
    id: "1",
    name: "Amazon",
    subname: "amazon",
    description:
      "Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    user: "1",
    template: Templates.Ecommerce,
  },
  {
    id: "2",
    name: "Ebay",
    subname: "ebay",
    description:
      "eBay Inc. is an American multinational e-commerce corporation based in San Jose, California, that facilitates consumer-to-consumer and business-to-consumer sales through its website.",
    user: "2",
    template: Templates.Dentist,
  },
] as Website[];
