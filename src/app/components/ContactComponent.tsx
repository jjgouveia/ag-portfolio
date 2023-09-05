import Image from "next/image";

type ContactComponentProps = {
  icon: string;
  altText?: string;
  link: string;
  text: string;
};

export default function ContactComponent({
  icon,
  link,
  text,
  altText = text,
}: ContactComponentProps): JSX.Element {
  return (
    <li id="whatsapp">
      <a
        href={link}
        title={altText}
        target="_blank"
        className="flex justify-around items-center w-full h-12 px-4 transition-all"
      >
        <div className="flex justify-between w-full h-full items-center sm:w-3/4">
          <div className="w-full">
            <Image width={36} height={36} src={icon} alt={altText} />
          </div>
          <span className="w-full text-center">{text}</span>
        </div>
      </a>
    </li>
  );
}
