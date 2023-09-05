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
  const [shareOpen, setShareOpen] = useState<boolean>(false);
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

  const toggleShare = () => {
    setShareOpen(!shareOpen);
  };

  return (
    <div
      className="flex flex-row overflow-x-scroll overflow-y-hidden gap-7"
      style={{
        overflowX: "scroll",
        width: "100%",
        height: "100%",
        cursor: "grab",
        scrollBehavior: "smooth",
      }}
    >
      {products?.map((product: ProductsComponentProps) => {
        return (
          <div
            key={product.id}
            className="post-card min-w-full min-h-full flex flex-col gap-4"
          >
            <div
              className="img-container"
              style={{
                backgroundImage: `url(${product.image[0]})`,
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
