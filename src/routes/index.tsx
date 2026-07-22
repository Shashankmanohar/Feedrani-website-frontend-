import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import html from "../feedrani.html.txt?raw";
import { Header } from "../components/ProductLayout";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const bodyContent = useMemo(() => {
    const match = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    let content = match ? match[1] : html;
    content = content.replace(/<header[\s\S]*?<\/header>/gi, "");
    return content;
  }, []);

  useEffect(() => {
    // 1. Ensure Iconify script is loaded and re-scan icons for client-side navigation
    if (!document.getElementById("iconify-script")) {
      const script = document.createElement("script");
      script.id = "iconify-script";
      script.src = "https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js";
      script.onload = () => {
        if ((window as any).Iconify) {
          (window as any).Iconify.scan();
        }
      };
      document.head.appendChild(script);
    } else if ((window as any).Iconify) {
      (window as any).Iconify.scan();
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans'] text-[#0F172A] antialiased selection:bg-[#327411] selection:text-white">
      <Header />
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </div>
  );
}
