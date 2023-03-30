type ProductList = {
  products: Array<Product>;
};

type Product = {
  name: string;
  price: number;
};

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export default function Products({ children }: Props) {
  return (
    <>
      <div>{JSON.stringify(children)}</div>
    </>
  );
}
