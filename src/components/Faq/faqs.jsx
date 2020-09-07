import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Faq extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faq1: true,
      faq2: true,
      faq3: true,
      faq4: true,
      faq5: true,
    }
    this.faq1 = this.faq1.bind(this)
    this.faq2 = this.faq2.bind(this)
    this.faq4 = this.faq4.bind(this)
    this.faq3 = this.faq3.bind(this)
    this.faq5 = this.faq5.bind(this)
  }
  faq1() {
    this.setState({
      faq1: !this.state.faq1
    })
  }
  faq2() {
    this.setState({
      faq2: !this.state.faq2
    })
  }
  faq3() {
    this.setState({
      faq3: !this.state.faq3
    })
  }
  faq4() {
    this.setState({
      faq4: !this.state.faq4
    })
  }
  faq5() {
    this.setState({
      faq5: !this.state.faq5
    })
  }

  render() {
    let {
      faq1,
      faq2,
      faq3,
      faq4,
      faq5
    } = this.state
    return (
      <div className="faq opacy">
        <div className="faq_header py-5  jumbotron container-fluid border z-depth-0 animated "
          style={{ background: "#F5F5F5" }}
        >
          <div className="row mx-lg-5 ">
            <div className="faq_left col-md-7 ">
              <div className="faq_title_bold biod  black-text lead">
                FAQS
              </div>
              <div className="faq_all_question my-0">
                All your questions answered in one place
              </div>
            </div>
            <div className="faq_right col-md-5">
              <div className="faq_link small">
                <span><Link to="/">Home</Link><span className="mx-1"> / </span>FAQs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="faq_header white pt-3 jumbotron 3ontainer-fluid  z-depth-0"
          style={{ background: "#F5F5F5" }}
        >
          <div className="row mx-lg-5 w-100">
            <div className="faq_left col-md-8 py-2 border-bottom  specfaq">
              <div className="flex pointer"
                onClick={this.faq1}
              >
                <div className="border text-white question_mark  rounded-pill mr-2 mb-1 font-weight-bold">?</div><div className="faqui">Can I monitor the progress of my repair ?</div>
              </div>
              <div className={`faq_trnas my-2 ${faq1} flex`}>
                <div className=" text-white question_mark mx-1 white rounded-pill mr-2 mb-1 font-weight-bold">?</div> Our website has a tracking tool that enables you monitor the progress of your repair through a unique ID that will assigned to you during registration.
              </div>
            </div>
            <div className="faq_left col-md-8 py-2 border-bottom  specfaq mt-3">
              <div className="flex pointer"
                onClick={this.faq2}
              >
                <div className="border text-white question_mark  rounded-pill mr-2 mb-1 font-weight-bold">?</div><div className="faqui">What's the available payment option ?</div>
              </div>
              <div className={`faq_trnas my-2 ${faq2} flex`}>
                <div className=" text-white question_mark mx-1 white rounded-pill mr-2 mb-1 font-weight-bold">?</div>
                You can make payment directly at the repair centers and there will also be a feature that supports card payments on our website. We accept Visa, Master and Verve cards.              </div>
            </div>
            <div className="faq_left col-md-8 py-2 border-bottom  specfaq mt-3">
              <div className="flex pointer"
                onClick={this.faq3}
              >
                <div className="border text-white question_mark  rounded-pill mr-2 mb-1 font-weight-bold">?</div><div className="faqui">How long does it take to complete a repair task ?</div>
              </div>
              <div className={`faq_trnas my-2 ${faq3} flex`}>
                <div className=" text-white question_mark mx-1 white rounded-pill mr-2 mb-1 font-weight-bold">?</div>

                The time to complete a repair varies with the nature of the repair task. We give a duration quote at the point of registration and also work towards fixing your gadget at the least possible time.            </div>
            </div>
            <div className="faq_left col-md-8 py-2 border-bottom  specfaq mt-3">
              <div className="flex pointer"
                onClick={this.faq4}
              >
                <div className="border text-white question_mark  rounded-pill mr-2 mb-1 font-weight-bold">?</div><div className="faqui">The gadgets I want to repair is not  movable, can I get it fixed in my home ?</div>
              </div>
              <div className={`faq_trnas my-2 ${faq4} flex`}>
                <div className=" text-white question_mark mx-1 white rounded-pill mr-2 mb-1 font-weight-bold">?</div>

                Our technicians will also be attending to our lovely clients whose gadgets cannot leave their abode due to the nature of installation or its mobility. The repair task will be done at your residence or office.
            </div>
            </div>
            <div className="faq_left col-md-8 py-2 border-bottom  specfaq mt-3">
              <div className="flex pointer"
                onClick={this.faq5}
              >
                <div className="border text-white question_mark  rounded-pill mr-2 mb-1 font-weight-bold">?</div><div className="faqui">Is there any available refund policy ?</div>
              </div>
              <div className={`faq_trnas my-2 ${faq5} flex`}>
                <div className=" text-white question_mark mx-1 white rounded-pill mr-2 mb-1 font-weight-bold">?</div>

                Yes. There's an option for refund if an order is cancelled or you are not satisfied with our services. The refund policy page will be available when we fully commence operation.

            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { Faq }