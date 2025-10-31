import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Óptica Omega - Tu visión, nuestra misión";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
        >
          {/* Ícono de lentes */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            style={{ marginRight: 30 }}
          >
            <ellipse
              cx="30"
              cy="50"
              rx="18"
              ry="14"
              fill="none"
              stroke="white"
              strokeWidth="4"
            />
            <line
              x1="48"
              y1="50"
              x2="52"
              y2="50"
              stroke="white"
              strokeWidth="4"
            />
            <ellipse
              cx="70"
              cy="50"
              rx="18"
              ry="14"
              fill="none"
              stroke="white"
              strokeWidth="4"
            />
            <line
              x1="12"
              y1="50"
              x2="8"
              y2="52"
              stroke="white"
              strokeWidth="3"
            />
            <line
              x1="88"
              y1="50"
              x2="92"
              y2="52"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
          <div style={{ fontSize: 100, fontWeight: "bold" }}>ÓPTICA OMEGA</div>
        </div>
        <div style={{ fontSize: 40, opacity: 0.9 }}>
          Tu visión, nuestra misión
        </div>
        <div style={{ fontSize: 32, marginTop: 20, opacity: 0.8 }}>
          📍 Nuevo Laredo, Tamaulipas
        </div>
        <div style={{ fontSize: 32, marginTop: 10, opacity: 0.8 }}>
          📞 867 712 2210
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
