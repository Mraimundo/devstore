import { Header } from "@/components/header";
import { ReactNode } from "react";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
