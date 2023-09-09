"use client";

import { Accordion, AccordionItem } from "@/app/components/Accordion";
import LoadingDots from "@/app/components/LoadingDots";
import RedirectButton from "@/app/components/RedirectButton";
import { ProductType } from "@/app/types/ProductType";
import { supabase } from "@/app/utils/supabase";
import { phoneNumber } from "@/app/utils/variables";
import {
  Image as ImageUI,
  Link as LinkUI,
  ScrollShadow,
} from "@nextui-org/react";
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
        <div className="flex w-full md:w-4/5 md:flex-nowrap md:justify-between lg:w-3/4 flex-wrap lg:flex-nowrap lg:justify-between @screen sm:w-full items-center mt-10 justify-center p-4 @screen sm:py-2">
          <div className="flex flex-col items-center">
            <div className="flex w-full flex-row justify-start items-start">
              <p className="text-sm w-full text-left mt-2">
                <LinkUI as={Link} isBlock href="#" color="warning">
                  <span>{`${product[0].context}`}</span>
                </LinkUI>
                <span> • </span>
                <LinkUI
                  as={Link}
                  isBlock
                  href={`/categoria/${product[0].category
                    .toString()
                    .toLowerCase()}`}
                  color="warning"
                  showAnchorIcon
                >
                  <span>{`${product[0].category}`}</span>
                </LinkUI>
              </p>
            </div>
            <h1 className="text-4xl m-0 mb-4 text-justify">
              {product[0].name}
            </h1>
            <ImageUI
              as={Image}
              width={300}
              height={250}
              src={product[0].image[0]}
              alt={product[0].name}
              quality={100}
              isZoomed
            />
            <RedirectButton
              title="Chamar no WhatsApp"
              link={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Olá, Anderson! Gostaria de saber mais sobre o produto ${product[0].name}`}
              styles="bg-green-700 animate-bounce duration-1000 hover:bg-green-600 transition mt-4"
            />
            <Accordion>
              <AccordionItem
                key={product[0].id + product[0].name}
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
            <RedirectButton
              title="Baixar Manual"
              styles="bg-sky-900 hover:bg-sky-700 transition"
              link={product[0].manual!}
            />
          </div>
          <ScrollShadow
            title="Descrição"
            className="sm:w-auto md:w-2/3 md:ml-4 lg:w-1/2 mt-4 max-h-[480px] overflow-y-scroll"
          >
            <p className="text-justify">{product[0].description}</p>
          </ScrollShadow>
        </div>
      ) : (
        <LoadingDots />
      )}
    </div>
  );
}
