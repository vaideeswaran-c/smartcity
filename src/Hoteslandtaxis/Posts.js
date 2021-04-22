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
      title: "Freehand Los Angeles",
      image: 'https://lh3.googleusercontent.com/p/AF1QipOmiTy09SlFk0wu-kXofG9Nfu_sz0Pg6ffFjBry=w296-h202-n-k-rw-no-v1',
      body: "Trendy dorms & rooms in a funky lodging with dining & free breakfast, plus a rooftop pool & bar",
      price: '$80',
      website: "https://freehandhotels.com/los-angeles/?utm_source=google-my-business&utm_medium=organic&utm_campaign=hotel-los-angeles",
      avatar: "F"
    },
    {
      title: "The Ritz-Carlton",
      image: 'https://lh3.googleusercontent.com/p/AF1QipO3UzKB3LucyQ_B85LHgmkB07NEtZxBcI2euBE-=w296-h202-n-k-rw-no-v1',
      body: "Sophisticated downtown hotel with a posh spa & chic bars, plus upscale dining & a rooftop pool",
      price: "$150",
      website: "https://www.ritzcarlton.com/en/hotels/california/los-angeles?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_NTc3MjgzLTcxNS1sb2NhdGlvbi5nb29nbGVfd2Vic2l0ZV9vdmVycmlkZQ%3D%3D",
      avatar: "T"
    },
    {
      title: "Hotel Bel-Air",
      image: 'https://lh3.googleusercontent.com/proxy/Th1l0EuifROAMGnhD7hCuFN5hZTHlabUUZHrPb8Xfm7NDGC9Ye36ShjBudVvbCPYfC_u6W1JJCmxAHUYFRUwDVqM_n9W5MZCCXy9IZGUC8Gbd0D25EULq7L5fzY7rhHgYLN5tWIlQlx87QjWQ1wHV4rbgDnCxFY=w296-h202-n-k-rw-no-v1',
      body: "Posh quarters with marble bathrooms in a luxury hotel featuring an outdoor pool, a spa & a bar",
      price: "$300",
      website: "https://www.dorchestercollection.com/en/los-angeles/hotel-bel-air",
      avatar: "H"
    },
    {
      title: "Waldorf Astoria Beverly Hills",
      image: 'https://lh3.googleusercontent.com/proxy/Okkqe7Wb7XYx-DSIU1aeDDqzbm_K4TDgUHDy2rLyUnarMX3xnAlbX8kZlyWUxJ2sDUUkFYFWEJEIp4h6RbYa0G2AsOC6rRSGkbyuvpBD0BeOxHddqozxekSN2G0FojzC0AF7CzuNLTrqA6J2--L96YOA_6ID-A=w296-h202-n-k-rw-no-v1',
      body: "Lavish rooms & suites in a posh property offering dining, a spa & a rooftop bar with city views.",
      price: '$125',
      website: "https://waldorfastoria3.hilton.com/en/hotels/california/waldorf-astoria-beverly-hills-LAXWAWA/index.html?SEO_id=GMB-WA-LAXWAWA&y_source=1_NjQ4NjU5OS03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D",
      avatar: "W"
    },
    {
      title: "The Wayfarer Downtown",
      image: 'https://lh3.googleusercontent.com/proxy/LmkqoM_1OHeup2FVupjG7qLsZTTJkLuJKNGKFmyzyXOzjkTwGylA_WgcOfT5iRhufo5hr-XyLvLWajT1hV-WgPSITjojdwebbuJp8K5wzec59cc4FoNMzW3qaxnjjzEL4QWf4FCFgqVnqKRRo9AU1EOc-bh1HWQ=w296-h202-n-k-rw-no-v1',
      body: "Trendy hotel offering indoor & rooftop bars, plus a cafe, a guest kitchen & co-working space.",
      price: "$90",
      website: "https://wayfarerdtla.com/?utm_source=google&utm_medium=organic&utm_campaign=business_listing",
      avatar: "T"
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
