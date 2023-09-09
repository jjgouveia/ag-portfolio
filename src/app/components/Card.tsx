import { useRouter } from "next/navigation";
import { ProductType } from "../types/ProductType";

export default function Card({ product }: { product: ProductType }) {
  const { push } = useRouter();

  const handleProduct = (id: number) => {
    push(`/produtos/${id}`);
  };
  return (
    <>
      <div
        key={product.id}
        className="post-card relative items-center flex flex-col md:max-w-sm sm:max-w-md w-72 h-96 rounded-xl"
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
            {product.description?.slice(0, 100).concat("...")}
          </p>
        </div>
        <div className="absolute bottom-2">
          <button type="button" onClick={() => handleProduct(product.id)}>
            Mais informações
          </button>
        </div>
      </div>
    </>
  );
}
