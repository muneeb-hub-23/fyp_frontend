import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import axios from "axios";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const useStyles = makeStyles(styles);

async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    // console.log('Response:', responseData);
    return responseData;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export default function Dashboard() {
  const classes = useStyles();
  const [tstrength,setTStrength] = React.useState({strength:0})
  const [tpresent,setPresent] = React.useState({present:0})
  const [tabsent,setAbsent] = React.useState({absent:0})
  const [tleave,setLeave] = React.useState({leaves:0})
  const[lates,setlates] = React.useState({lates:0})
  const[data,setData] = React.useState([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]])


  const ApiCaller = async ()=>{
    try{
      const response0 = await postData('http://localhost:80/today-ict-strength', {hello:'true'});
      setTStrength(response0)
      

      const response1 = await postData('http://localhost:80/today-ict-present', {hello:'true'});
      setPresent(response1)

      const response2 = await postData('http://localhost:80/today-ict-absent', {hello:'true'});
      setAbsent(response2)

      const response3 = await postData('http://localhost:80/today-ict-leave', {hello:'true'});
      setLeave(response3)

      const response4 = await postData('http://localhost:80/today-ict-lates', {hello:'true'});
      setlates(response4)

      const response5 = await postData('http://localhost:80/dashboard-charts', {hello:'true'});
      setData(response5)


      return
    }catch (err){
      console.log(err)
    }

  }
  React.useEffect(() => {
    ApiCaller();
  }, []);
const emailsSubscriptionChart = {

  
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * 80,
            dur: 500,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};
const firsyeara = {
  data: {labels: ["Strength","Present","Absent","Leave","Late"],series: [data[0]]}
}
const firsyearb = {
  data: {labels: ["Strength","Present","Absent","Leave","Late"],series: [data[1]]}
}
const secondyeara = {
  data: {labels: ["Strength","Present","Absent","Leave","Late"],series: [data[2]]}
}
const secondyearb = {
  data: {labels: ["Strength","Present","Absent","Leave","Late"],series: [data[3]]}
}
const thirdyeara = {
  data: {labels: ["Strength","Present","Absent","Leave","Late"],series: [data[4]]}
}
const thirdyearb = {
  data: {labels: ["Strength","Present","Absent","Leave","Late"],series: [data[5]]}
}


  return (
    <div>
      <GridContainer justify="center" alignItems="center" spacing={2}>
        <GridItem xs={12} sm={12} md={2}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="rose">
              <h2 style={{color:'white',minWidth:'50px'}}>
                {tstrength.strength}
              </h2>
              </CardIcon>

            </CardHeader>
            <CardFooter stats>
            <p className={classes.cardCategory}>Total ICT Strength</p>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="success">
              <h2 style={{color:'white',minWidth:'50px'}}>
                {tpresent.present}
              </h2>
              </CardIcon>

              
            </CardHeader>
            <CardFooter stats>
            <p className={classes.cardCategory}>Total ICT Present</p>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="danger">
              <h2 style={{color:'white',minWidth:'50px'}}>
                {tabsent.absent}
              </h2>
              </CardIcon>

              
            </CardHeader>
            <CardFooter stats>
            <p className={classes.cardCategory}>Total ICT Absent</p>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="info">
              <h2 style={{color:'white',minWidth:'50px'}}>
                {tleave.leaves}
              </h2>
              </CardIcon>

              
            </CardHeader>
            <CardFooter stats>
            <p className={classes.cardCategory}>Total ICT Leave</p>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={2}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
              <h2 style={{color:'white',minWidth:'50px'}}>
                {lates.lates}
              </h2>
              </CardIcon>

              
            </CardHeader>
            <CardFooter stats>
            <p className={classes.cardCategory}>Total ICT Late</p>
            </CardFooter>
          </Card>
        </GridItem>

      </GridContainer>

      <GridContainer>

        
        <GridItem xs={12} sm={12} md={4}>
        <Link to={'/admin/todaydetail/1st-year/a'}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={firsyeara.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>First Year A</h4>
            </CardBody>

          </Card>
          </Link>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={4}>
        <Link to={'/admin/todaydetail/2nd-year/a'}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={secondyeara.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Second Year A</h4>
            </CardBody>

          </Card>
          </Link>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
        <Link to={'/admin/todaydetail/3rd-year/a'}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={thirdyeara.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Third Year A</h4>
            </CardBody>

          </Card>
          </Link>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
        <Link to={'/admin/todaydetail/1st-year/b'}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={firsyearb.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>First Year B</h4>

            </CardBody>

          </Card>
          </Link>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
        <Link to={'/admin/todaydetail/2nd-year/b'}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={secondyearb.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Second Year B</h4>
            </CardBody>

          </Card>
          </Link>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
        <Link to={'/admin/todaydetail/3rd-year/b'}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={thirdyearb.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Third Year B</h4>
            </CardBody>

          </Card>
          </Link>
        </GridItem>

      </GridContainer>

    </div>
  );
}