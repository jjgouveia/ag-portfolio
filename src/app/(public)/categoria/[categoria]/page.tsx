export default function produtosPorCategoria({
  params,
}: {
  params: { categoria: string };
}) {
  return (
    <div className="mt-12 min-h-screen">
      <h1>Produtos da categoria: {params.categoria}</h1>
    </div>
  );
}
