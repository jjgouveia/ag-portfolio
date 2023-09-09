type RedirectButtonProps = {
  title: string;
  link: string;
  styles?: string;
  className?: string;
};

export default function RedirectButton({
  title,
  link,
  styles,
  className = `w-2/3 mx-auto mt-3 p-1 font-semibold text-center rounded items-center justify-center ${styles}`,
}: RedirectButtonProps) {
  return (
    <p className={className}>
      <a title={title} href={link} target="_blank">
        {title}
      </a>
    </p>
  );
}
