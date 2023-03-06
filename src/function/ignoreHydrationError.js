import { HydrationProvider, Server, Client } from "react-hydration-provider";

export default function IgnoreHydrationError({ children, server }) {
  return (
    <HydrationProvider>
      <Server>{server}</Server>
      <Client>{children}</Client>
    </HydrationProvider>
  );
}
