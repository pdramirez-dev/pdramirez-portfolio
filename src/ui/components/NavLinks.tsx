"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const pages = ["Home", "Projects", "About", "Contac"];

export function NavLinks() {
  const pathname = usePathname();

  const listLinks = pages.map((page, index) => (
    <Link
      className={`link ${
        pathname === page.toLocaleUpperCase() ? "activate" : ""
      } `}
      key={index}
      href={`/${page.toLocaleLowerCase()}`}
    >
      {page}
    </Link>
  ));
  return <nav>{listLinks}</nav>;
}
