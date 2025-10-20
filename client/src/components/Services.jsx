export default function Services() {
  return (
    <section style={{ margin: "3rem auto", padding: "1rem", maxWidth: "1200px", backgroundColor:"white" }}>
      <h2 style={{ color: "#0077ff", marginBottom: "2rem", textAlign: "center" }}>
        My Services
      </h2>

      <div 
        style={{ 
          display: "flex", 
          alignItems: "flex-start", 
          justifyContent: "center", 
          gap: "2rem", 
          marginBottom: "3rem" 
        }}
      >
        <img 
          src="bank-loan.jpg" 
          alt="Mortgage Services" 
          style={{ width: "300px", borderRadius: "10px" }} 
        />
        <div>
          <h3 style={{ marginBottom: "1rem" }}>Mortgage Services</h3>
          <ul style={{ lineHeight: "1.8rem" }}>
            <li>Personalized mortgage advice</li>
            <li>Loan pre-approval assistance</li>
            <li>Mortgage refinancing options</li>
            <li>First-time homebuyer guidance</li>
            <li>Investment property financing</li>
          </ul>
        </div>
      </div>

      {/* Software Engineering Services */}
      <div 
        style={{ 
          display: "flex", 
          alignItems: "flex-start", 
          justifyContent: "center", 
          gap: "2rem" 
        }}
      >
        <img 
          src="tech.jpg" 
          alt="Software Engineering Services" 
          style={{ width: "300px", borderRadius: "10px" }} 
        />
        <div>
          <h3 style={{ marginBottom: "1rem" }}>Software Engineering Services</h3>
          <ul style={{ lineHeight: "1.8rem" }}>
            <li>Custom web application development</li>
            <li>Database design and optimization</li>
            <li>API integration and backend development</li>
            <li>Data analytics and visualization</li>
            <li>Automation scripts and system tools</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
