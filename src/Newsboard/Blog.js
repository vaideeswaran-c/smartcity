import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import AppAppBar from '../Home/views/AppAppBar';
import AppMenuBar from '../Home/views/AppMenuBar';
import AppFooter from '../Home/views/AppFooter';
import AddForm from './AddForm';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import Card from '@material-ui/core/Card';

export default function Blog() {
  const [newdata, setNewdata] = React.useState([]);
  const [mainPost, setMainPost] = React.useState({});
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  let username = localStorage.getItem("name");
  let role = localStorage.getItem("role");
  const [open, setOpen] = React.useState(false);
  const handleAdd = () => {
    setOpen(true);
  }
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
      setMainPost(data[0])
    })
    return () => {
    }
}, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <AppAppBar />
      <AppMenuBar />
        <main>
          <MainFeaturedPost post={mainPost} />
          <Grid container spacing={4}>
            {newdata.map((post, index) => (
              <FeaturedPost key={post.newsHeadline} post={post} />
            ))}
          {isLoggedIn == "true" && role == "admin" && 
          <AddCircleOutlineTwoToneIcon style={{fontSize: '75px', cursor: 'pointer'}} onClick={handleAdd}/>
            }
          </Grid>

        </main>
      </Container>
      <AppFooter />
      <AddForm open={open} setOpen={setOpen}/>
    </React.Fragment>
  );
}
