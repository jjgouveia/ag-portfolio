import { Database, Json } from "@/app/interfaces/database.types";
import { supabase } from "@/app/utils/supabase";
import React, { useEffect, useState } from "react";
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
        .select("*");

      if (error) {
        throw error;
      }
      setProducts(products);
    };

    fetchData();
  }, []);

  return (
    <div
      className="flex flex-row w-full h-full overflow-x-scroll overflow-y-hidden gap-4 border-r-2 border-gray-800"
      style={{
        overflowX: "scroll",
        height: "62%",
        cursor: "grab",
        scrollBehavior: "smooth",
        boxShadow: "0 0 10px #000 inset",
      }}
    >
      {products?.map((product: ProductsComponentProps) => {
        return (
          <div
            key={product.id}
            className="post-card items-center flex flex-col md:max-w-sm sm:max-w-md w-72 h-96"
            style={{
              minHeight: "360px",
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
              <p className="post-desc">{product.description?.slice(0, 150)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostCard;
