import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiX, HiMenu, HiUserCircle } from "react-icons/hi";

export type TMenu = {
  label: string;
  link: string;
};
const menusInfo: TMenu[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Services",
    link: "/services",
  },
  {
    label: "Pricing",
    link: "/pricing",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState(true);
  const [navbar2, setNavbar2] = useState(true);

  const { asPath } = useRouter();
  const cleanPath = asPath.split("#")[0].split("?")[0];

  return (
    <nav className="border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* show on mobile */}
        <button
          onClick={() => setNavbar(!navbar)}
          className="mr-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        >
          <span className="sr-only">Open main menu</span>
          {navbar ? <HiMenu size={24} /> : <HiX size={24} />}
        </button>
        <Link href="/" className="flex items-center">
          <img
            src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
            className="mr-3 h-8"
            alt="Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            NEXTts
          </span>
        </Link>
        {/* show on web and when click menu icon  */}
        <div
          className={`${
            navbar ? "hidden" : ""
          }  order-last w-full md:order-none md:block md:w-auto`}
        >
          <ul className="mt-4 flex flex-wrap rounded-lg bg-gray-50 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:dark:bg-transparent">
            {menusInfo.map((menu, idx) => (
              <li key={idx}>
                <Link
                  href={menu.link}
                  className={`${
                    menu.link === cleanPath
                      ? "block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:bg-blue-600 md:bg-transparent md:p-0 md:text-blue-700 md:dark:bg-transparent md:dark:text-blue-500"
                      : "block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  }`}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/auth/signin"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative z-50 md:hidden">
          <button
            onClick={() => setNavbar2(!navbar2)}
            className="ml-3 flex rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open profile</span>
            <HiUserCircle size={24} />
          </button>
          <div
            className={`${
              navbar2 ? "hidden" : ""
            } absolute right-0 mt-1 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700`}
          >
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>firstname lastname</div>
              <div className="truncate font-medium">name@mail.com</div>
            </div>
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUserAvatarButton"
            >
              <li>
                <Link
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  href="#"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  href="#"
                >
                  Settings
                </Link>
              </li>
            </ul>
            <div className="py-2">
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                href="#"
              >
                Sign out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
