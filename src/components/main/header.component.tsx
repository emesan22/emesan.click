import Link from "next/link";

type NavigationItem = {
  label: string;
  href: string;
};

const navigationItems: NavigationItem[] = [
  {
    label: "ホーム",
    href: "/",
  },
  {
    label: "プロフィール",
    href: "/profile",
  },
  {
    label: "ブログ",
    href: "/blog",
  },
  {
    label: "お問い合わせ",
    href: "/contact",
  },
];

export default function Header() {
  return (
    <header className="fixed w-full bg-background text-text">
      <div className="flex flex-wrap justify-center xl:justify-between items-center border-b-2 border-solid border-b-primary mx-auto px-2 md:px-5 h-[5rem] xl:h-12">
        <h1 className="font-bold text-2xl text-center xl:text-left">
          蒼氷えめさん
        </h1>
        <nav className="">
          <ul className="flex flex-wrap h-full align-center">
            {navigationItems.map((item) => (
              <li key={item.label} className="">
                <Link
                  href={item.href}
                  className="block h-[5rem] xl:h-[3rem] pt-7 xl:pt-3 px-2 md:px-5 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
