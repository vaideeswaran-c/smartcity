import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
  justify: {
    textJustify: 'inter-word'
  }
});

function ProductValues(props) {
  const { classes } = props;
  const [newdata, setNewdata] = React.useState([]);
  useEffect(async () => {
    const response = await fetch("/api/blog", {
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
  const blogData = [
    {
      title: "WHERE TO VOLUNTEER IN LOS ANGELES",
      details: "Holidays can bring the spirit of giving into our lives and because Los Angeles is one giant city. There’s a lot you can do to give back to your community! LA…",
      image: "/images/productValues1.svg"
    },
    {
      title: "BEST PLACES TO WATCH FIREWORKS ON NEW YEAR’S EVE IN LA",
      details: "Ready for that New Year’s kiss under a sky filled with fireworks? You don’t have to look far and wide, for the fireworks at least, LA has plenty of beautiful spots…",
      image: "/images/productValues2.svg"
    },
    {
      title: "11 BEST CAFES FOR WORKING REMOTELY IN LOS ANGELES",
      details: "Maybe it’s the perpetually beautiful weather, or perhaps it’s the large demographic of artists on a creative mission, but whatever it is, LA is full of folks on non-traditional career paths…",
      image: "/images/productValues3.svg"
    }
  ];

  return (
    <>
      <Typography variant="h4" marked="center" align="center" component="h2" className={classes.title}>
        City Blogs
      </Typography>
    <section className={classes.root}>
      <Container className={classes.container}> 
        <img
          src="/images/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          {newdata.map((data, index) => {
            return (
              <Grid item xs={12} md={4} key={index}>
              <div className={classes.item}>
                <Typography variant="h6" className={classes.title}>
                  {data.blogHeadline}
                </Typography>
                <Typography variant="h5" className={classes.justify}>
                  {data.details}
                </Typography>
              </div>
            </Grid>
            )
          })}
        </Grid>
      </Container>
    </section>
    </>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
