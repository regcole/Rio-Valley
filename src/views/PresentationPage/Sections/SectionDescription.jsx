import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

// @material-ui icons
import Apps from "@material-ui/icons/Apps";
import ViewDay from "@material-ui/icons/ViewDay";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.jsx";
import Instruction from "components/Instruction/Instruction.jsx";
import Money from "@material-ui/icons/AttachMoneyTwoTone";
import image from "assets/img/dg1.jpg";
import imageDesk from "assets/img/office2.jpg";
import  imageComputer from "assets/img/bg11.jpg"
import amazonImage from "assets/img/amazon.png";
import placeholder from "assets/img/placeholder.jpg";

class SectionDescription extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.section}>
                <div className={classes.features}>
                    <GridContainer justify="center">
                        <GridItem md={12} sm={12}>
                            <Instruction
                                title="1. Join us at the border for relief work"
                                text={
                                    <span>
                                        Come meet the people. Get your hands dirty. Bring your children, as long as they know how to work.
                                </span>
                                }
                                image={placeholder}
                            />
                        </GridItem>
                    </GridContainer>
                    <div className={classes.features}>
                        <GridContainer>
                            <GridItem md={12} sm={12}>
                                <Instruction
                                    title="2. Collect items we’re currently seeking"
                                    text={
                                        <span>
                                        We work with respite centers and shelters to provide the most needed donations.
                                            Because there is rarely room to store items and because needs can be so specific, we take only what can be used right away.
                                            Please use list as a tight guide and we thank you for offering only clean, gently used or new items with no holes or stains or broken parts.

                                </span>
                                    }
                                    image={imageDesk}
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                    <div className={classes.features}>
                        <GridContainer justify="center">
                            <GridItem md={12} sm={12}>
                                <Instruction
                                    title="3. Purchase from our Amazon wishlist"
                                    text={
                                        <span>
                                        Come meet the people. Get your hands dirty. Bring your children, as long as they know how to work.
                                </span>
                                    }
                                    image={amazonImage}
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                    <div className={classes.features}>
                        <GridContainer>
                            <GridItem md={12} sm={12}>
                                <Instruction
                                    title="4. Or, donate money "
                                    text={
                                        <span>
                                       We pledge that 100% of your donation will go specifically to purchase supplies most needed for the refugees.
                                            You can also tell us exactly what to buy on your behalf if you’d like.  <br/>

That’s a promise.

                                </span>
                                    }
                                    image={placeholder}
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(descriptionStyle)(SectionDescription);
