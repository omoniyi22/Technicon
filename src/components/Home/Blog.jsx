import React, { Component } from 'react'
import "./_blog.scss"
const picture = require('./LP.png')


class Blog extends Component {
  render() {
    return (
      <div className='time_blog p-2 p-sm-4  '>
        <div className="row border-0">


          <div className="col-sm-6 p-4 rounded-lg">
            <div className="pack  z-depth-1 ">

              <div className="worker_pix pix  w-100  ">
                <div className="worker_pixin   mask rgba-white-slight waves-effect waves-light"
                  style={{ backgroundImage: `url(${picture})` }}
                ></div>
              </div>

              <div className="content p-4 ">
                <div className="date ">
                  Posted - 14.09.2018
                </div>
                <div className="title mt-2 h4 border-bottom pr-2">
                  Title of the news
                </div>
                <div className="noted pr-2 ">
                  Sed ut perspiciatis unde omnis iste natus error
                   sit voluptatem
                  accusantium doloremque laudantium, totam aperiam.
                </div>
                <div className="read_more flex  px-2">
                  <div className="ml-auto mr-1 ">read more</div>  <div className="ssowp fa fa-angle-right" />
                </div>
              </div>
            </div>
          </div>


          <div className="col-sm-6 p-4 rounded-lg">
            <div className="pack  z-depth-1 ">

              <div className="worker_pix pix  w-100  ">
                <div className="worker_pixin   mask rgba-white-slight waves-effect waves-light"
                  style={{ backgroundImage: `url(${picture})` }}
                ></div>
              </div>

              <div className="content p-4 ">
                <div className="date ">
                  Posted - 14.09.2018
                </div>
                <div className="title mt-2 h4 border-bottom pr-2">
                  Title of the news
                </div>
                <div className="noted pr-2 ">
                  Sed ut perspiciatis unde omnis iste natus error
                   sit voluptatem
                  accusantium doloremque laudantium, totam aperiam.
                </div>
                <div className="read_more flex  px-2">
                  <div className="ml-auto mr-1 ">read more</div>  <div className="ssowp fa fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="read_more flex  px-2">
          <div className="mx-auto mr-1 seew btn btn-sm py-1 px-2 z-depth-0 border">see all</div>  
        </div>
      </div>
    )
  }
}
export default Blog