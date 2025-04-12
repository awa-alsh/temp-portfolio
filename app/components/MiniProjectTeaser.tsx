import Link from 'next/link';

interface MiniProjectTeaserProps {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export default function MiniProjectTeaser({ title, icon, href }: MiniProjectTeaserProps) {
  return (
    <Link 
      href={href}
      className="group flex-1 block aspect-square bg-secondary/80 backdrop-blur-sm p-6 transition-all duration-300 hover:opacity-90"
    >
      <div className="h-full flex flex-col items-center justify-center gap-4 text-center">
        <div className="text-accent w-12 h-12 lg:w-16 lg:h-16">
          {icon}
        </div>
        <h3 className="text-lg lg:text-xl font-medium text-foreground">
          {title}
        </h3>
      </div>
    </Link>
  );
} 