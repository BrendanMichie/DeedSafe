import React from "react";

const featureForms = {
  deed: {
    label: "Upload a copy of your Title Deed",
    placeholder: "TitleDeed.pdf"
  },
  rates: {
    label: "Upload your municipal rates statement",
    placeholder: "RatesAccount.pdf"
  },
  otp: {
    label: "Upload your Offer to Purchase (OTP)",
    placeholder: "OfferToPurchase.pdf"
  },
  fica: {
    label: "Upload your FICA documents",
    placeholder: "ID_Proof.pdf"
  },
  bank: {
    label: "Upload your Home Loan Account Statement",
    placeholder: "BondStatement.pdf"
  },
};

function FeatureModal({ featureId, onClose }) {
  const form = featureForms[featureId];
  if (!form) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', display: 'flex',
      alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        background: 'white', borderRadius: '8px', padding: '2rem',
        width: '90%', maxWidth: '400px', boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}>
        <h2>{form.label}</h2>
        <form>
          <input type="text" placeholder="Your Name" required style={{ marginBottom: '1rem', width: '100%' }} />
          <input type="email" placeholder="Your Email" required style={{ marginBottom: '1rem', width: '100%' }} />
          <input type="file" placeholder={form.placeholder} required style={{ marginBottom: '1rem', width: '100%' }} />
          <button type="submit" style={{ background: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px' }}>
            Submit
          </button>
        </form>
        <button onClick={onClose} style={{ marginTop: '1rem', color: '#2563eb' }}>Cancel</button>
      </div>
    </div>
  );
}

export default FeatureModal;