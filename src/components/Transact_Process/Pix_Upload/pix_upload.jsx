import React, { Component } from 'react'

class Pix_Upload extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="pix_upload  mx-3 mx-md-4 my-md-4 my-">
        <div className="upload_pix mx-auto py-4 w-100 border z-depth-1">
          <div className="fontas mb-4 mt-3 pb-3">upload device picture</div>
          
          <input type="file" id="file" accept="image/*" onCha 
          style={{display: "none"}}
          />
            <label for="file" type="file" >
          
          <div className="upload_container py-3 pb-md-5 pt-md-4 mx-auto my-5 px-4">
            <span className="ml-2 py-2 fa fa-cloud-upload-alt mt-2" />
            <div className="drag_in my-2 "> Drag a picture here <br /> or browse a pic to upload</div>
          </div>
          </label>
          <div className=" row  mx-auto  my-md-4 my-0 pt-4 next_one">
            <div className="name col-sm px-0 mx-0 py-3"
            style={{marginLeft:"auto"}}
            >device pix</div>
            <div className="flow  mx-0 col-sm mt-2"
              style={{ flex: 2 }}
            >
              <div className="ml-auto  font-weight-bold"
              style={{width: "fit-content", fontSize: 14}}
              >30%</div>
              <div className="progress sm-progress mt-0 p-0 mx-0 pt-1"
              style={{height: "6px"}}
              >
                <div className="progress-bar border m-0 progress-bar-stripped bg-success"
                  role="progressbar"
                // style={{width: `${percenaaa tage}%`}}
                />
                {/* {percentage}% */}
              </div>
              {/* ) */}
            </div>
            <div className="name  col-sm px-0 mx-0 py-3 mb-1">cancel</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Pix_Upload