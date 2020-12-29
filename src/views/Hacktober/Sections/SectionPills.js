import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import { Button } from "@material-ui/core";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import image from "assets/img/Hacktober/Icon.jpg";
import iot from "assets/img/Hacktober/logoiot.png";
import YoutubeIcon from "assets/img/Hacktober/youtube.png";
import CodeChef from "assets/img/Hacktober/CodeChef.png";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4} lg={6}>
            <GridContainer>
              <GridItem
                xs={6}
                sm={6}
                md={1}
                lg={6}
                style={{ alignSelf: "center", textAlign: "center" }}
              >
                <img
                  style={{ width: "70%" }}
                  src={image}
                  alt="..."
                  className={classes.imgRounded + " " + classes.image}
                />
              </GridItem>
              <GridItem
                xs={6}
                sm={6}
                md={1}
                lg={6}
                style={{ alignSelf: "center", textAlign: "center" }}
              >
                <img
                  style={{ width: "70%" }}
                  src={iot}
                  alt="..."
                  className={classes.imgRounded + " " + classes.image}
                />
              </GridItem>
              <GridItem
                xs={6}
                sm={6}
                md={1}
                lg={6}
                style={{ alignSelf: "center", textAlign: "center" }}
              >
                <img
                  style={{ width: "70%" }}
                  src={CodeChef}
                  alt="..."
                  className={classes.imgRounded + " " + classes.image}
                />
              </GridItem>
              <GridItem
                xs={6}
                sm={6}
                md={1}
                lg={6}
                style={{ alignSelf: "center", textAlign: "center" }}
              >
                <img
                  style={{ width: "70%" }}
                  src={image}
                  alt="..."
                  className={classes.imgRounded + " " + classes.image}
                />
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} lg={6}>
            <NavPills
              color="info"
              tabs={[
                {
                  tabButton: "Events",
                  tabIcon: Dashboard,
                  tabContent: (
                    <span style={{ color: "black" }}>
                      <br />
                      <p>
                        <h4>
                          Given the severe impact of the global pandemic on all
                          of our communities, we are organising a Hacktoberfest
                          meetups this year that will happen online!!
                        </h4>
                      </p>
                      <p>
                        <h4>
                          Attending an online Hacktoberfest event is a great way
                          to engage with and support the open source community
                          despite the challenges we’re all facing.
                        </h4>
                      </p>
                      <p>
                        <h4>
                          Hacktoberfest encourages participation in the open
                          source community, which grows bigger every year.
                          Complete the 2020 challenge and earn a limited edition
                          T-shirt
                        </h4>
                      </p>
                    </span>
                  ),
                },
                {
                  tabButton: "Schedule",
                  tabIcon: Schedule,
                  tabContent: (
                    <span style={{ color: "black" }}>
                      <p>
                        On Sunday 4th Oct there will be a session on how to
                        create a PR or for the new comers a good first commit.
                        So even if someone just attend the session he/she'll be
                        understand the basics of github and then can work upon
                        the goal of 4 PRs for Hacktoberfest 2020.
                      </p>
                      <p>
                        The event can be broken down into pieces as follow:
                        <ul>
                          <li>
                            <b>[4:00pm - 4:15pm]</b> &nbsp;Onboarding
                          </li>
                          <li>
                            <b>[4:15pm - 4:45pm]</b> &nbsp;What is Hacktoberfest
                            and Open Source
                          </li>
                          <li>
                            <b>[4:45pm - 4:50pm]</b> &nbsp;Message by the CEO of
                            Digital Ocean
                          </li>
                          <li>
                            <b>[4:50pm - 5:20pm]</b> &nbsp;Introduction to
                            GitHub
                          </li>
                          <li>
                            <b>[5:20pm - 6:00pm]</b> &nbsp;How to create a PR
                            (We'll setup a repo for this)
                          </li>
                          <li>
                            <b>[6:00pm - 6:30pm]</b> &nbsp;Doubts and Community
                            Bonding
                          </li>
                        </ul>
                      </p>
                      <p>
                        Apart from this we'll be having a telegram group for
                        people to join and discuss as well as ask any doubts if
                        they are stuck at any point.
                      </p>
                    </span>
                  ),
                },
                {
                  tabButton: "Links",
                  tabIcon: List,
                  tabContent: (
                    <span style={{ color: "black" }}>
                      <p>
                        <h4>
                          Links to the online events will be shared soon for
                          youtube live.
                          <br />
                          <Button>
                            <a href="https://www.youtube.com/channel/UCNx77b1SpBySTzsQtfm9N9g">
                              <img
                                className="iconimage"
                                src={YoutubeIcon}
                                alt=""
                              ></img>
                            </a>
                          </Button>
                        </h4>
                      </p>
                      <br />
                    </span>
                  ),
                },
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
