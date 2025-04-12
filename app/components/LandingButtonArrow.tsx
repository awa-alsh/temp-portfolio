import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export default function LandingButtonArrow({ href, text }: Props) {
  return (
    <Link 
      href={href}
      className="block lg:w-auto">
      <button className="group p-0 xl:py-8 xl:pl-8 xl:pr-0 lg:w-auto text-accent transition-all opacity-80 transition-opacity hover:opacity-95 duration-300 flex items-center justify-center lg:justify-start space-x-6  pointer-events-auto cursor-pointer">
        <span className="text-xl md:text-2xl font-medium whitespace-nowrap mr-2 md:mr-4">
          {text}
        </span>
        <div className="flex-grow items-center justify-end min-w-[50px]">
          <svg width="24" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon w-[40px] sm:w-[60px] h-auto">
            <path d="M15 4H4V1" stroke="#00ff9d" />
            <path d="M14.5 4H3.5H0" stroke="#00ff9d" />
            <path d="M15.8536 4.35355C16.0488 4.15829 16.0488 3.84171 15.8536 3.64645L12.6716 0.464466C12.4763 0.269204 12.1597 0.269204 11.9645 0.464466C11.7692 0.659728 11.7692 0.976311 11.9645 1.17157L14.7929 4L11.9645 6.82843C11.7692 7.02369 11.7692 7.34027 11.9645 7.53553C12.1597 7.7308 12.4763 7.7308 12.6716 7.53553L15.8536 4.35355ZM15 4.5L15.5 4.5L15.5 3.5L15 3.5L15 4.5Z" fill="#00ff9d"/>
          </svg>
        </div>
      </button>
    </Link>
  );
} 