import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-start">
          <Link className="flex items-center space-x-2" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-6 w-6 fill-current"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path d="M128,24,32,128l96,104,96-104Z"></path>
            </svg>
            <span className="font-bold">Apex</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
