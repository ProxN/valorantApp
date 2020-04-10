import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import LayoutContainer, { Wrapper } from './styles';
import GlobalStyles from '../../styles/global.styles';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyles />
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </LayoutContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
