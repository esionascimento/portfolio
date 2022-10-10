import * as React from 'react';
import NavbarHorizontal from 'src/components/Navbar';
import { pages } from 'src/config/navbar';
import { Welcome } from 'src/sections/home';

const Home = () => {
  return (
    <>
      <NavbarHorizontal pages={pages} />

      <Welcome />
    </>
  );
};

export default Home;
