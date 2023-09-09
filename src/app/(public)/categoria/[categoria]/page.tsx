"use client";
import CardSkeleton from "@/app/components/CardSkeleton";
import { ProductType } from "@/app/types/ProductType";
import { supabase } from "@/app/utils/supabase";
import { useRouter } from "next/navigation";
import "../../../components/Card/style.css";

import { useEffect, useState } from "react";

export default function ProdutosPorCategoria({
  params,
}: {
  params: { categoria: string };
}) {
  const [products, setProducts] = useState<Array<ProductType> | null>(null);
  const { push } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      let { data: products, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", params.categoria);

      if (error) {
        throw error;
      }
      setProducts(products);
    };

    fetchData();
  }, [params.categoria]);

  const handleProduct = (id: number) => {
    push(`/produtos/${id}`);
  };

  return (
    <div className="flex gap-4 min-h-screen">
      {products
        ? products?.map((product: ProductType) => {
            return (
              <div
                key={product.id}
                className="post-card relative items-center flex flex-col md:max-w-sm sm:max-w-md w-72 h-96"
                style={{
                  minHeight: "400px",
                  maxWidth: "360px",
                  minWidth: "250px",
                }}
              >
                <div
                  className="img-container"
                  style={{
                    backgroundImage: `url(${product.image[0]})`,
                    borderBottom: "1px solid #ccc",
                  }}
                ></div>
                <div className="post-text">
                  <div className="post-meta text-center">
                    <span className="post-category">
                      <a href="">{product.category}</a>
                    </span>
                    <i className="fa fa-circle-o"></i>
                    <span className="post-date">
                      <i className="fa fa-calendar"></i>
                      {product.context}
                    </span>
                  </div>
                  <h3 className="post-title">{product.name}</h3>
                  <p className="post-desc">
                    {product.description?.slice(0, 100).concat("...")}
                  </p>
                </div>
                <div className="absolute bottom-2">
                  <button
                    type="button"
                    onClick={() => handleProduct(product.id)}
                  >
                    Mais informações
                  </button>
                </div>
              </div>
            );
          })
        : Array.from({ length: 4 }, (_, i) => <CardSkeleton key={i} />)}
    </div>
  );
}
