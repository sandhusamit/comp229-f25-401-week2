import { Link } from "react-router-dom";
export default function About() {
    return (
        <>
            <div>Do we have a problem?</div>

            <p> 
                Sam's solutions to your problems. With 2 years of coding xp, 5 years of mortgage and real estate experience, Sam is here to make
                your biggest headaches his own until they are gone for good. <button ></button>
            </p>
            <Link to="/about">More on Sam and his solutions...</Link>
        </>
    )
}