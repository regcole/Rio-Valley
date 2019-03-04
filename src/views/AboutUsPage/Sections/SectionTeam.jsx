import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Muted from "components/Typography/Muted.jsx";
import Button from "components/CustomButtons/Button.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import teamStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.jsx";

import FaceBabata from "assets/img/faces/babata.jpg";
import FaceCas from "assets/img/faces/cassieStewart.jpg";
import FaceCrys from "assets/img/faces/crystal.jpg";
import cardProfile1Square from "assets/img/faces/card-profile1-square.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";

function SectionTeam(props) {
    const {classes} = props;
    return (
        <div className={classes.team}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem
                        xs={12}
                        sm={8}
                        md={8}
                        className={`${classes.mlAuto} ${classes.mrAuto} ${
                            classes.textCenter
                            }`}
                    >
                        <h2 className={classes.title}>The  Team </h2>
                        <h5 className={classes.description}>
                            We are a small group working to do GREAT things with your help
                        </h5>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                        <Card profile plain className={classes.card3}>
                            <GridContainer>
                                <GridItem xs={12} sm={5} md={5}>
                                    <CardHeader image plain>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img src={FaceCas} alt="..." />
                                        </a>
                                        <div
                                            className={classes.coloredShadow}
                                            style={{
                                                backgroundImage: `url(${cardProfile1Square})`,
                                                opacity: "1"
                                            }}
                                        />
                                    </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={7} md={7}>
                                    <CardBody plain>
                                        <h4 className={classes.cardTitle}>Cassie Stewart</h4>
                                        <h6 className={classes.cardCategory}>
                                            Licensed social worker and mother of 4
                                        </h6>
                                        <p className={classes.description}>
                                        She is passionate about the social welfare of all people including immigrants and
                                        refugees and has actively helped her husband, a dallas immigration attorney, advocate
                                        for immigrant rights.
                                        She believes that all people should be treated with dignity and fairness.
                                        </p>
                                    </CardBody>
                                    <CardFooter profile plain>
                                        <Button justIcon simple color="twitter">
                                            <i className="fab fa-twitter" />
                                        </Button>
                                        <Button justIcon simple color="facebook">
                                            <i className="fab fa-facebook-square" />
                                        </Button>
                                        <Button justIcon simple color="google">
                                            <i className="fab fa-google" />
                                        </Button>
                                    </CardFooter>
                                </GridItem>
                            </GridContainer>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                        <Card profile plain className={classes.card3}>
                            <GridContainer>
                                <GridItem xs={12} sm={5} md={5}>
                                    <CardHeader image plain>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img src={FaceCrys} alt="..." />
                                        </a>
                                        <div
                                            className={classes.coloredShadow}
                                            style={{
                                                backgroundImage: `url(${cardProfile6Square})`,
                                                opacity: "1"
                                            }}
                                        />
                                    </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={7} md={7}>
                                    <CardBody plain>
                                        <h4 className={classes.cardTitle}>Crystal Stewart</h4>
                                        <Muted>
                                            <h6 className={classes.cardCategory}>
                                                Spirit Animal
                                            </h6>
                                        </Muted>
                                        <p className={classes.description}>
                                            Crystal Ann Stewart grew up in a multicultural home and loves learning about how people
                                            all over the world live. She has participated in movements advocating Human Rights and
                                            has done volunteer work for many different organizations in Europe and now in Texas. Her
                                            latest passion is to aid in refugees relief in any way possible. She currently teaches
                                            weekly English classes to refugees in Austin, Texas. As a UT Austin graduate, she is
                                            happy to be back in Austin after spending the last 20 years moving more than 18 times
                                            with her husband and 5 kids. She could probably qualify as an official international
                                            nomad.
                                        </p>
                                    </CardBody>
                                    <CardFooter profile plain>
                                        <Button justIcon simple color="linkedin">
                                            <i className="fab fa-linkedin-in" />
                                        </Button>
                                        <Button justIcon simple color="facebook">
                                            <i className="fab fa-facebook-square" />
                                        </Button>
                                        <Button justIcon simple color="dribbble">
                                            <i className="fab fa-dribbble" />
                                        </Button>
                                        <Button justIcon simple color="google">
                                            <i className="fab fa-google" />
                                        </Button>
                                    </CardFooter>
                                </GridItem>
                            </GridContainer>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                        <Card profile plain className={classes.card3}>
                            <GridContainer>
                                <GridItem xs={12} sm={5} md={5}>
                                    <CardHeader image plain>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img src={cardProfile4Square} alt="..." />
                                        </a>
                                        <div
                                            className={classes.coloredShadow}
                                            style={{
                                                backgroundImage: `url(${cardProfile4Square})`,
                                                opacity: "1"
                                            }}
                                        />
                                    </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={7} md={7}>
                                    <CardBody plain>
                                        <h4 className={classes.cardTitle}>Jennifer Gauntt</h4>
                                        <Muted>
                                            <h6 className={classes.cardCategory}>Heart and Soul</h6>
                                        </Muted>
                                        <p className={classes.description}>
                                            has always felt a pull toward relief efforts. Over the course of her life, she has
                                            become involved with foundations in the U.S.,
                                            South America and India and is eager to provide opportunities for her children to work
                                            alongside her.
                                            She lives in Austin with her husband and four children and spends an awful lot of time
                                            driving, cleaning and asking about homework assignments.
                                        </p>
                                    </CardBody>
                                    <CardFooter profile plain>
                                        <Button justIcon simple color="youtube">
                                            <i className="fab fa-youtube" />
                                        </Button>
                                        <Button justIcon simple color="twitter">
                                            <i className="fab fa-twitter" />
                                        </Button>
                                        <Button justIcon simple color="instagram">
                                            <i className="fab fa-instagram" />
                                        </Button>
                                    </CardFooter>
                                </GridItem>
                            </GridContainer>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                        <Card profile plain className={classes.card3}>
                            <GridContainer>
                                <GridItem xs={12} sm={5} md={5}>
                                    <CardHeader image plain>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img src={FaceBabata} alt="..." />
                                        </a>
                                        <div
                                            className={classes.coloredShadow}
                                            style={{
                                                backgroundImage: `url(${cardProfile2Square})`,
                                                opacity: "1"
                                            }}
                                        />
                                    </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={7} md={7}>
                                    <CardBody plain>
                                        <h4 className={classes.cardTitle}>Babata Sonnenberg</h4>
                                        <Muted>
                                            <h6 className={classes.cardCategory}>LBJ Super Alum HACKER</h6>
                                        </Muted>
                                        <p className={classes.description}>
                                            I love you like Kanye loves Kanye. Don't be scared of
                                            the truth.
                                        </p>
                                    </CardBody>
                                    <CardFooter profile plain>
                                        <Button justIcon simple color="linkedin">
                                            <i className="fab fa-linkedin-in" />
                                        </Button>
                                        <Button justIcon simple color="facebook">
                                            <i className="fab fa-facebook-square" />
                                        </Button>
                                        <Button justIcon simple color="google">
                                            <i className="fab fa-google" />
                                        </Button>
                                    </CardFooter>
                                </GridItem>
                            </GridContainer>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}

export default withStyles(teamStyle)(SectionTeam);
