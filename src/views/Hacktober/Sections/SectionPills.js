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
          <GridItem xs={10} sm={2} md={8} lg={6}>
            <GridContainer>
              <GridItem xs={10} sm={2} md={8} lg={6}>
                <img
                  style={{ width: '80%' }}
                  src={image}
                  alt="..."
                  className={classes.imgRounded + " " + classes.image}
                />
              </GridItem>
              <GridItem xs={10} sm={2} md={8} lg={6}>
                <img
                  style={{ width: '80%' }}
                  src={iot}
                  alt="..."
                  className={classes.imgRounded + " " + classes.image}
                />
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} lg={6}>
            <NavPills
              color="rose"
              tabs={[
                {
                  tabButton: "Dashboard",
                  tabIcon: Dashboard,
                  tabContent: (
                    <span style={{ color: "black" }}>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                        </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively
                        administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after
                        installed base benefits.
                        </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively
                        administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after
                        installed base benefits.
                        </p>
                    </span>
                  )
                },
                {
                  tabButton: "Schedule",
                  tabIcon: Schedule,
                  tabContent: (
                    <span style={{ color: "black" }}>
                      <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely
                        deliverables for real-time schemas.
                        </p>
                      <br />
                      <p>
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions. Dramatically visualize
                        customer directed convergence without revolutionary
                        ROI. Collaboratively administrate empowered markets
                        via plug-and-play networks. Dynamically procrastinate
                        B2C users after installed base benefits.
                        </p>
                    </span>
                  )
                },
                {
                  tabButton: "Tasks",
                  tabIcon: List,
                  tabContent: (
                    <span style={{ color: "black" }}>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                        </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively
                        administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after
                        installed base benefits.
                        </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively
                        administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after
                        installed base benefits.
                        </p>
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
