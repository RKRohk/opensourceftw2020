import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import FirstSection from "./Sections/FirstSection.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionCarousel from "./Sections/SectionCarousel.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const blueColor = "#5EB5F7";

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="CodeMate"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "dark",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/Hacktober/Banner.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                CodeMate <br />
              </h1>
              <br />
              <div className={classes.typo}>
                <h3>
                  Life is good, <br />
                  But it can be better <br />
                  <span style={{ color: "#5EB5F7" }} >- Max Lord.</span>
                </h3>
                <h3>
                  Event hosted by - &nbsp;
                  <a
                    href="https://iotkiit.in"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ color: blueColor }}
                  >
                    <h4>IoT Lab KiiT</h4>
                  </a>
                </h3>
                <a
                  href="https://organize.mlh.io/participants/events/4302-open-source-ftw-2020"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button type="button" color="info">
                    Register Now
                  </Button>
                </a>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <FirstSection />
        </div>
        <div className={classes.container}>
          <SectionPills />
        </div>
        <SectionCarousel />
      </div>
      <Footer />
    </div> 
  );
}
