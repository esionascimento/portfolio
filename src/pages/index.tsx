import NavbarHorizontal from 'src/components/Navbar';
import { settings, pages } from 'src/config/navbar';

const Home = () => {
  return (
    <>
      <NavbarHorizontal pages={pages} settings={settings} />
    </>
  );
};

export default Home;
