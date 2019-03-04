import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// sections for this page
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.jsx";
import backgroundImage from "assets/img/bg3.jpg";
import Favorite from "@material-ui/icons/Favorite";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.jsx";

class HelpUsPage extends React.Component {
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
              links={<HeaderLinks dropdownHoverColor="info"/>}
              fixed
              color="transparent"
              changeColorOnScroll={{
                height: 400,
                color: "rose"
              }}
          />
          <Parallax
              image={backgroundImage}
              className={classes.parallax}
          >
            <div className={classes.container}>
              <GridContainer>
                <GridItem>
                  <div className={classes.brand}>
                    <h1>
                      How Can You Help?
                      <span className={classes.proBadge}>:-)</span>
                    </h1>
                    <h3 className={classes.title}>
                      There are multiple ways for you to get involved.

                    </h3>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <SectionDescription/>
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
                    <Favorite className={classes.icon}/> by{" "}
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

export default withStyles(presentationStyle)(HelpUsPage);
