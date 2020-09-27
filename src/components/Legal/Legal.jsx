// import React, { Component } from 'react'
// import './legal.scss'

// class Legal extends Component{
//   constructor(props){
//     super(props)
//   }
//   componentDidMount(){
//     this.props.nav_in()
//   }
//   render(){
//     return(
//       <div>
//         <div className="legals my-3 py-2">
//           <div className="legal">

//           <div className="  text-left pb-3 ml-2 h3 mt-3 text-primary">Terms and Policies</div>
//           <div className="body  jumbotron border pb-4  "
//           style={{marginRight: "10px"}}
//           >
//             <div className="my-2 font-weight-bold h6 pb-2">Our Legal Terms and Conditions</div>
//             <div className="note py-1 px-4 note-primary py-3">
//               Advertise with www.rubberspace.space, the first cloud platform with her user base in schools. The funding recieved is used to generate more traffic(users) in essence promote all products on our advert lists.

// An advert on out platform drives needed attention to your goods & services in a country where family assets acquisition decisions are highly influenced by women.

// It pays to take advantage ans give your brand awareness the needed boost.

// RubberSpace is a cloud platform that allows you to store, manage and share your files. Upload your files on RubberSpace and save more than 65% of your data & storage capacity. All you have to do is upload once and you get to share the link with as many people as you want to.
//             </div>

//             </div>
//         </div>
//           </div>
//       </div>
//     )
//   }
// }



