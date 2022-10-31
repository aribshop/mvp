import { FunctionComponent } from "react";
import { getWebsite } from "../../../../helper/fetching";

import { redirect } from "next/navigation";
import { Templates } from "../../../../core/types/itemplate";

interface NewProps {
  params: { subname: string };
}

const New = async (props: NewProps) => {
  const subname = props.params.subname;

  const website = await getWebsite(subname);

  if (website?.template == Templates.Dentist) {
    return redirect("..");
  }
  return <div>New Order {website?.description}</div>;
};

export default New;
