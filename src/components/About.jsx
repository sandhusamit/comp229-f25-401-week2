export default function About() {
    return (
      <section style={{ margin: "2rem auto", padding: "1rem", lineHeight: "1.8rem" }}>
        <h2 style={{ color: "#0077ff", marginBottom: "1rem", textAlign: "center" }}>Meet the real me...</h2>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
          <img id="me" src="sam.PNG" alt="Samit Sandhu" />
  
          <p>
            Born in 1998 and raised in the GTA, I (Samit Sandhu) am a software engineering student with 5 years of mortgage and real estate experience. 
            With parents from Punjab, India, I’ve been able to connect with immigrant homeowners through Punjabi, Hindi, and Urdu, helping them with their mortgage needs. 
            Solving problems such as debt consolidation has always been deeply fulfilling.
          </p>
  
          <p>
            While I enjoy my work as a mortgage agent, coding has been my passion since 2019. 
            I began experimenting with Python, building small apps, and exploring UI design. My passion became a career goal when I enrolled in Centennial College’s Software Engineering Technology program. 
            Nowadays, I build applications primarily in C# (.NET framework) with SQL databases, and I’m learning MAUI, C, Power BI, and React outside of the classroom.
          </p>
  
          <p>
            Outside of work and school, I lead an active lifestyle: I’m a beginner guitarist, intermediate snowboarder, and enjoy weightlifting, practicing Muay Thai, and hiking with my 10-year-old husky.
          </p>
  
          <a 
            href="/Samit-Sandhu.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              padding: "0.7rem 1.2rem",
              backgroundColor: "#0077ff",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              marginTop: "1rem"
            }}
          >
            View My Resume
          </a>
        </div>
      </section>
    );
  }
  