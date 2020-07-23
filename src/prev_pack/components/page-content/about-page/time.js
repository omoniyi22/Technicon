import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <td className="file-time">{timeString}</td>;
};

Time.propTypes = {
  time: PropTypes.string.isRequired
};

export default Time;
