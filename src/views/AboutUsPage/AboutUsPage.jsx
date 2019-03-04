import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionDescription from "views/AboutUsPage/Sections/SectionDescription.jsx";
import SectionTeam from "views/AboutUsPage/Sections/SectionTeam.jsx";
import SectionContact from "views/AboutUsPage/Sections/SectionContact.jsx";
import backgroundImage from "assets/img/bg9.jpg";
import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.jsx";

class AboutUsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          brand="Rio Valley Relief Project"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 300,
            color: "rose"
          }}
        />
        <Parallax image={backgroundImage} filter="dark" small>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <h1 className={classes.title}>About Us</h1>
                <h4>
                  Meet the amazing team behind this project and find out more
                  about how we work.
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionDescription />
            <SectionTeam />
            <SectionContact />
          </div>
        </div>
        <Footer
            content={
              <div>
                <div className={classes.left}>
                  <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                      <a
                          href="/"
                          className={classes.block}
                      >
                        RVRP
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                          href="https://www.creative-tim.com/presentation"
                          className={classes.block}
                      >
                        About us
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                          href="//blog.creative-tim.com/"
                          className={classes.block}
                      >
                        Newsroom
                      </a>
                    </ListItem>
                  </List>
                </div>
                <div className={classes.right}>
                  &copy; {1900 + new Date().getYear()} , made with{" "}
                  <Favorite className={classes.icon} /> by{" "}
                  <a href="/">RVRP</a> for a
                  better web.
                </div>
              </div>
            }
        />
      </div>
    );
  }
}

export default withStyles(aboutUsStyle)(AboutUsPage);
