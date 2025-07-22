import React from "react";

const forms = {
  deed: [
    { type: "text", placeholder: "Property Address" },
    { type: "file", label: "Upload Title Deed (optional)" },
    { type: "checkbox", label: "I authorize Deed Safe to conduct a deed audit on my behalf." }
  ],
  rates: [
    { type: "file", label: "Upload municipal statement" },
    { type: "checkbox", label: "I consent to Deed Safe conducting this audit on my behalf." }
  ],
  otp: [
    { type: "text", placeholder: "Estate Agent Name" },
    { type: "email", placeholder: "Estate Agent Email" },
    { type: "file", label: "Upload Offer to Purchase" },
    { type: "checkbox", label: "Have one of your attorneys attend to my transfer." },
    { type: "checkbox", label: "Inform my agent I’m getting legal advice. Response in 24hrs (CC me)." },
    { type: "select", label: "Select attorney (pilot phase)", options: ["Hammond Pole Attorneys"] }
  ],
  fica: [
    { type: "select", label: "Entity Type", options: ["Individual", "Company", "Trust", "Close Corporation"] },
    { type: "file", label: "Upload FICA documents" },
    { type: "button", label: "Generate Shareable Link" }
  ],
  bank: [
    { type: "file", label: "Upload Latest Bond Statement" }
  ]
};

export default function FeatureModal({ feature, onClose }) {
  const fields = forms[feature] || [];

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        background: 'white', padding: '2rem', borderRadius: '10px',
        width: '100%', maxWidth: '450px'
      }}>
        <h3 style={{ marginBottom: '1rem', textTransform: 'capitalize' }}>{feature.replace(/_/g, ' ')}</h3>
        <form>
          {fields.map((field, i) => {
            if (field.type === "text" || field.type === "email") {
              return <input key={i} type={field.type} placeholder={field.placeholder} style={{ display: 'block', marginBottom: '1rem', width: '100%' }} />;
            }
            if (field.type === "file") {
              return <div key={i}><label>{field.label}</label><input type="file" style={{ display: 'block', marginBottom: '1rem', width: '100%' }} /></div>;
            }
            if (field.type === "checkbox") {
              return <div key={i}><label><input type="checkbox" /> {field.label}</label><br /></div>;
            }
            if (field.type === "select") {
              return (
                <div key={i}>
                  <label>{field.label}</label>
                  <select style={{ width: '100%', marginBottom: '1rem' }}>
                    {field.options.map((opt, idx) => (
                      <option key={idx}>{opt}</option>
                    ))}
                  </select>
                </div>
              );
            }
            if (field.type === "button") {
              return <button key={i} type="button" style={{ marginBottom: '1rem' }}>{field.label}</button>;
            }
            return null;
          })}
          <button type="submit" style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '0.5rem 1rem', borderRadius: '5px' }}>Submit</button>
        </form>
        <button onClick={onClose} style={{ marginTop: '1rem', backgroundColor: 'transparent', color: '#1e3a8a' }}>Close</button>
      </div>
    </div>
  );
}
