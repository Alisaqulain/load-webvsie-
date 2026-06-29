import type { MetadataRoute } from "next";
import { SITE_NAME, TAGLINE } from "@/lib/data";
import { LOGO_PATH } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "NR Loans",
    description: TAGLINE,
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#030712",
    icons: [
      {
        src: LOGO_PATH,
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
