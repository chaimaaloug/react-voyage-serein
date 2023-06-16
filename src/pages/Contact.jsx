import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
 
const Contact = () => {
    return (
        <div>
            {/* <Header/> */}
            <p>Contact Page</p>
            <Link to="/">Link to home</Link>
            <Footer />
        </div>
    );
} 

export default Contact;