import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Legal extends Component {
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
  componentDidMount() {
    this.props.nav_in()
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
                LEGALS
              </div>
              <div className="faq_all_question my-2">
                Our Terms and Conditions
              </div>
              {/* <div class='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='1185000000' data-delay='5' data-increment="5987654">0</div> */}
            </div>
            <div className="faq_right col-md-5">
              <div className="faq_link small">
                <span><Link to="/">Home</Link><span className="mx-1"> / </span>Legals</span>
              </div>
            </div>
          </div>
        </div>

        <div className="faq_header white pt-3    z-depth-0"
          style={{ background: "#F5F5F5" }}
        >
          <div className="row mx-lg-5 w-100 ">
            <div className="faq_left col-md-7  py-2  specfaq">
              <div className="  pb-2 piew mx-4 mt-3 mb-2"
                style={{ fontSize: 24 }}
              >
                Learn About Our Terms and Policies
              </div>
              <div className="body    pb-2  "
                style={{ marginRight: "10px", fontSize: 15 }}
              >
                <div className=" cwe py-1 px-4 ">
                  The terms and the conditions provided in the following headings shall pertain
                  to the repair of your laptops, tablets and mobile phones and to use this website you agree to be bound
                   by the terms and conditions stated below. If you will not agree to these terms, please
                   restrain yourself from using this website noting that the words "we", "us", "our" refers to Technicon Ng.
                </div>
              </div>
            </div>
          </div>
        </div >





        <div className="faq_header white pt-3    z-depth-0"
          style={{ background: "#F5F5F5" }}
        >
          <div className="row mx-lg-5 w-100 ">
            <div className="faq_left col-md-7  py-2  specfaq">
              <div className="  pb-2 piew mx-4 mt-3 mb-2"
                style={{ fontSize: 24 }}
              >
                REPAIR TERMS
              </div>

            </div>
          </div>
        </div >


        <div className="faq_header white pt-3 jumbotron 3ontainer-fluid mb-0 z-depth-0"
          style={{ background: "#F5F5F5" }}
        >
          <div className="row mx-lg-5 w-100">
            <div className="faq_left col-md-8 py-2 border-bottom  specfaq">
              <div className="flex pointer"
                onClick={this.faq1}
              >
                <div className="  mr-2 mb-1 font-weight-bold">1.</div>
                <div className="faqui">In the course of repairing or in a bid to repair these devices, they may fail to power on under certain circumstances</div>
              </div>

            </div>
            <div className="faq_left col-md-8 py-2 border-bottom  specfaq">
              <div className="flex pointer"
                onClick={this.faq1}
              >
                <div className="  mr-2 mb-1 font-weight-bold">2.</div>
                <div className="faqui">We will not be held accountable for data loss from these devices</div>
              </div>
            </div>
            <div className="faq_left col-md-8 py-2 border-bottom  specfaq">
              <div className="flex pointer"
                onClick={this.faq1}
              >
                <div className="  mr-2 mb-1 font-weight-bold">3.</div>
                <div className="faqui">Repair attempts are not refundable</div>
              </div>
            </div>
            <div className="faq_left col-md-8 py-2 border-bottom  specfaq">
              <div className="flex pointer"
                onClick={this.faq1}
              >
                <div className="  mr-2 mb-1 font-weight-bold">4.</div>
                <div className="faqui">Damages due to liquid spillage or other problems associated with the devices caused by owners will not be covered by warranty.</div>
              </div>
            </div>
            <div className="faq_left col-md-8 py-2 border-bottom  specfaq">
              <div className="flex pointer"
                onClick={this.faq1}
              >
                <div className="  mr-2 mb-1 font-weight-bold">5.</div>
                <div className="faqui">A proof of ownership of the device must be offered before the device’s security system can be disabled.</div>
              </div>
            </div>
            <div className="faq_left col-md-8 py-2 border-bottom  specfaq">
              <div className="flex pointer"
                onClick={this.faq1}
              >
                <div className="  mr-2 mb-1 font-weight-bold">6.</div>
                <div className="faqui">In view of customer satisfaction in mind, a well-articulated description of device’s fault must be stated when rendering complaints in the website’s fault description space.</div>
              </div>
            </div>
            <div className="faq_left col-md-8 py-2 border-bottom  specfaq">
              <div className="flex pointer"
                onClick={this.faq1}
              >
                <div className="  mr-2 mb-1 font-weight-bold">7.</div>
                <div className="faqui">Warranty only applies if phone parts are supplied by us.</div>
              </div>
            </div>
          </div>
        </div>


        <div className="faq_header white pt-3 mt-0   z-depth-0"
          style={{ background: "#F5F5F5" }}
        >
          <div className="row mx-lg-5 w-100 ">
            <div className="faq_left col-md-7  py-2  specfaq">
              <div className="  pb-2 piew mx-4  mb-2"
                style={{ fontSize: 24 }}
              >
                ACCOUNT CREATION
              </div>
              <div className="body    pb-2  "
                style={{ marginRight: "10px", fontSize: 15 }}
              >
                <div className=" cwe py-1 px-4 ">
                  For the sake of accessing specified services on this website you may
                   be required to create an account with a unique username and password
                </div>
              </div>
            </div>
          </div>
        </div >
        <div className="faq_header white pt-3 mt-0   z-depth-0"
          style={{ background: "#F5F5F5" }}
        >
          <div className="row mx-lg-5 w-100 ">
            <div className="faq_left col-md-7  py-2  specfaq">
              <div className="  pb-2 piew mx-4  mb-2"
                style={{ fontSize: 24 }}
              >
                YOUR DUTY
              </div>
              <div className="body    pb-2  "
                style={{ marginRight: "10px", fontSize: 15 }}
              >
                <div className=" cwe py-1 px-4 ">
                  You agree that you must not use this website for prohibited and illegal activities.
                   You also agree that all information supplied on this website are true, accurate,
                    consistent and complete. If you provide any inaccurate or false information.
                    A breech of violation of any of these terms will imply that  you shall be denied
                     access to this website now and in the future. You may choose to terminate your use
                      of our services and consequently absolving the implications of the terms and conditions
                </div>
              </div>
            </div>
          </div>
        </div >
        <div className="faq_header white pt-3 mt-0   z-depth-0"
          style={{ background: "#F5F5F5" }}
        >
          <div className="row mx-lg-5 w-100 ">
            <div className="faq_left col-md-7  py-2  specfaq">
              <div className="  pb-2 piew mx-4  mb-2"
                style={{ fontSize: 24 }}
              >
                SITE MODIFICATION
              </div>
              <div className="body    pb-2  "
                style={{ marginRight: "10px", fontSize: 15 }}
              >
                <div className=" cwe py-1 px-4 ">
                  Technicon retains the right to modify and update contents of this website without your notice.
                   You are required to agree to the updated terms in this website. We also retain the right
                    to prohibit anyone from using our services at any time.
                </div>
              </div>
            </div>
          </div>
        </div >
        <div className="faq_header white pt-3 mt-0   z-depth-0"
          style={{ background: "#F5F5F5" }}
        >
          <div className="row mx-lg-5 w-100 ">
            <div className="faq_left col-md-7  py-2  specfaq">
              <div className="  pb-2 piew mx-4  mb-2"
                style={{ fontSize: 24 }}
              >
                LINKS TO THIRD PARTY SITES
              </div>
              <div className="body    pb-2  "
                style={{ marginRight: "10px", fontSize: 15 }}
              >
                <div className=" cwe py-1 px-4 ">
                  www.technicon.ng contains link to other website which are not in control of technicon,
                   in other words we are not responsible for any content or user experience you might
                    encounter upon visit to these sites Certain services made available through
                     www.technicon.ng  are delivered by third party sites therefore, by using these services,
                      you agree that technicon may share your information with this third party with whom
                       contractual relationship exist to provide the required functionality or service
                        on behalf of technicon’s client.
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    )
  }
}


export { Legal }