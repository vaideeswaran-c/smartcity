import React from "react";
import AppAppBar from '../Home/views/AppAppBar';
import AppMenuBar from '../Home/views/AppMenuBar';
import AppFooter from '../Home/views/AppFooter';
import "./Posts.css";
import Post from "./Post";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const Posts = () => {
  const blogPosts = [
    {
      title: "Disneyland Park",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ74afNCHSasZIFL0OzZj-iPCUrdULKg7pBwAk56wiWyN08ksj3FdyzOx1pu_2CsAWbDTlVdyiPahxGvNYNmERSw',
      body: "Famed amusement park with 8 themed lands",
      review: "4.6",
    },
    {
      title: "Hollywood Sign",
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUOsf8o5-PsMfFjyiw0J_ggxv1PKtdyU3SNHJdkXzxX54pFKBKsxPyuAnotGCqaOUKLq3gCglIDWKZ6JEHABkxog',
      body: "Iconic letters atop Mount Lee since 1923",
      review: "4.7",
    },
    {
      title: "Universal Studios Hollywood",
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTuNwj8WxmRcEp8dG9vCBZPdV1m-7MpTGrMJFvHPTDFGykQ9UevOE6Fhu1VPXuezR6lO1cC9jbngazvys9pWPSdog',
      body: "Big movie-themed amusement park",
      review: "4.4",
    },
    {
      title: "Santa Monica Pier",
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDmmpLgUtYvW9PxPW6jkCWuZRdWxdQGMCoO_AQWrJ8yXl7wOKyYvjwB79y9x5qBjfRxdGeh1Vzk4k7qIyq80IWiA',
      body: "Popular landmark for rides & restaurants",
      review: "4.9",
    },
    {
      title: "Griffith Observatory",
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSuUYSjrRJv7cnKu9oo2bVri53Wo3NrJa3-IjtVrUCqlWRn4HeE6vNQdye79ZFd4FdcH6qKA21zwAiiUtYU2K3qfw',
      body: "Planetarium, telescopes & city views. view of the Los Angeles Basin",
      review: "4.7",
    },
    {
      title: "Griffith Park",
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQBO8bTtUa7xlpgjMRswMpa0qWvFLmKw2N08K7r8IuDr_XkTZPNy3FDJ09uHPuiRRMcP5P6UT6vZKMZCqE0HLEUMw',
      body: "Hiking trails, city views & L.A. Zoo(Famous)",
      review: "4.7",
    },
    {
      title: "Los Angeles County Museum of Art",
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDmmpLgUtYvW9PxPW6jkCWuZRdWxdQGMCoO_AQWrJ8yXl7wOKyYvjwB79y9x5qBjfRxdGeh1Vzk4k7qIyq80IWiA',
      body: "From pre-Columbian to contemporary works",
      review: "4.3",
    },
    {
      title: "Hollywood Boulevard",
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqvlrMEOPnLgsshQCRenme7PflZPWPiliOBVfpOpcYCIo6G3oExMSDxKveo5I4nUCMgZvesbXnr8vwmUx4AOm2mw',
      body: "Famous street with glitzy attractions",
      review: "4.4",
    },
  ];

  //title, body , img, author
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppAppBar />
        <AppMenuBar />
      <div className="posts-container">
        {blogPosts.map((post, index) => (
          <Post key={index} index={index} post={post} />
        ))}
      </div>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
};

export default Posts;
