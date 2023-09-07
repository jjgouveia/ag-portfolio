import Link from "next/link";

export default function produtosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="backdrop-blur-2xl bg-gray-50 flex flex-row top-0 fixed w-full h-12 z-10">
        <Link
          className="flex justify-center items-center flex-1 text-black transition-all sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
          href="/#hero-cover"
        >
          Início
        </Link>
        <a
          className="flex justify-center items-center flex-1 text-black transition-all sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
          href="/#tab-produtos"
        >
          Produtos
        </a>
        <a
          className="flex justify-center items-center flex-1 text-black transition-all sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
          href="/#tab-servicos"
        >
          Serviços
        </a>
        <a
          className="flex justify-center items-center flex-1 text-black transition-all sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
          href="/#tab-sobre"
        >
          Sobre
        </a>
        <a
          className="flex justify-center items-center flex-1 text-black transition-all sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
          href="/#tab-contato"
        >
          Contato
        </a>
      </div>
      <h1>Produtos</h1>
      {children}
    </>
  );
}
