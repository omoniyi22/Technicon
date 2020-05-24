import React from "react";
import styled from "styled-components";
import moment from "moment";
import Time from "./time";
import data from "./data";
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
      <div className="col-3 image-container grow">
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

export const BlogPostWrapper = styled.div`
  padding: 1.5rem;
  .image-container {
    border: 1px solid grey;
    height: 8rem;
    cursor: pointer;
    img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
      object-position: 50% 50%;
    }
  }
  .text-container {
    // border: 1px solid gold;
    height: 8rem;
    .blog-post-title {
      height: 1.9rem;
      font-size: 1.25rem;
      font-weight: bold;
      // border: 1px solid red;
    }
    .blog-post-content {
      height: 4.5rem;
      font-size: 0.9rem;
      // border: 1px solid blue;
    }
    .blog-post-time-and-suggestion {
      height: 1.6rem;
      // border: 1px solid gold;
      display: flex;
      .suggestions-container {
        // border: 1px solid red;
        margin-left: 4vw;
        span {
          background-color: grey;
          color: white;
          font-size: 0.85rem;
          padding: 0.25rem;
        }
        span:nth-child(1) {
          margin-right: 1vw;
          // border: 1px solid blue;
        }
      }
    }
  }
`;

// export function BlogPost() {
//   return (
//     <BlogPostWrapper className="row blog-post">
//       <BlogPostContent />
//     </BlogPostWrapper>
//   );
// }
