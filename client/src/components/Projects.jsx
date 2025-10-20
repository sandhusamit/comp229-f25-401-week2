export default function Projects() {
    return (
      <section style={{ margin: "2rem auto", padding: "1rem", maxWidth: "1200px", backgroundColor:"white" }}>
        <h2 style={{ color: "#0077ff", marginBottom: "2rem", textAlign: "center" }}>
          Projects
        </h2>
  
        {/* Project 1 - Mortana */}
        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: "2rem", 
            marginBottom: "3rem" 
          }}
        >
          <img 
            src="Mortana.png" 
            alt="Mortana CRM" 
            style={{ width: "300px", borderRadius: "10px" }} 
          />
          <div>
            <h3 style={{ marginBottom: "1rem" }}>Mortana</h3>
            <p style={{ lineHeight: "1.6rem" }}>
              Mortgage-based CRM containing a portal for submission and document sharing. 
              Mortana will do it all — everything a mortgage agent requires to handle their 
              business. From customer relationship management to tax management, it’s a 
              budget-friendly admin support system. Currently being developed with Linux SFTP 
              servers, Oracle SQL DB, and WinForms on .NET. Future plans include migrating 
              to more efficient stacks like MERN.
            </p>
          </div>
        </div>
  
        {/* Project 2 - Mortgage Website */}
        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: "2rem", 
            marginBottom: "3rem" 
          }}
        >
          <img 
            src="mortgageBySam.jpeg" 
            alt="Mortgage Website" 
            style={{ width: "300px", borderRadius: "10px" }} 
          />
          <div>
            <h3 style={{ marginBottom: "1rem" }}>Mortgage Website</h3>
            <p style={{ lineHeight: "1.6rem" }}>
              A promotional website to showcase services and engage customers with targeted 
              advertisements and SEO. Currently in the planning phase.
            </p>
          </div>
        </div>
  
        {/* Project 3 - Audio Interface Outlet */}
        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: "2rem" 
          }}
        >
          <img 
            src="audiint.jpeg" 
            alt="Audio Interface Project" 
            style={{ width: "300px", borderRadius: "10px" }} 
          />
          <div>
            <h3 style={{ marginBottom: "1rem" }}>Audio Interface Outlet</h3>
            <p style={{ lineHeight: "1.6rem" }}>
              Starting with guitars, this project aims to build a sound outlet application 
              that connects to an audio interface (similar to GarageBand). Still an early-stage 
              concept — more curiosity-driven than problem-solving — but with potential to 
              evolve into something bigger.
            </p>
          </div>
        </div>
      </section>
    );
  }
  