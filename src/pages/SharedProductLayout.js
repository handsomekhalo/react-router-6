import {Outlet} from 'react-router-dom';

import StyledNavBar from '../Components/StyledNavbar'

const Home = () => {
  return (
    //fragmnet
    <>
      <h2>products</h2>
      <Outlet/>

      </>
  );
};
export default Home;
 