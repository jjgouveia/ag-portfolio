import AppGeneralHeader from "@/app/components/AppGeneralHeader";

export default function CategoriaLayout({
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
