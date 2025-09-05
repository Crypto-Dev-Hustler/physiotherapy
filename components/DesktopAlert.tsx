// components/DesktopAlert.tsx
import { useEffect, useState } from "react";

const DesktopAlert: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Detect mobile
      const mobile: boolean =
        /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      // Invert: show if NOT mobile
      setIsDesktop(!mobile);
    }
  }, []);

  if (!isDesktop) return null;

  return (
    <div
      style={{
        background: "#fffae6",
        color: "#333",
        padding: "10px",
        textAlign: "center",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 9999,
      }}
    >
      For a better experience, please open this website on a mobile device.
    </div>
  );
};

export default DesktopAlert;
