import React from "react";
import slackIcon from "./icons/slack_icon.png";
import githubIcon from "./icons/github-logo.png";

function Icons() {
  return (
    <div className="icons">
      <img src={slackIcon} id="slack__icon" alt="slack icon" />
      <img src={githubIcon} id="github__icon" alt="git icon" />
    </div>
  );
}

export default Icons;
