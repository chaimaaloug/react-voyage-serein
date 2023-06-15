import { Link } from 'react-router-dom';
import Header from '../components/Header/Header'

const About = () => {
    return (
        <div>
            <p>About Page</p>
            <Link to="/contact">Link to contact</Link>
        </div>
    );
} 

export default About;