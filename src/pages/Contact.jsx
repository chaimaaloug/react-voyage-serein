import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
 
const Contact = () => {
    return (
        <div>
            <p>Contact Page</p>
            <Link to="/">Link to home</Link>
            <Footer />
        </div>
    );
} 

export default Contact;