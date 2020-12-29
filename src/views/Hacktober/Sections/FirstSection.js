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
import {
  ImportContactsOutlined,
  Filter1Outlined,
  Filter2Outlined,
} from "@material-ui/icons";

import "./firstsection.css";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>A message from the organizers</h2>
          <h5 className={classes.description}>
            Heyy People! We all are sick of sitting around doing nothing or just
            tried of plain coding. Well, time to add some seasoning on our
            social life. What if we give you a platform where you can code as
            well as make new friends! Sounds like a dream, right? Then, we are
            here to make that a reality. Register for CodeMate and get paired up
            with students just like you! Pairing will be done randomly. With
            your partners, you will be able to bond, solve questions and win
            prizes. Also, if you get lucky, you never know where this friendship
            may lead to ;)
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="About the event"
              description="IoT Lab KIIT will be hosting a coding competition in collaboration with Code Chef, a competitive programming community of programmers across the globe. The competition will consist of two rounds, The first round will be conducted on 9th of January and the second round will be on 10th January(tentatively). "
              icon={ImportContactsOutlined}
              iconColor="gray"
              vertical
            />
            <Button>
              <a
                href="https://www.github.com/orgs/iot-lab-kiit"
                rel="noopener noreferrer"
                target="_blank"
              ></a>
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="1st Round"
              description="In the first round we will be selecting top participants from the leaderboards who will proceed to the second round. This round will consist of six questions and will be conducted on the CodeChef platform."
              icon={Filter1Outlined}
              iconColor="gray"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="2nd Round"
              description="In the second round, you and your partner will work together to solve problems in order to win. Although keep in mind that only one partner can appear for the second round; the other will be helping through call or text."
              icon={Filter2Outlined}
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
