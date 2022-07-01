import Footer from '@components/footer';
import React from 'react';
import Navbar from '../navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
