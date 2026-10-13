import { ImageResponse } from "next/og";

export const alt = "Radiants — AI agents & automation studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(circle at 80% 20%, #2a1d0c 0%, #070503 60%)",
          color: "#f5efe2",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 8, color: "#cbb083", textTransform: "uppercase" }}>
          Radiants — an AI studio
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 96, lineHeight: 1.05 }}>
          <span>AI that does</span>
          <span style={{ color: "#f8cd7b", fontStyle: "italic" }}>the work.</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "rgba(245,239,226,0.65)" }}>
          AI agents · Automation · Websites · Products — radiantsofficial.com
        </div>
      </div>
    ),
    size
  );
}
