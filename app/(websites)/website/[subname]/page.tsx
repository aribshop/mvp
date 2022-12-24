import { FunctionComponent, use } from "react";
import data from "../../../../data";
import Theme from "../../../../themes";




interface HomeProps {
  params: { subname: string };
}

const Home: FunctionComponent<HomeProps> = (props) => {
  const { subname } = props.params;
  console.log("page",props);

  const websites = use(data.websites());

  const website = websites.find((w) => w.subname === subname);

  return <div>Not Found</div>
};

export default Home;
