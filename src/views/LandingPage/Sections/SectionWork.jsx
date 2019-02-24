import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.jsx";

class SectionWork extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={8} md={8}>
              <h2 className={classes.title}>Who We Do it For</h2>
              <h5 className={classes.description} >
                It’s lovely you’re reading up on us, but really, the focus should be on those we are supporting. The political situation in Central American countries like Honduras and El Salvador is such that many find themselves in impossibly violent and intolerable situations.
                Many have survived torture, murder attempts, kidnappings and rape and fear for the well-being of their children.
              </h5>
              <br />
              <h5 className={classes.description}>

                Our country has a long-standing tradition of welcoming immigrants fleeing from such conditions and have set forth a number of conditions asylums seekers must respect.
                The people we are serving have legally applied for asylum and have been released by U.S. authorities to wait for their asylum hearings at courts across the country.
                Once released from detention centers, McAllen being the largest, most of these people have only the clothes on their backs and are in desperate need of hygiene items, clothing, food and a warm welcome to restore dignity and hope.
              </h5>
               <br />
               <h5 className={classes.description}>
                We are supported by a large and dedicated network of friends and associates who ALWAYS jump on board, who manage to maximize our efforts and for whom we are so grateful.
              </h5>
            </GridItem>
          </GridContainer>
        </div>
    );
  }
}

export default withStyles(workStyle)(SectionWork);
