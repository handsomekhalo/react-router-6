import {Link, Outlet} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import StyledNavBar from '../Components/StyledNavbar'

const Home = () => {
  return (
    //fragmnet
    <>
      <Navbar/>
      <Outlet/>

      </>
  );
};
export default Home;
 