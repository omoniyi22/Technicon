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
              <div className="body    pb-4  "
                style={{ marginRight: "10px", fontSize: 15 }}
              >
                <div className=" py-1 px-4  py-3">
                  Advertise with www.rubberspace.space, the first cloud platform with her user base in schools. The funding recieved is used to generate more traffic(users) in essence promote all products on our advert lists.
                  An advert on out platform drives needed attention to your goods & services in a country where family assets acquisition decisions are highly influenced by women.
                  pays to take advantage ans give your brand awareness the needed boost.
                  RubberSpace is a cloud platform that allows you to store, manage and share your files. Upload your files on RubberSpace and save more than 65% of your data & storage capacity. All you have to do is upload once and you get to share the link with as many people as you want to.
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