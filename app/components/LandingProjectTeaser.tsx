import Link from "next/link";

interface Props {
  title: string;
  description: string;
  isTouchDevice?: boolean;
}

export default function LandingProjectTeaser({ title, description, isTouchDevice = false }: Props) {
  return (
      <Link href="/"
        className={`group relative flex-1 bg-secondary/80 backdrop-blur-sm p-4 lg:p-6 space-y-3 cursor-pointer ${
          !isTouchDevice 
            ? 'transition-transform duration-300 opacity-85 transition-opacity hover:opacity-95'
            : 'opacity-90'
        }`}
      >
          <h3 className="text-lg lg:text-xl font-medium text-foreground w-[90%] max-w-[90%]]">{title}</h3>
          <p className="text-sm text-text-secondary">{description}</p>
          <svg
                            className="absolute top-4 right-4 w-5 h-5 lg:w-6 lg:h-6 text-accent flex flex-grow"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>

      </Link>
  );
} 