import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import bgimg from '../../assets/img/addusuers.png'
import bgimg2 from '../../assets/img/modifyusers.png'
import bgimg3 from '../../assets/img/deleteusers.jpg'
import bgimg4 from '../../assets/img/assign_classes.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);
export default function Users() {
  const classes = useStyles();
  return (
    <div>

      <GridContainer justify="center" alignItems="center" spacing={1}>
   

        <GridItem xs={12} sm={12} md={4}>
        <Link to="/admin/adduser">
          <Card chart>
            <CardHeader color="success">
              <img src={bgimg} style={{width:'100%',height:'50%'}}/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Add Users</h4>
            </CardBody>

          </Card>
          </Link>
        </GridItem>

    

        <GridItem xs={12} sm={12} md={4}>
        <Link to="/admin/modifyuser">
          <Card chart>
            <CardHeader color="warning">
            <img src={bgimg2} style={{width:'100%',height:'50%'}}/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Modify Users</h4>
            </CardBody>
          </Card>
          </Link>
        </GridItem>
     

        <GridItem xs={12} sm={12} md={4}>
        <Link to="/admin/deleteuser">

          <Card chart>
            <CardHeader color="danger">
            <img src={bgimg3} style={{width:'100%',height:'50%'}}/>

            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Delete Users</h4>
            </CardBody>
          </Card>
          </Link>

        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
        <Link to="/admin/assignclasses">

          <Card chart>
            <CardHeader color="danger">
            <img src={bgimg4} style={{width:'100%',height:'50%'}}/>

            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Assign Classes To Users</h4>
            </CardBody>
          </Card>
          </Link>

        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
        <Link to="/admin/assignblockeddate">

          <Card chart>
            <CardHeader color="info">
            <img src={bgimg4} style={{width:'100%',height:'50%'}}/>

            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Set Blocked Dates</h4>
            </CardBody>
          </Card>
          </Link>

        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
        <Link to="/admin/createsessions">

          <Card chart>
            <CardHeader color="success">
            <img src={bgimg4} style={{width:'100%',height:'50%'}}/>

            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Create Sessions</h4>
            </CardBody>
          </Card>
          </Link>

        </GridItem>


      </GridContainer>

    </div>
  );
}