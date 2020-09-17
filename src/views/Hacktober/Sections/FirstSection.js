import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Button } from "@material-ui/core";
import { GitHub, Forum, Public } from "@material-ui/icons";
import Discord from "assets/img/Hacktober/Discord.png"

import HacktoberIcon from "assets/img/Hacktober/Icon.png"
import GithubIcon from "assets/img/Hacktober/mark.png"

import './firstsection.css'


const useStyles = makeStyles(styles);

export default function ProductSection(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk Open Source</h2>
          <h5 className={classes.description}>
          Hacktoberfest is a monthlong celebration of open source software run by DigitalOcean. Hacktoberfest is open to everyone in our global community! Four quality pull requests must be submitted to public GitHub repositories. You can sign up anytime between October 1<sup>st</sup> and October 31<sup>st</sup>.</h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Our Github Profile"
              description="Hacktoberfest is open to everyone in our global community. Check out our organisational repository on GitHub and see if can contribute to any of our open source projects."
              icon={GitHub}
              iconColor="gray"
              vertical
            />
            <Button >
              <a href="https://www.github.com/orgs/iot-lab-kiit"  rel="noopener noreferrer" target="_blank">
              <img className="iconimage" src={GithubIcon} alt=""></img>
              </a>
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Hacktoberfest"
              description="You can help drive the growth of open source and make positive contributions to an ever-growing community and become a part of it. Visit the official Hacktoberfest website for more details"
              icon={Public}
              iconColor="gray"
              vertical
            />
            <Button>
              <a href="https://hacktoberfest.digitalocean.com/"  rel="noopener noreferrer" target="_blank">
                <img className="iconimage" src={HacktoberIcon} alt=""></img>
              </a>
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Community"
              description=" Whether you’re new to development, a student, long-time contributor,you can join our Mattermost Chatroom to be up to date with upcoming events and to interact with fellow participants"
              icon={Forum}
              vertical
            />
            <Button >
              <a href="https://hacktoberfest.cloud.mattermost.com/main/channels/mlh-4302"  rel="noopener noreferrer" target="_blank">
              <img className="iconimage" src={Discord} alt=""></img>
              </a>
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
