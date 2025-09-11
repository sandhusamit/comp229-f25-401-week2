import { Link } from "react-router-dom"
export default function Layout() {
    return (
      <header>
        <div className="header-top">
          <img src="/samsol.jpg" alt="SamsSolutions" />
          <h1>My Portfolio</h1>
        </div>
  
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/education">Education</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
        </nav>
      </header>
    )
  }
  