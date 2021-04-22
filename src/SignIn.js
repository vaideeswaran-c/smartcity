import withRoot from './Home/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from './Home/components/Typography';
import AppFooter from './Home/views/AppFooter';
import AppAppBar from './Home/views/AppAppBar';
import AppForm from './Home/views/AppForm';
import { email, required } from './Home/form/validation';
import RFTextField from './Home/form/RFTextField';
import FormButton from './Home/form/FormButton';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

function SignIn() {
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);
  const history = useHistory();

  const onSubmit = async values => {

    const data = {
      email: values.email,
      password: values.password
    }
    console.log("data", data)
    const response = await fetch("/api/user/login", {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    const result = response.json();
    console.log("response", result)
    result.then(data => {
      console.log("data", data)
      localStorage.setItem("role", data.role);
      localStorage.setItem("name",data.name);
      localStorage.setItem("isLoggedIn", true);
      history.push("/home");
    })
    
  }

  return (
    <React.Fragment>
      <AppAppBar/>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/signup" align="center" underline="always">
              Sign Up here
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field
              autoComplete="email"
              autoFocus
              component={RFTextField}
              fullWidth
              label="Email"
              margin="normal"
              name="email"
              required
              size="large"
            />
            <Field
              fullWidth
              size="large"
              component={RFTextField}
              required
              name="password"
              autoComplete="current-password"
              label="Password"
              type="password"
              margin="normal"
            />

            <FormButton
              className={classes.button}
              disabled={submitting || sent}
              size="large"
              color="secondary"
              fullWidth
            >
              Sign In
            </FormButton>
          </form>
        )}
      />
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignIn);
