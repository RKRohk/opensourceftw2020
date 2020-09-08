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

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import FirstSection from "./Sections/FirstSection.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionCarousel from "./Sections/SectionCarousel.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="HacktoberFest 2020"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'dark'
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/Hacktober/Banner.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>OPEN SOURCE <br/>FTW 2020</h1>
              <br />
              <div className={classes.typo}>
                <h5>Hacktoberfest is a monthlong celebration of open source software run by DigitalOcean. Hacktoberfest is open to everyone in our global community! Four quality pull requests must be submitted to public GitHub repositories. You can sign up anytime between October 1 and October 31.</h5>
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