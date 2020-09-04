import React, { Component } from 'react'
import "./_blog.scss"
const picture = require('./LP.png')


class Blog extends Component {
  render() {
    return (
      <div className='time_blog p-2 p-sm-0  '>
        <div className="row border-0 m-0 p-0">
          <div className="col-12 p-2  mt-2  rounded-lg">
            <div className="pack flex  z-depth-1 "
              style={{ maxHeight: "200px", overflow: "hidden" }}
            >
              <div className="worker_pix pix my-auto w-100"
                style={{ minHeight: '139px' }}
              >
                <div className="worker_pixin   mask rgba-white-slight waves-effect waves-light"
                  style={{ backgroundImage: `url(${picture})`, minHeight: '139px' }}
                ></div>
              </div>

              <div className="content mb-auto mt-2 p-2 ">

                <div className="title mt-2 h4 border-bottom pr-2">
                  Title of the news
                </div>
                <div className="noted pr-2 ">
                  Sed ut perspiciatis unde omnis iste natus error
                   sit voluptatem
                  accusantium doloremque laudantium, totam aperiam.
                </div>
                <div className="read_more flex text-primary px-2">
                  <div className="date text-primary ">
                    <span className="fa fa-clock mr-1 text-primary" />
                    Posted On 14.09.2018
                </div>
                  <div className="ml-auto mr-1 text-primary">read more</div>  <div className="ssowp fa fa-angle-right text-primary" />
                </div>
              </div>
            </div>
          </div>


          <div className="col-12 p-2  mt-2  rounded-lg">
            <div className="pack flex  z-depth-1 "
              style={{ maxHeight: "200px", overflow: "hidden" }}
            >
              <div className="worker_pix pix my-auto w-100"
                style={{ minHeight: '139px' }}
              >
                <div className="worker_pixin   mask rgba-white-slight waves-effect waves-light"
                  style={{ backgroundImage: `url(${picture})`, minHeight: '139px' }}
                ></div>
              </div>

              <div className="content mb-auto mt-2 p-2 ">

                <div className="title mt-2 h4 border-bottom pr-2">
                  Title of the news
                </div>
                <div className="noted pr-2 ">
                  Sed ut perspiciatis unde omnis iste natus error
                   sit voluptatem
                  accusantium doloremque laudantium, totam aperiam.
                </div>
                <div className="read_more flex  px-2 text-primary">
                  <div className="date text-primary">
                    <span className="fa fa-clock text-primary font-weight-bold mr-1" />
                    Posted On 14.09.2018
                </div>
                  <div className="ml-auto mr-1 text-primary">read more</div>  <div className="ssowp text-primary fa fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="read_more flex  px-2">
          <div className="mx-auto mr-1 sont py-1 px-2 z-depth-0 text-primary small ">see More
          <div className="mx-0 sonto    z-depth-0  border rounded-pill"></div>
          </div>
        </div>
      </div>
    )
  }
}
export default Blog