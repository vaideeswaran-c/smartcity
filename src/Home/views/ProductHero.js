import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;
  const [newdata, setNewdata] = React.useState([]);
  useEffect(async () => {
    const response = await fetch("/api/news", {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    });
    const result = response.json();
    result.then(data => {
      console.log("data", data)
      setNewdata(data)
    })
    return () => {
    }
}, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const dataList = [
    {
      title: "Lakers are champions once again",
      description: "Lakers beat Mets in the final to become champions once again",
      link: "/",
      image: "https://images.unsplash.com/photo-1515896769750-31548aa180ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1134&q=80"
    },
    {
      title: "Trump lost the election",
      description: "Biden beats Trump in the presidential election",
      link: "/",
      image: "https://images.unsplash.com/photo-1550531996-ff3dcede9477?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
    },
    {
      title: "Black Lives Matters",
      description: "People protest near city square in favour of #blacklivesmatters",
      link: "/",
      image: "https://images.unsplash.com/photo-1591965309579-8845601120c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=971&q=80"
    },
    {
      title: "Covid19 second wave started",
      description: "New cases are reported in the city at a high speed",
      link: "/",
      image: "https://images.unsplash.com/photo-1587316745621-3757c7076f7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80"
    },
    {
      title: "Mayor requests people to follow the covid19 protocols",
      description: "This morning mayor issued statement to citizens",
      link: "/",
      image: "https://images.unsplash.com/photo-1582974006777-1117ffbdd7d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
  ];

  return (
    <Slider {...settings}>
    {newdata.map((data, index) => {
      return (
        <ProductHeroLayout backgroundClassName={classes.background} image={data.image} key={index}>
        <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
        <Typography color="inherit" align="center" variant="h2" marked="center">
          {data.newsHeadline}
        </Typography>
        <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
          {data.details}
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
          href="/premium-themes/onepirate/sign-up/"
        >
          Read now
        </Button>
      </ProductHeroLayout>
      )
    })}
    </Slider>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
