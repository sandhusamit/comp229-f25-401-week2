//import useState to manage form state for inputs
import { useState } from "react"; 

// Simple contact form component 
export default function Contact() {
  // When contact called: set initial state of form data
  // useState automatically creates [stateVariableObject, functionToUpdateState] 
      //formData object is assigned 3 properties: name, email, message
      //setFromData function to be called upon change of state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
// function to handle changes in input fields
  // e is the event object which will be used as an input event (automatically recognized by react)
  const handleChange = (e) => {
    setFormData({ 
      ...formData, //use the data from form
      [e.target.name]: e.target.value 
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I’ll get back to you soon.");
    // Here you could send the data to EmailJS, a backend, etc.
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name">Name</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
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

        <button type="submit" style={{
          padding: "0.7rem 1.5rem",
          backgroundColor: "#0077ff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Send
        </button>
      </form>
    </div>
  );
}
