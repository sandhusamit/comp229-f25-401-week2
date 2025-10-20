export default function Education() {
    return (
      <section style={{ margin: "2rem auto", padding: "1rem", maxWidth: "1200px", backgroundColor: "white" }}>
        <h2 style={{ color: "#0077ff", marginBottom: "2rem", textAlign: "center" }}>
          Education
        </h2>
  
        {/* Centennial College */}
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
            src="cencol.png" 
            alt="Centennial College" 
            style={{ width: "300px", borderRadius: "10px" }} 
          />
          <div>
            <h3 style={{ marginBottom: "1rem" }}>Centennial College</h3>
            <p style={{ lineHeight: "1.6rem" }}>
              Currently studying at Centennial College as a 2nd year in the 1st semester. 
              I chose this program due to the online flexibility as well as the tools it 
              provides for learning software engineering. The program is <b>Software Engineering 
              Technology</b>, delivered online as a 3-year advanced diploma. <br /><br />
              <b>Started Year:</b> 2024 September (Fall Semester)
            </p>
          </div>
        </div>
  
        {/* Python Certification */}
        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: "2rem" 
          }}
        >
          <img 
            src="python.jpg" 
            alt="Python Certification" 
            style={{ width: "300px", borderRadius: "10px" }} 
          />
          <div>
            <h3 style={{ marginBottom: "1rem" }}>Python Entry Level Certification</h3>
            <p style={{ lineHeight: "1.6rem" }}>
              Python Entry Level Certification earned through the Python Institute. 
              Studied for the associated level but decided to pursue full stack development 
              through Centennial. Covered loops, JSON files, tables, and OOP. <br /><br />
              <b>Completed Year:</b> 2023
            </p>
          </div>
        </div>
      </section>
    );
  }
  