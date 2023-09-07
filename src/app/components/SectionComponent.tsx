type SectionComponentProps = {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  propTitle?: boolean;
};

export default function SectionComponent({
  id,
  propTitle = true,
  title,
  children,
  className = "et-slide w-full",
}: SectionComponentProps): JSX.Element {
  return (
    <section className={`${className} mt-4`} id={id}>
      {propTitle && <h1 className="text-4xl m-0 mb-4">{title}</h1>}
      {children}
    </section>
  );
}
