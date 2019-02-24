import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import teamStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.jsx";

import FaceMarc from "assets/img/faces/marc.jpg";
import FaceChristian from "assets/img/faces/christian.jpg";
import FaceKendall from "assets/img/faces/kendall.jpg";
import FaceBabata from "assets/img/faces/babata.jpg";
import FaceCas from "assets/img/faces/cassie.jpg";
import FaceAvatar from "assets/img/faces/avatar.jpg";

function SectionTeam(props) {
  const { classes } = props;
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Meet Our Team</h2>
          <h5 className={classes.description}>
              We are a small group working to do GREAT things with your help.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src={FaceCas} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Cassandra Stewart</h4>
              <h6 className={classes.textMuted}>Licensed social worker and mother of 4</h6>
              <p className={classes.cardDescription}>
                She is passionate about the social welfare of all people including immigrants and refugees and has actively helped her husband, a dallas immigration attorney, advocate for immigrant rights.
                She believes that all people should be treated with dignity and fairness.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="facebook">
                <i className="fab fa-facebook" />
              </Button>
              <Button href="#pablo" justIcon simple color="linkedin">
                <i className="fab fa-linkedin" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceAvatar}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Crystal Stewart</h4>
              <h6 className={classes.textMuted}>Heart and Soul</h6>
              <p className={classes.cardDescription}>
                Don't be scared of the truth because we need to restart the
                human foundation. And I love you like Kanye loves Kanye.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
              <Button href="#pablo" justIcon simple color="linkedin">
                <i className="fab fa-linkedin-in" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceKendall}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Jennifer Gauntt</h4>
              <h6 className={classes.textMuted}>Spirit Animal</h6>
              <p className={classes.cardDescription}>
                has always felt a pull toward relief efforts. Over the course of her life, she has become involved with foundations in the U.S.,
                South America and India and is eager to provide opportunities for her children to work alongside her.
                She lives in Austin with her husband and four children and spends an awful lot of time driving, cleaning and asking about homework assignments.

              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="facebook">
                <i className="fab fa-facebook" />
              </Button>
              <Button href="#pablo" justIcon simple color="linkedin">
                <i className="fab fa-linkedin" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceBabata}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Babata Sonnenberg</h4>
              <h6 className={classes.textMuted}>Super LBJ Alum</h6>
              <p className={classes.cardDescription}>
                And I love you like Kanye loves Kanye. We really need to restart
                the human foundation.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(teamStyle)(SectionTeam);
