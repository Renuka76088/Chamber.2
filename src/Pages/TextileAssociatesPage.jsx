import { useState, useEffect } from "react";

const locations = [
  { id: 1, name: "Parekh Fabrics", city: "Ahmedabad", short: "Fabrics", x: 300, y: 475 },
  { id: 2, name: "Parekh Silk", city: "BENGALURU, KA", short: "Silk", x: 330, y: 550 },
  { id: 3, name: "Parekh Rayon", city: "Raipur", short: "Rayon", x: 488, y: 505 },
  { id: 4, name: "Parekh Linen", city: "Kolkata", short: "Linen", x: 625, y: 515 },
  { id: 5, name: "Parekh e-Trade Market (Textile) ", city: "Hyderabad", short: "e-Trade", x: 450, y: 635 },
  { id: 6, name: "Parekh Chamber of Textile", city: "Bangalore", short: "Chamber", x: 405, y: 755 },
  { id: 7, name: "Parekh Southern Polyfabrics", city: "Chennai", short: "Southern", x: 475, y: 755 },
];

const PIN_COLOR = "#8b1a1a";

function Pin({ loc, index, active, onClick }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 120 + 100);
    return () => clearTimeout(t);
  }, [index]);

  let labelX = loc.x;
  let labelY = loc.y - 35;
  let textAnchor = "middle";

  if (loc.id === 6) {
    labelX = loc.x - 40;
    labelY = loc.y - 5;
    textAnchor = "end";
  } else if (loc.id === 7) {
    labelX = loc.x + 40;
    labelY = loc.y - 5;
    textAnchor = "start";
  }

  return (
    <g
      onClick={() => onClick(loc.id)}
      style={{ opacity: visible ? 1 : 0, cursor: "pointer" }}
    >
      {/* 🔴 Blink dot */}
   <circle cx={loc.x} cy={loc.y} r="6" fill="#2563EB">

        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
      </circle>

      {/* Glow */}
      <circle cx={loc.x} cy={loc.y} r="10" fill="none" stroke="#2563EB">
        <animate attributeName="r" values="10;22" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* ✅ TEXT (NAME + CITY) */}
      <text
        x={labelX}
        y={labelY}
        textAnchor={textAnchor}
        fontSize="14"
        fontWeight="700"
        fill="#1a237e"
      >
        <tspan x={labelX}>{loc.name}</tspan>
        <tspan x={labelX} dy="16" fontSize="12" fill="#444">
          {loc.city}
        </tspan>
      </text>
    </g>
  );
}

export default function TextileAssociatesPage() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      


      {/* MAP */}
  <div style={{ marginTop: "80px", padding: "" }}> {/* External margin for Header safety */}
  <svg
    viewBox="0 0 1000 1200" // Height badha di hai taaki niche space kam na pade
    style={{
      width: "100%",
      display: "block",
      margin: "0 auto",
      background: "#fff", // Clean background
    }}
  >
    {/* 🔲 OUTER BORDER BOX - Start from y="120" to avoid header overlap */}
    <rect
      x="30"
      y="120" 
      width="940"
      height="1000"
      fill="none"
      stroke="#1e293b"
      strokeWidth="2"
      rx="10" // Rounded corners for premium look
    />

    {/* 🏷️ HEADING - Box ke andar top par */}
    <text
      x="500"
      y="50" 
      textAnchor="middle"
      fontSize="36"
      fontWeight="800"
      fill="#0f172a"
      style={{ letterSpacing: "2px", fontFamily: "Arial, sans-serif" }}
    >
      HC PAREKH & ASSOCIATES
    </text>

    {/* 🌐 SUBTEXT */}
    <text
      x="500"
      y="90"
      textAnchor="middle"
      fontSize="18"
      fontWeight="500"
      fill=""
    >
      www.hcparekh.com
    </text>

    {/* 🗺️ INDIA MAP - Positioned lower inside the box */}
  <image
    href="https://img.freepik.com/premium-vector/vector-map-black-outline-india-vector-illustration_686498-514.jpg?w=1060"
    x="40"
    y="40"
    width="920"
    height="920"
    preserveAspectRatio="xMidYMid meet"  // ✅ correct centering
    opacity="0.4"
  />

    {/* Pins - Locations mapping */}
    {locations.map((loc, i) => (
      <Pin
        key={loc.id}
        loc={loc}
        index={i}
        active={active === loc.id}
        onClick={setActive}
      />
    ))}
  </svg>
</div>
    </div>
  );
}


