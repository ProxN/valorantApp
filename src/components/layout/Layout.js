import React from 'react';
import PropTypes from 'prop-types';
import LayoutContainer from './styles';
import GlobalStyles from '../../styles/global.styles';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
