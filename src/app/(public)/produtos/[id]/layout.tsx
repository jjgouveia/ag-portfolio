import Header from "../../../components/Header";

export default function produtosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <h1>Produtos</h1>
      {children}
    </>
  );
}
