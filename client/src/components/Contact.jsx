import { useState } from "react"; 

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Thanks for reaching out! I’ll get back to you soon.");
        setFormData({ firstName: "", lastName: "", email: "", message: "", service: "" });
      } else {
        console.error("Failed to send inquiry");
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Server error. Please try again later.");
    }
  };
  
    


  return (
    <section style={{ margin: "2rem auto", padding: "1rem", maxWidth: "1200px" }}>
      <h2 style={{ color: "#0077ff", marginBottom: "1.5rem", textAlign: "center" }}>
        Contact Me
      </h2>

      <div 
        style={{ 
          display: "flex", 
          alignItems: "flex-start", 
          justifyContent: "center", 
          gap: "2rem", 
          width: "100%" 
        }}
      >


        <form 
          onSubmit={handleSubmit} 
          style={{ flex: 1, maxWidth: "500px" }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="firstName">First Name</label><br />
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="lastName">Last Name</label><br />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="topic">Service</label><br />
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                style={{ width: "100%", padding: "0.5rem" }}
              >
                <option value="">-- Select a Service --</option>
                <option value="mortgage">Mortgage</option>
                <option value="real-estate">Real Estate</option>
                <option value="techsolutions">Tech Solutions</option>
                {/* <option value="other">Other</option> */}
              </select>
            </div>


          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email">Email</label><br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="message">Message</label><br />
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            ></textarea>
          </div>

          <button 
            type="submit" 
            style={{
              padding: "0.7rem 1.5rem",
              backgroundColor: "#0077ff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
};
