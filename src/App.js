import React, { useState } from "react";
import FeatureModal from "./components/FeatureModal";

const features = [
  { title: "Title Deed Audit", desc: "Check your title for interdicts or delays.", id: "deed" },
  { title: "Rates Clearance Audit", desc: "Verify your municipal account is ready.", id: "rates" },
  { title: "OTP Legal Review", desc: "Have our attorneys review your offer.", id: "otp" },
  { title: "FICA Vault", desc: "Upload your FICA once and share it easily.", id: "fica" },
  { title: "Avoid Bank Penalties", desc: "Upload bond info so we can notify your bank.", id: "bank" },
];

function App() {
  const [active, setActive] = useState(null);

  return (
    <>
      <header>
        <h1>Get Your Property Sale-Ready</h1>
        <p>Start with our free legal audits before you even sign an offer.</p>
      </header>

      <section>
        <h2>🔎 Free Seller Services</h2>
        <div className="card-grid">
          {features.map(f => (
            <div key={f.id} className="card" onClick={() => setActive(f.id)}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {active && <FeatureModal featureId={active} onClose={() => setActive(null)} />}

      <footer>© {new Date().getFullYear()} Deed Safe. A Hammond Pole Attorneys project.</footer>
    </>
  );
}

export default App;