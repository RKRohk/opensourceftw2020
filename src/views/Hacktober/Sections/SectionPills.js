import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import image from "assets/img/Hacktober/Icon.png";
import iot from "assets/img/Hacktober/logoiot.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
          <GridItem xs={6} sm={6} md={2} lg={3} style={{ alignSelf: 'center', textAlign: 'center' }}>
            <img
              style={{ width: '80%' }}
              src={image}
              alt="..."
              className={classes.imgRounded + " " + classes.image}
            />
          </GridItem>
          <GridItem xs={6} sm={6} md={2} lg={3} style={{ alignSelf: 'center', textAlign: 'center' }}>
            <img
              style={{ width: '80%' }}
              src={iot}
              alt="..."
              className={classes.imgRounded + " " + classes.image}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={8} lg={6}>
            <NavPills
              color="rose"
              tabs={[
                {
                  tabButton: "Events",
                  tabIcon: Dashboard,
                  tabContent: (
                    <span style={{ color: "black" }}>
                      <br />
                      <p>
                        <h4>Given the severe impact of the global pandemic on all of our communities, we are organising a Hacktoberfest meetups this year that will happen online!!</h4>
                      </p>
                      <p>
                        <h4>Attending an online Hacktoberfest event is a great way to engage with and support the open source community despite the challenges we’re all facing.</h4>
                      </p>
                      <p>
                        <h4>Hacktoberfest encourages participation in the open source community, which grows bigger every year. Complete the 2020 challenge and earn a limited edition T-shirt</h4>
                      </p>
                    </span>
                  )
                },
                {
                  tabButton: "Schedule",
                  tabIcon: Schedule,
                  tabContent: (
                    <span style={{ color: "black" }}>
                      <br />
                      <p>
                        <h4>Our Online event will happen on 3<sup>rd</sup> and 4<sup>th</sup> October.</h4>
                      </p>
                      <p>
                        <h4>Other event details will follow soon.</h4>
                      </p>
                      <br />
                    </span>
                  )
                },
                {
                  tabButton: "Links",
                  tabIcon: List,
                  tabContent: (
                    <span style={{ color: "black" }}>
                      <p>
                        <h4>Links to the online events will be shared soon.</h4>
                        </p>
                      <br />
                    </span>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
