import { ResponsiveLayoutProvider } from "@/contexts/ResponsiveLayoutProvider";
import { useEffect, useState } from "react";

export function AppProviders({
  children,
  pageProps,
}: {
  children: JSX.Element;
  pageProps: any;
}) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return <ResponsiveLayoutProvider>{children}</ResponsiveLayoutProvider>;
  }
}
