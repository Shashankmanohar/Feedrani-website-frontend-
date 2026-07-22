import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import html from "../feedrani.html.txt?raw";

export const Route = createFileRoute("/")({
  component: HomePage,
  server: {
    handlers: {
      GET: () =>
        new Response(html, {
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "public, max-age=300",
          },
        }),
    },
  },
});

function HomePage() {
  const bodyContent = useMemo(() => {
    const match = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    return match ? match[1] : html;
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

    const menuButton = document.getElementById("menuButton");
    const closeDrawerButton = document.getElementById("closeDrawerButton");
    const sideDrawer = document.getElementById("sideDrawer");
    const menuBackdrop = document.getElementById("menuBackdrop");

    const openMenu = () => {
      if (sideDrawer && menuBackdrop) {
        sideDrawer.classList.remove("-translate-x-full");
        menuBackdrop.classList.remove("opacity-0", "pointer-events-none");
      }
    };

    const closeMenu = () => {
      if (sideDrawer && menuBackdrop) {
        sideDrawer.classList.add("-translate-x-full");
        menuBackdrop.classList.add("opacity-0", "pointer-events-none");
      }
    };

    menuButton?.addEventListener("click", openMenu);
    closeDrawerButton?.addEventListener("click", closeMenu);
    menuBackdrop?.addEventListener("click", closeMenu);

    return () => {
      menuButton?.removeEventListener("click", openMenu);
      closeDrawerButton?.removeEventListener("click", closeMenu);
      menuBackdrop?.removeEventListener("click", closeMenu);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: bodyContent }} />;
}

