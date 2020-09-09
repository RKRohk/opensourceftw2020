import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Button, SvgIcon, Icon } from "@material-ui/core";
import { GitHub, Forum, Public } from "@material-ui/icons";

import Discord from "assets/img/Hacktober/Discord.png"

import HacktoberIcon from "assets/img/Hacktober/Icon.png"

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
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Our Github Profile"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={GitHub}
              iconColor="gray"
              vertical
            />
            <Button startIcon={<GitHub></GitHub>}>
              <a href="https://www.github.com/orgs/iot-lab-kiit">
              Github
              </a>
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Hacktoberfest"
              description="Visit the official Hacktoberfest website for more details"
              icon={Public}
              iconColor="rose"
              vertical
            />
            <Button>
              <a href="https://hacktoberfest.digitalocean.com/">
                <img className="iconimage" src={HacktoberIcon}></img>
              </a>
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Community"
              description="Join our Discord Chatroom to be up to date with upcoming events and to interact with fellow participants"
              icon={Forum}
              vertical
            />
            <Button >
              <a href="https://www.discord.com">
              <img className="iconimage" src={Discord}></img>
              </a>
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
