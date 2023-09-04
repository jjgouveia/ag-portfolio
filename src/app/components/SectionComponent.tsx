type SectionComponentProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function SectionComponent({
  id,
  title,
  children,
}: SectionComponentProps): JSX.Element {
  return (
    <section className="et-slide" id={id}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
