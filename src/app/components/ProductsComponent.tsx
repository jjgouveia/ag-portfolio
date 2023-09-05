import Image from "next/image";
import { useEffect, useState } from "react";
import { Database, Json } from "../interfaces/database.types";
import { supabase } from "../utils/supabase";
type ProductsComponentProps = {
  aditional: Json[] | null;
  category: string[];
  color: string[];
  context: string;
  description: string | null;
  id: number;
  image: string[];
  manual: string | null;
  name: string;
  price: number | null;
};

export default function ProductsComponent() {
  const [products, setProducts] = useState<Database | null | any>(null);
  useEffect(() => {
    const getProducts = async () => {
      let { data: products, error } = await supabase
        .from("products")
        .select("*");

      if (error) {
        throw error;
      }
      return products;
    };

    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div
      className="flex flex-row h-full w-full gap-4 overflow-x-scroll"
      style={{
        border: "1px solid red",
      }}
    >
      {products?.map((product: ProductsComponentProps) => {
        return (
          <div key={product.id + product.name}>
            <h3>{product.name}</h3>
            <h4>{product.description?.slice(0, 100)}</h4>
            <Image width={50} height={50} src={product.image[0]} alt="Oi" />
          </div>
        );
      })}
    </div>
  );
}
