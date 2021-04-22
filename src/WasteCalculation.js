import React from 'react'
import AppAppBar from './Home/views/AppAppBar';
import AppMenuBar from './Home/views/AppMenuBar';
import AppFooter from './Home/views/AppFooter';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import WasteCalculation from './WasteCalculationChart';
import Button from '@material-ui/core/Button';

class BasicFormRefactored extends React.Component {
  constructor() {
      super()
    this.state = {
        recyclable: '',
        nonrecyclable: '',
        isShow: false,
        message: '',
        isPay: true
    }
  }

  handleChange = (event) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value })
  }

  handleOnClick = event => {
    event.preventDefault();
    const { isPay } = this.state;
    if(isPay) {

    } else {

    }
    this.setState({ recyclable: '', nonrecyclable: '', isShow: false, message: '', isPay: false })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { recyclable, nonrecyclable } = this.state;
    if(recyclable < nonrecyclable) {
        this.setState({ isShow: true, message: `You have to pay ${nonrecyclable - recyclable} dollars` , isPay: true})
    } else if(recyclable > nonrecyclable) {
        this.setState({ isShow: true, message: `You can have the credit of ${recyclable - nonrecyclable} dollars` , isPay: false})
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
          <h2>Payment Weekly Chart</h2>
          <WasteCalculation />
          <h2>Waste Calculation</h2>
      <form onSubmit={this.handleSubmit}>
          <div>
        <label>
          Recyclable waste:
          <input
            name="recyclable"
            type="number"
            value={this.state.recyclable}
            onChange={this.handleChange} />
            in gallons
        </label>
        </div>
        <div>
        <label>
          Non recyclable waste:
          <input
            name="nonrecyclable"
            type="number"
            value={this.state.nonrecyclable}
            onChange={this.handleChange} />
            in gallons
        </label>
        </div>
        <div>
        <input type="submit" value="Submit" />
        </div>
      </form>
      {this.state.isShow && <div>
            <p>{this.state.message}</p>
            <Button variant="contained" onClick={this.handleOnClick}>Add the details to my account</Button>
      </div>}
      </Container>
      <AppFooter />
    </React.Fragment>
    );
  }
}

export default BasicFormRefactored 