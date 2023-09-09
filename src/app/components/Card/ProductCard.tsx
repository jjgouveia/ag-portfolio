import { Database } from "@/app/interfaces/database.types";
import { ProductType } from "@/app/types/ProductType";
import { supabase } from "@/app/utils/supabase";
import { ScrollShadow } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import CardSkeleton from "../CardSkeleton";
import "./style.css";

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Database | null | any>(null);

  const { push } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      let { data: products, error } = await supabase
        .from("products")
        .select("*")
        .range(0, 9);

      if (error) {
        throw error;
      }
      setProducts(products);
    };

    fetchData();
  }, []);

  return (
    <ScrollShadow
      orientation="horizontal"
      size={15}
      className="flex flex-row w-full overflow-x-scroll overflow-y-hidden h-500px gap-4"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      {products
        ? products?.map((product: ProductType) => {
            return <Card key={product.id} product={product} />;
          })
        : Array.from({ length: 4 }, (_, i) => <CardSkeleton key={i} />)}
    </ScrollShadow>
  );
};

export default ProductCard;
