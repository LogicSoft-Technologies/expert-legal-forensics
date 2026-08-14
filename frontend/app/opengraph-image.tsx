import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/seo/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = SITE_CONFIG.name;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#06101F",
          backgroundImage:
            "radial-gradient(circle at 82% 18%, rgba(192,155,91,0.16), transparent 55%)",
          padding: "72px 76px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 34, height: 2, backgroundColor: "#C09B5B" }} />
          <div
            style={{
              marginLeft: 16,
              fontSize: 15,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#C09B5B",
              fontWeight: 700,
            }}
          >
            Expert Legal Institute
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ fontSize: 60, lineHeight: 1.12, fontWeight: 300, color: "#FFFFFF" }}>
            Expert witnesses. Litigation-ready evidence.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 17, color: "rgba(255,255,255,0.55)" }}>
            Expert Witnesses · Medical Review · Forensic Investigation · Compliance
          </div>
          <div style={{ display: "flex", fontSize: 17, color: "#C09B5B", fontWeight: 700 }}>
            expertlegalinstitute.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}