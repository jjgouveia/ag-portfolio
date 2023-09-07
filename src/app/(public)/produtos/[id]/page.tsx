"use client";

import { Database } from "@/app/interfaces/database.types";
import { supabase } from "@/app/utils/supabase";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DetalhesProduto({
  params,
}: {
  params: { id: string };
}) {
  const [product, setProduct] = useState<Database | null | any>(null);

  useEffect(() => {
    const fetchData = async () => {
      let { data: products, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", params.id);

      if (error) {
        throw error;
      }
      setProduct(products);
    };

    fetchData();
  }, [params.id]);

  return (
    <div className="w-full min-h-screen">
      {product ? (
        <div className="flex flex-col min-h-max items-center justify-center mt-12 pt-5">
          <div className="flex flex-col w-full h-full items-center justify-center">
            <h1 className="text-4xl m-0 mb-4">{product[0].name}</h1>
            <div className="flex flex-col w-1/2 h-full items-center justify-center">
              <Image
                width={50}
                height={50}
                src={product[0].image[0]}
                alt={product[0].name}
                quality={100}
              />
            </div>
            <div className="flex flex-col w-1/2 h-full items-center justify-center">
              <p className="text-justify">{product[0].description}</p>
            </div>
          </div>
        </div>
      ) : (
        <h1>Carregando...</h1>
      )}
    </div>
  );
}
