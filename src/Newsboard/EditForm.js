import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import {
  Paper,
  Grid,
  Button
} from '@material-ui/core';

export default function FormDialog({open, setOpen, post}) {

  const handleClose = () => {
    setOpen(false);
  };

  const z = (n) =>{return (n<10?'0':'') + n}

  const toISOStringLocal = (d) => {
    return d.getFullYear() + '-' + z(d.getMonth()+1) + '-' +
           z(d.getDate()) + 'T' + z(d.getHours()) + ':' +
           z(d.getMinutes()) + ':' + z(d.getSeconds())
            
  }

  const onSubmit = async values => {
    console.log("values", values)
    values.dateTime = toISOStringLocal(new Date());
    const response = await fetch(`/api/news`, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
          }, 
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(values)
      });
    setOpen(false);
    window.location.reload()
  };
  const required = value => (value ? undefined : 'Required')

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit News</DialogTitle>
        <DialogContent>
        <Form
        onSubmit={onSubmit}
        initialValues={post}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} >
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    validate={required}
                    name="newsHeadline"
                    component={TextField}
                    type="text"
                    label="newsHeadline"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    validate={required}
                    required
                    name="details"
                    component={TextField}
                    type="text"
                    label="Description"
                    multiline={true}
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="image"
                    fullWidth
                    required
                    validate={required}
                    component={TextField}
                    type="text"
                    label="Image url"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="id"
                    component="input"
                    type="text"
                    label="id"
                    variant="outlined"
                    hidden
                  />
                  </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="link"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="link"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
        </DialogContent>
      </Dialog>
    </div>
  );
}