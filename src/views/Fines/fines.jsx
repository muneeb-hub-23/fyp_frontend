import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import bgimg from '../../assets/img/classes.jpeg'
import bgimg2 from '../../assets/img/departments.jpg'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { apiaddress } from "auth/apiaddress";
import { bugs, website, server } from "variables/general.js";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);
export default function Fines() {
  const classes = useStyles();
  return (
    <div>

      <GridContainer justify="center" alignItems="center" spacing={1}>
   

        <GridItem xs={12} sm={12} md={5}>
        <Link to="/admin/classfines">
          <Card chart>
            <CardHeader color="success">
              <img src={bgimg} style={{width:'100%',height:'50%'}}/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Class and Student Wise Fines</h4>
            </CardBody>

          </Card>
          </Link>
        </GridItem>

    

        <GridItem xs={12} sm={12} md={5}>
        <Link to="/admin/departmentfines">
          <Card chart>
            <CardHeader color="warning">
            <img src={bgimg2} style={{width:'100%',height:'50%'}}/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Department Fines</h4>
            </CardBody>
          </Card>
          </Link>
        </GridItem>
     



      </GridContainer>

    </div>
  );
}