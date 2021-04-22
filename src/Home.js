import withRoot from './Home/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './Home/views/ProductCategories';
import ProductSmokingHero from './Home/views/ProductSmokingHero';
import AppFooter from './Home/views/AppFooter';
import ProductHero from './Home/views/ProductHero';
import ProductValues from './Home/views/ProductValues';
import AppAppBar from './Home/views/AppAppBar';
import AppMenuBar from './Home/views/AppMenuBar';
import Container from '@material-ui/core/Container';

function Index() {
  return (
    <Container>
      <AppAppBar />
      <AppMenuBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <AppFooter />
    </Container>
  );
}

export default withRoot(Index);
