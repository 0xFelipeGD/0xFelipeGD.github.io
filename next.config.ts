import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Permite SVGs nos placeholders. Pode remover quando substituir por imagens reais. */
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
