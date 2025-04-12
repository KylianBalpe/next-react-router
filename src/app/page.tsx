"use client";

import nextDynamic from "next/dynamic";

const App = nextDynamic(() => import("@/App"), { ssr: false });

export const dynamic = "force-static";

export default function Home() {
  return <App />;
}
