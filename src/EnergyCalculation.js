import React from 'react'
import AppAppBar from './Home/views/AppAppBar';
import AppMenuBar from './Home/views/AppMenuBar';
import AppFooter from './Home/views/AppFooter';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

class BasicFormRefactored extends React.Component {
  constructor() {
      super()
    this.state = {
        energyconsumed: '',
        energypushed: '',
        isShow: false,
        message: '',
        isPay: true,
        solar: ''
    }
  }

  handleChange = (event) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value })
  }

  handleOnClick = event => {
    event.preventDefault();
    const { energyconsumed, energypushed, isShow, message, isPay } = this.state;
    if(isPay) {

    } else {

    }
    this.setState({ energyconsumed: '', energypushed: '', isShow: false, message: '', isPay: false })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { solar, energyconsumed } = this.state;
    if(solar < energyconsumed) {
        this.setState({ isShow: true, message: `You have to pay ${(energyconsumed - solar) * 7} dollars` , isPay: true})
    } else if(solar > energyconsumed) {
        this.setState({ isShow: true, message: `You can have the credit of ${(solar - energyconsumed)*7} dollars` , isPay: false})
    } else {
        this.setState({ isShow: true, message: "No payment needed", isPay: false })
    }
  }

  render() {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <AppAppBar />
          <AppMenuBar />
          <h2>Energy Calculation</h2>
      <form onSubmit={this.handleSubmit}>
          <div>
          <label>
          Energy from solar panels:
          <input
            name="solar"
            type="number"
            value={this.state.solar}
            onChange={this.handleChange} />
            in watts
        </label>
        </div>
        <div>
        <label>
          Energy consumed
          <input
            name="energyconsumed"
            type="number"
            value={this.state.energyconsumed}
            onChange={this.handleChange} />
            in watts
        </label>
        </div>
        <div>
        <label>
          {`Energy pushed back
            ${this.state.solar > this.state.energyconsumed ? this.state.solar - this.state.energyconsumed: 0}
            in watts`}
        </label>
        </div>
        <div>
        <input type="submit" value="Submit" />
        </div>
      </form>
      </Container>
      <AppFooter />
    </React.Fragment>
    );
  }
}

export default BasicFormRefactored 