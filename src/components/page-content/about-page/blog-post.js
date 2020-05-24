import React from "react";
import styled from "styled-components";
import Time from "./time";
import PropTypes from "prop-types";
export const BlogPostContent = ({
  image,
  title,
  content,
  time,
  suggestions1,
  suggestions2
}) => {
  return (
    <BlogPostWrapper className="row blog-post">
      <div className="image-container grow">
        <img src={image} alt="" />
      </div>
      <div className="col-9 text-container">
        <div className="blog-post-title">{title}</div>
        <div className="blog-post-content">{content}</div>
        <div className="blog-post-time-and-suggestion">
          <Time time={time} />
          <div className="suggestions-container">
            <span>{suggestions1}</span>
            <span>{suggestions2}</span>
          </div>
        </div>
      </div>
    </BlogPostWrapper>
  );
};

/* Type checking...*/
BlogPostContent.propTypes = {
  image: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  suggestions1: PropTypes.string.isRequired,
  suggestions2: PropTypes.string.isRequired
};

export const BlogPostWrapper = styled.div`
  padding: 1.5rem;
  .image-container {
    border: 0px solid grey;
    height: 8rem;
    cursor: pointer;
    img {
      width: 10rem;
      max-height: 100%;
      max-width: 100%;
      object-fit: cover;
      object-position: 50% 10%;
    }
  }
  .text-container {
    min-height: 8rem;
    .blog-post-title {
      height: 1.9rem;
      font-size: 1.25rem;
      font-weight: bold;
    }
    .blog-post-content {
      height: 4.5rem;
      font-size: 0.9rem;
    }
    .blog-post-time-and-suggestion {
      height: 1.6rem;

      display: flex;
      .suggestions-container {
        margin-left: 4vw;
        span {
          background-color: grey;
          color: white;
          font-size: 0.85rem;
          padding: 0.25rem;
        }
        span:nth-child(1) {
          margin-right: 1vw;
        }
      }
    }
  }
`;
