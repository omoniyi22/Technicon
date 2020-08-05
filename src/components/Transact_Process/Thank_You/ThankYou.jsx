import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';

const thank_png = require("./thanks.png")




class Thank_You extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if (this.props.TS3 === false) {
      this.props.history.push('/dashboard')
    }
  }

  componentDidUpdate(prevProps) {

    let {TS3} = this.props
    if (TS3 !== prevProps.TS3) {
      this.props.history.push('/dashboard')
    }
  }


  render() {
    return (
      <div className="Thank_You  flex py-0 row m-0">
        <div className="thank_png  w-100">
          <img src={thank_png} width='250px' />
        </div>
        <div className="thank_text col-12 font-weight-bold  text-center px-5">
          Thank You For Your Patronage !!!
                </div>
        <div className="thank_button  col-12 w-100 mx-0 px-2 text-center rounded-pill"
          onClick={
            () => {
              this.props.Close_Transact()
              this.props.history.push('/thank-you')

            }
          }
        >
          <Link to="/dashboard">
            <div className="w-100 rounded-pill"

            >
              DONE
                    </div>
          </Link>
        </div>
      </div>
    )
  }
}


export default withRouter(Thank_You)