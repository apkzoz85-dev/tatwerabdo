import type { ReactNode } from "react";
import { LeadProvider } from "./lead";
import { Header, Floating, Cookie, RevealInit } from "./chrome";
import { Footer } from "./sections";

export function Shell({ children, options, project, nav }: { children: ReactNode; options: string[]; project: string; nav: { href: string; label: string }[] }) {
  return (
    <LeadProvider options={options} project={project}>
      <Header nav={nav} project={project} />
      <main>{children}</main>
      <Footer />
      <Floating project={project} />
      <Cookie />
      <RevealInit />
    </LeadProvider>
  );
}
