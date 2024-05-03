import UserHeader from "@/components/headers/User";

interface Props {
  children: React.ReactNode;
}

export default function GameLayout({ children }: Props) {
  return (
    <>
      <UserHeader />
      {children}
    </>
  );
}
