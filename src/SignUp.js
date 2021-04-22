import withRoot from './Home/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Field, Form, FormSpy } from 'react-final-form';
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

function SignUp() {
  const classes = useStyles();
  const history = useHistory();


  const validate = (values) => {
    const errors = required(['firstName', 'lastName', 'email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }

    return errors;
  };

  const onSubmit = async values => {
    const data = {
      email: values.email,
      password: values.password,
      phone: values.phone,
      name: values.name,
      citizenId: 1
    }
    console.log("data", data)
    const response = await fetch("/api/user", {
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
    result.then(data => {
      localStorage.setItem("role", data.role);
      localStorage.setItem("name",data.name);
      localStorage.setItem("isLoggedIn", true);
      history.push("/home");
    })
    
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/signin" underline="always">
              Already have an account?
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field
              autoFocus
              component={RFTextField}
              fullWidth
              label="Name"
              margin="normal"
              name="name"
              required
              size="large"
            />
            <Field
              autoFocus
              component={RFTextField}
              fullWidth
              label="Phone"
              margin="normal"
              name="phone"
              required
              size="large"
            />
            <Field
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
              label="Password"
              type="password"
              margin="normal"
            />

            <FormButton
              className={classes.button}
              size="large"
              color="secondary"
              fullWidth
            >
              Sign Up
            </FormButton>
          </form>
        )}
      />
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignUp);
