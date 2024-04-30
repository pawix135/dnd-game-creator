"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface Props extends LinkProps {
  children: React.ReactNode;
  className?: React.ReactHTMLElement<HTMLHRElement>["props"]["className"];
}

const RelativeLink: React.FC<Props> = ({ href, children, className, ...props }) => {
  const pathname = usePathname();

  return (
    <Link {...props} href={`${pathname}${href}`} className={className}>
      {children}
    </Link>
  );
};

export default RelativeLink;
