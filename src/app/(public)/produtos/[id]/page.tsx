"use client";

import { Accordion, AccordionItem } from "@/app/components/Accordion";
import { ProductType } from "@/app/types/ProductType";
import { supabase } from "@/app/utils/supabase";
import { phoneNumber } from "@/app/utils/variables";
import { Image as ImageUI, ScrollShadow } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function DetalhesProduto({
  params,
}: {
  params: { id: string };
}) {
  const [product, setProduct] = useState<Array<ProductType> | null>(null);

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
    <div className="w-full min-h-screen justify-center flex">
      {product ? (
        <div className="flex w-full lg:w-3/4 flex-wrap lg:flex-nowrap lg:justify-between @screen sm:w-full items-center mt-12 pt-5 justify-center p-4 @screen sm:pr-5 sm:pl-5">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl m-0 mb-4">{product[0].name}</h1>
            <ImageUI
              as={Image}
              width={250}
              height={250}
              src={product[0].image[0]}
              alt={product[0].name}
              quality={100}
              isZoomed
            />
            <p className="text-sm mt-2">{`${product[0].category} • ${product[0].context}`}</p>

            <p className="w-3/4 text-center bg-green-500 text-black rounded">
              <Link
                href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Olá, Anderson! Gostaria de saber mais sobre o produto ${product[0].name}`}
              >
                Chamar no Whatsapp
              </Link>
            </p>

            <Accordion>
              <AccordionItem
                classNameProp="text-black"
                key="1"
                aria-label="Informações adicionais"
                title="Informação adicionais"
              >
                <p>
                  Peso:{" "}
                  {
                    (
                      product[0].aditional?.[0] as {
                        peso: string;
                        dimensoes: string;
                      }
                    )?.peso
                  }
                </p>
                <p>
                  Dimensões:{" "}
                  {
                    (
                      product[0].aditional?.[0] as {
                        peso: string;
                        dimensoes: string;
                      }
                    )?.dimensoes
                  }
                </p>
              </AccordionItem>
            </Accordion>
            <p></p>
          </div>

          <ScrollShadow className=" sm:w-auto lg:w-1/2 mt-2 max-h-[480px] overflow-y-scroll">
            <p className="text-justify">{product[0].description}</p>
          </ScrollShadow>
        </div>
      ) : (
        <h1>Carregando...</h1>
      )}
    </div>
  );
}
