import AppGeneralHeader from "@/app/components/AppGeneralHeader";

export default function produtosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppGeneralHeader />
      {children}
    </>
  );
}
