import { Link } from "react-router-dom";

export default function About() {
  return (
    <section style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}>
      <h2 style={{ color: "#0077ff", marginBottom: "1rem" }}>Do we have a problem?</h2>

      <p style={{ lineHeight: "1.6rem", marginBottom: "1rem" }}> 
        Meet Sam — your go-to problem solver. With <strong>2 years of coding experience</strong> and 
        <strong> 5 years in mortgage and real estate</strong>, Sam combines technical know-how 
        with practical business expertise to tackle challenges head-on. 
      </p>

      <p style={{ lineHeight: "1.6rem", marginBottom: "1rem" }}>
        Whether you’re trying to streamline your financial systems, automate your workflows, 
        or simply get clear, actionable advice, Sam’s solutions are tailored to make your 
        headaches disappear. No fluff. No delays. Just results. 
      </p>

      <p style={{ lineHeight: "1.6rem", marginBottom: "1rem" }}>
        From coding elegant apps to optimizing your mortgage strategies, Sam works behind the 
        scenes so you can focus on what matters most. Your problems become Sam’s mission. 
      </p>

      <Link to="/about" style={{ color: "#0077ff", fontWeight: "bold", textDecoration: "underline" }}>
        Learn more about Sam and his solutions...
      </Link>
    </section>
  );
}
