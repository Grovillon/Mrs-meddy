import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #f6e4b8 0%, #fdf9f0 45%, #dbe9ee 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 160,
            height: 160,
            borderRadius: 999,
            background: "#f7dee0",
            fontSize: 72,
            marginBottom: 36,
          }}
        >
          🥣
        </div>
        <div
          style={{
            fontSize: 72,
            color: "#2c241d",
            fontWeight: 600,
            letterSpacing: -1,
          }}
        >
          Mrs Meddy
        </div>
        <div style={{ fontSize: 32, color: "#6f6459", marginTop: 18, display: "flex" }}>
          Home cooked. Made with love.
        </div>
      </div>
    ),
    { ...size },
  );
}
