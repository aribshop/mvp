type Props = {
  params: {
    subname: string;
    productID: string;
  };
};

export default function Product(props: Props) {
  return (
    <div>
      <h1>My Product Page</h1>
    </div>
  );
}
