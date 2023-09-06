import { Database, Json } from "@/app/interfaces/database.types";
import { supabase } from "@/app/utils/supabase";
import { ScrollShadow } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import CardSkeleton from "../CardSkeleton";
import "./style.css";

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

const PostCard: React.FC = () => {
  const [products, setProducts] = useState<Database | null | any>(null);

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
        ? products?.map((product: ProductsComponentProps) => {
            return (
              <div
                key={product.id}
                className="post-card items-center flex flex-col md:max-w-sm sm:max-w-md w-72 h-96"
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
                  <div className="post-meta">
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
                    {product.description?.slice(0, 150)}
                  </p>
                </div>
              </div>
            );
          })
        : Array.from({ length: 4 }, (_, i) => <CardSkeleton key={i} />)}
    </ScrollShadow>
  );
};

export default PostCard;
