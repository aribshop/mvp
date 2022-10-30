import { FunctionComponent, use } from "react";
import Website from "../core/types/business/website";
import { Templates } from "../core/types/itemplate";
import data from "../data";
import DentistTemplate from "./dentist/components";
import EcommerceTemplate from "./ecommerce";

interface Theme {
  website?: Website;
}

const Theme: FunctionComponent<Theme> = (props) => {
  const { website } = props;

  const products = use(data.products(website?.id));

  if (website?.template === Templates.Dentist) {
    return (
      <DentistTemplate
        description={website.description}
        title={website.name}
        products={products}
      />
    );
  }

  if (website?.template === Templates.Ecommerce) {
    return (
      <EcommerceTemplate
        description={website.description}
        title={website.name}
        products={products}
      />
    );
  }

  return <div>Website not found</div>;
};

export default Theme;
