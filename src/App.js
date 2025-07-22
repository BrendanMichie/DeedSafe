import React, { useState } from "react";
import FeatureModal from "./components/FeatureModal";

const features = [
  { id: "deed", title: "Title Deed Audit", desc: "Check your title deed or property details for delays." },
  { id: "rates", title: "Rates Clearance Audit", desc: "Ensure your municipal account is ready for clearance." },
  { id: "otp", title: "OTP Legal Review", desc: "Let us review your offer to purchase before you sign." },
  { id: "fica", title: "FICA Vault", desc: "Upload your FICA once, share a link whenever asked." },
  { id: "bank", title: "Avoid Bank Penalties", desc: "Let us notify your bank and avoid bond penalty fees." }
];

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <>
      <header>
        <h1>Welcome to Deed Safe</h1>
        <p>Your secure property seller’s vault and pre-sale solution.</p>
      </header>

      <div className="card-grid">
        {features.map((f) => (
          <div key={f.id} className="card" onClick={() => setActive(f.id)}>
            <h2>{f.title}</h2>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>

      {active && <FeatureModal feature={active} onClose={() => setActive(null)} />}

      <footer>© {new Date().getFullYear()} Deed Safe. All rights reserved.</footer>
    </>
  );
}
