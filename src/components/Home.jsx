import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section style={{ margin: "3rem auto", padding: "1rem", maxWidth: "1200px", backgroundColor: "white" }}>
      <h2 style={{ color: "#0077ff", marginBottom: "1.5rem" }}>Do we have a problem?</h2>

      <div style={{ margin:"3rem auto", display: "flex", alignItems: "flex-start", gap: "2rem" }}>

        <img 
          id="prob-solve" 
          src="prob_solve.jpg" 
          alt="Samit Sandhu" 
          style={{ width: "40%", borderRadius: "12px", objectFit: "cover" }} 
        />


        <div style={{ flex: 1 }}>
          <p style={{ lineHeight: "1.8rem", marginBottom: "1rem", fontSize: 20 }}> 
            Meet Sam — your go-to problem solver. With <strong>2 years of coding experience</strong> and 
            <strong> 5 years in mortgage and real estate</strong>, Sam combines technical know-how 
            with practical business expertise to tackle challenges head-on. 
          </p>

          <p style={{ lineHeight: "1.8rem", marginBottom: "1rem", fontSize: 20 }}>
            Whether you’re trying to streamline your financial systems, automate your workflows, 
            or simply get clear, actionable advice, Sam’s solutions are tailored to make your 
            headaches disappear. No fluff. No delays. Just results. 
          </p>

          <p style={{ lineHeight: "1.8rem", marginBottom: "1rem", fontSize: 20 }}>
            From coding elegant apps to optimizing your mortgage strategies, Sam works behind the 
            scenes so you can focus on what matters most. Your problems become Sam’s mission. 
          </p>

          <Link 
            to="/about" 
            style={{ color: "#0077ff", fontWeight: "bold", textDecoration: "underline" }}
          >
            Learn more about Sam and his solutions...
          </Link>
        </div>
      </div>
    </section>
  );
}
