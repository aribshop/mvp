import { DB } from "../../../repositories/firestore";

interface WebsiteHomeProps {
  params: {
    website: string;
  };
}

const WebsiteHome = async (props: WebsiteHomeProps) => {
  const { website } = props.params;
  const data = await DB.collection("/websites").doc(website).get();

  const info = data.data()!;

  return (
    <div>
      <h1>{info.name}</h1>

      <a
        href={`https://${info.subname}.arib.shop`}
        target="_blank"
        className="font-mono"
      >
        <span className="text-green-900">https://</span>
        {info.subname}.arib.shop
      </a>
      <p>{info.description}</p>
    </div>
  );
};

export default WebsiteHome;
