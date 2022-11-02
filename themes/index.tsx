import { FunctionComponent, use } from "react";
import Website from "../core/types/business/website";
import { Templates } from "../core/types/itemplate";
import data from "../data";
import DentistTemplate from "./dentist";
import EcommerceTemplate from "./ecommerce";

interface Theme {
  website?: Website;
  isLayout?: boolean;
}

const Theme: FunctionComponent<Theme> = (props) => {
  const { website } = props;

  const products = use(data.products(website?.id));
  console.log(props.isLayout);
  if (website?.template === Templates.Dentist) {
    if (!props.isLayout) return <div>Dentist Layout</div>;
    return (
      <DentistTemplate
        description={website.description}
        title={website.name}
        products={products}
      />
    );
  }

  if (website?.template === Templates.Ecommerce) {
    if (props.isLayout) return <div>Ecommerce Page</div>;

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
