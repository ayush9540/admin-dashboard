import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function MobilePortal({ children, isMobile }) {
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  if (!isMobile || !portalRoot) return children;
  return createPortal(children, portalRoot);
}