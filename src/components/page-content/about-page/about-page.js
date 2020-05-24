import React from "react";
import styled from "styled-components";
import { Progress } from "../progress";
import { BlogPost, BlogPostContent } from "./blog-post";
import TechniconAboutImage from "../../../assets/suited-profile.jpg";
import Data from "./data";

const AboutPageContent = () => {
  return (
    <>
      <div className="row about-technicon-container">
        <div className="techicon-about-image col-3 offset-2">
          <img src={TechniconAboutImage} />
        </div>
        <div className="about-technicon col-6">
          <h1>About Technicon</h1>
          <p>
            Lorem Ipsum theneion sfoiwfbejf fnwufeufnwe fbuwefenfwjefn
            ofwuefbnwufnjenfonwefion nowefnownfe feiofnuwguqnfnqfiofjebfyie
            qnfjnufqeufqeofnejfneo fjfjefq fjoqfnoqfoqe foq fioq fio fofoenfo
            efio wefiowehiofhweo ifweio fhiowe fhiowe hfweio fhweio hfioew
            hfioh.
          </p>
        </div>
      </div>

      <div className="blog row">
        <div className="col-9 offset-1 title">
          <div>
            <h1>Blog</h1>
          </div>
          <div>
            <Progress />
          </div>
        </div>

        {Data.map(data => {
          return (
            <div className="col-9 offset-1 post" key={data.id}>
              <BlogPostContent
                time={data.updated_at}
                image={data.image}
                title={data.topic}
                content={data.post_content}
                suggestions1={data.suggestion1}
                suggestions2={data.suggestion2}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
const AboutPageWrapper = styled.div`
  width: 100%;

  height: inherit;
  .about-technicon-container {
    margin-top: 5%;
    height: 16rem;
    .techicon-about-image {
      padding: 0;
      height: 16rem;
      img {
        width: 21.65rem;
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
        object-position: 50% 10%;
      }
    }
    .about-technicon {
      padding-left: 5%;
      padding-top: 4.5%;

      h1 {
        font-size: 2.3rem;
        font-weight: bold;
        margin-bottom: 2rem;
      }
      p {
        font-size: 1.1rem;
      }
    }
  }
  .blog {
    margin: 7rem 0 0 0;
    height: inherit;
    .title {
      height: inherit;

      margin: auto;
      padding: 0;
      margin-bottom: 1rem;
      div h1 {
        font-size: 2.8rem;
        font-weight: bold;
        margin-bottom: 1rem;
        padding-left: 1rem;
      }
      .my-progress {
        height: 0.15rem;
        width: 40%;
        background-color: lightgrey;
      }
    }
    .post {
      height: inherit;
      border: 2px solid grey;
      margin: auto;
      margin-bottom: 2rem;
    }
  }
`;

export function AboutPage() {
  return (
    <AboutPageWrapper>
      <AboutPageContent />
    </AboutPageWrapper>
  );
}
