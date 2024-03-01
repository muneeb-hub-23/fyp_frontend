import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import bgimg from '../../assets/img/addstudent.png'
import bgimg2 from '../../assets/img/modifystudent.png'
import bgimg3 from '../../assets/img/deletestudent.jpg'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);
export default function Students() {
  const classes = useStyles();
  return (
    <div>

      <GridContainer>
   

        <GridItem xs={12} sm={12} md={4}>
        <Link to="/admin/addnewstudent">
          <Card chart>
            <CardHeader color="success">
              <img src={bgimg} style={{width:'100%',height:'50%'}}/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Add Students</h4>
            </CardBody>

          </Card>
          </Link>
        </GridItem>

    

        <GridItem xs={12} sm={12} md={4}>
        <Link to="/admin/modifystudent">
          <Card chart>
            <CardHeader color="warning">
            <img src={bgimg2} style={{width:'100%',height:'50%'}}/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Modify Students</h4>
            </CardBody>
          </Card>
          </Link>
        </GridItem>
     

        <GridItem xs={12} sm={12} md={4}>
        <Link to="/admin/deletestudent">

          <Card chart>
            <CardHeader color="danger">
            <img src={bgimg3} style={{width:'100%',height:'50%'}}/>

            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Delete Students</h4>
            </CardBody>
          </Card>
          </Link>

        </GridItem>


      </GridContainer>

    </div>
  );
}