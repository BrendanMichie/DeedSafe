
import React, { useState } from "react";

export default function DeedSafe() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [entityType, setEntityType] = useState("");
  const [showFicaFields, setShowFicaFields] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@deedsafe.co.za" && password === "1234") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  };

  const handleEntitySelect = (e) => {
    setEntityType(e.target.value);
    setShowFicaFields(true);
  };

  const getFicaChecklist = () => {
    switch (entityType) {
      case "individual":
        return [
          "ID Document",
          "Proof of Residence (not older than 3 months)",
          "SARS Tax Number",
        ];
      case "company":
        return [
          "CIPC Registration Document (COR14.3)",
          "Director IDs",
          "Proof of Company Address",
          "SARS Tax Clearance Certificate",
        ];
      case "cc":
        return [
          "CK1 / CK2 Document",
          "Member IDs",
          "Proof of Address",
          "Tax Clearance Certificate",
        ];
      case "trust":
        return [
          "Trust Deed",
          "Letters of Authority",
          "Trustee IDs",
          "Proof of Address",
        ];
      default:
        return [];
    }
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Welcome to Deed Safe</h1>
      <p>
        Your secure property seller’s vault and pre-sale solution. Upload, access,
        and send your property documents — anytime, anywhere. Plus, enjoy free
        legal audits before your sale even begins to ensure it's ready when you are.
      </p>

      {!loggedIn ? (
        <form onSubmit={handleLogin} style={{ marginTop: "2rem" }}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br /><br />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br /><br />
          <button type="submit">Log In</button>
        </form>
      ) : (
        <div style={{ marginTop: "2rem" }}>
          <h3>Upload FICA Documents</h3>
          <select onChange={handleEntitySelect} value={entityType}>
            <option value="">Select Entity Type</option>
            <option value="individual">Natural Person</option>
            <option value="company">Company (PTY LTD)</option>
            <option value="cc">Close Corporation (CC)</option>
            <option value="trust">Trust</option>
          </select>
          {showFicaFields && (
            <ul>
              {getFicaChecklist().map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </main>
  );
}
