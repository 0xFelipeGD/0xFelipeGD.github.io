import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  /* Permite SVGs nos placeholders. Pode remover quando substituir por imagens reais. */
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
  },
};

export default nextConfig;
