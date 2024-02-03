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
      <div className="flex flex-wrap justify-between items-center border-b-2 border-solid border-b-primary mx-auto px-5 h-14">
        <h1 className="font-bold text-2xl">蒼氷えめさん</h1>
        <nav className="h-full">
          <ul className="flex flex-wrap h-full align-center">
            {navigationItems.map((item) => (
              <li
                key={item.label}
                className="h-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out"
              >
                <Link href={item.href} className="block h-full px-5 mt-3 ">
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
