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
      title: "Warehouse and Shopper Team Member",
      company: 'Amazon',
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      salary: "$90k/year",
    },
    {
      title: "Guest Service Representative",
      company: 'Marriot International',
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        salary: "$60k/year",
    },
    {
      title: "Human Resources Assistant",
      company: 'Housing Authority LA',
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        salary: "$50k/year",
    },
    {
      title: "Remote Life & Career Coach at MYNDUP - Mental Health Startup...",
      company: 'MYNDUP',
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book i",
        salary: "$100k/year",
    },
    {
      title: "Bookseller - Part-Time",
      company: 'Barnes and Noble',
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book i",
        salary: "$30k/year",
    },
    {
      title: "Internal Revenue Agent",
      company: 'Internal Revenue Service LA',
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book i",
        salary: "$120k/year",
    },
    {
      title: "Seasonal Ice Cream Scooper - Arts District",
      company: 'Salt & Straw',
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book i",
        salary: "$65k/year",
    }
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
