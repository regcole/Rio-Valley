import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class SectionProduct extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}>What we Do</h2>
            <h5 className={classes.description}>
              RVRP was started in response to the growing need for support offered to asylum seekers crossing the border.
              We seek to help those individuals who are lawfully complying with the requirements for applying for asylum in the U.S., recognizing that circumstances beyond the control of the asylum seekers lead to lengthy periods of case processing time.  We strive to treat their fears and uncertainties with compassion.
              We look to cooperate with other foundations and organizations to maximize our efforts

            </h5>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(SectionProduct);
