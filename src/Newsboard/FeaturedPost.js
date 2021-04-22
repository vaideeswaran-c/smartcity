import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import EditForm from './EditForm';
import EditIcon from '@material-ui/icons/Edit';
import DeleteAlert from './DeleteAlert'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;
  const { id } = post
  const [edit, setEdit] = React.useState(false);
  const [delete1, setDelete] = React.useState(false);

  const handleEdit = () => {
    setEdit(true)
  }
  const handleDelete = () => {
    setDelete(true)
  }

  let isLoggedIn = localStorage.getItem("isLoggedIn");
  let username = localStorage.getItem("name");
  let role = localStorage.getItem("role");

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.newsHeadline}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.dateTime}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.details}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} />
          </Hidden>
        </Card>
        {isLoggedIn == "true" && role == "admin" && <div>
      <EditIcon onClick={handleEdit} style={{cursor: 'pointer'}}/>
      <DeleteIcon onClick={handleDelete} style={{cursor: 'pointer'}}/>
        </div>}
      </CardActionArea>
      <DeleteAlert open={delete1} setOpen={setDelete} id={id}/>
      <EditForm open={edit} setOpen={setEdit} post={post}/>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
