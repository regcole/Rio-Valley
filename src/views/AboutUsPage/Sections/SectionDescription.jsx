import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.jsx";

function SectionDescription(props) {
  const { classes } = props;
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h5 className={classes.description}>
            RVRP was started in response to the growing need for support offered to asylum seekers crossing the border.
            We seek to help those individuals who are lawfully complying with the requirements for applying for asylum in the U.S.,
            recognizing that circumstances beyond the control of the asylum seekers lead to lengthy periods of case processing time.
            We strive to treat their fears and uncertainties with compassion.
          </h5>
          <br />
          <h5 className={classes.description}>
            We look to cooperate with other foundations and organizations to maximize our efforts
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(descriptionStyle)(SectionDescription);
