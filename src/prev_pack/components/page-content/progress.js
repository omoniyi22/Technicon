import React from "react";
import styled from "styled-components";

export const Progress = () => {
  return (
    <>
      <ProgressWrapper className="my-progress">
        <div className="progress-bar" role="progressbar"></div>
      </ProgressWrapper>
      <style jsx>{`
        .progress-bar {
          width: 30%;
          height: inherit;
          //   border: 1px solid yellow;
          background: #2336ff;
          border-radius: 31.8584px;
        }
      `}</style>
    </>
  );
};

const ProgressWrapper = styled.div``;
