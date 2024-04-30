"use client";
import RelativeLink from "@/components/RelativeLink";
import { LucideProps, User } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { LinkProps } from "next/link";

interface Props extends LinkProps {
  icon?: StaticImageData;
  children: React.ReactNode;
}

const CardLink: React.FC<Props> = ({ children, ...props }) => {
  return (
    <RelativeLink
      {...props}
      className={
        "h-[250px] bg-secondary shadow-md shadow-secondary hover:bg-secondary/50 transition-colors grid place-items-center"
      }
    >
      <>
        {props.icon && <>{<Image src={props.icon} width={150} alt="" />}</>}
        {children}
      </>
    </RelativeLink>
  );
};

export default CardLink;
