
import React from "react";

function App() {
  return (
    <>
      <header>
        <h1>Get Your Property Sale-Ready</h1>
        <p>Before you sign a sale agreement, make sure everything's in order.</p>
        <p>We offer 3 free legal audits for property sellers.</p>
      </header>

      <section>
        <h2>✅ What You Get – For Free</h2>
        <div className="features">
          <div className="card">
            <h3>Title Deed Audit</h3>
            <p>We check your title for interdicts, exclusive use errors, or bond issues that could delay transfer.</p>
          </div>
          <div className="card">
            <h3>Rates Clearance Audit</h3>
            <p>We ensure your municipal account is up to date and won’t delay your sale.</p>
          </div>
          <div className="card">
            <h3>OTP Legal Review</h3>
            <p>Upload your offer and we’ll review it before you sign – for free.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>🔒 FICA Vault</h2>
        <p>You’ll be asked for FICA documents multiple times by banks, agents, bond originators and attorneys. Upload them once into your Deed Safe vault and just send a link every time you’re asked.</p>
        <div className="fica">
          <div className="card">
            <h3>Secure Upload</h3>
            <p>Upload your ID and proof of address once. We store it securely for you.</p>
          </div>
          <div className="card">
            <h3>One Link, Multiple Uses</h3>
            <p>Send the link to your FICA to whoever asks – no more repeating yourself.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>📦 Deed Safe is for Sellers</h2>
        <p>Whether you're just thinking of selling or already have a buyer – we help you get ahead of the process and avoid surprises.</p>
      </section>

      <footer style={{ textAlign: 'center', padding: '2rem 1rem', fontSize: '0.875rem', color: '#6b7280' }}>
        &copy; {new Date().getFullYear()} Deed Safe. Built with ❤️ by Hammond Pole Attorneys.
      </footer>
    </>
  );
}

export default App;
