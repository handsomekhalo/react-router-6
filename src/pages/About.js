import { Link ,Outlet} from "react-router-dom";
import Navbar from '../Components/Navbar';


const About = () => {
  return (
    
  
    <section className='section'>
     <h1>About</h1>
     <Link to='/'className="btn">
       Back Home
     </Link>
    </section>
  

  );
};
export default About;
