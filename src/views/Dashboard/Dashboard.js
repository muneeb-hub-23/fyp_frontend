import React from "react";
import ChartistGraph from "react-chartist";
import Chart from "chart.js";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { apiaddress } from "auth/apiaddress";
import { postData } from "auth/datapost";
const useStyles = makeStyles(styles);



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
      const response0 = await postData(apiaddress+'/today-ict-strength', {hello:'true'});
      setTStrength(response0)
      

      const response1 = await postData(apiaddress+'/today-ict-present', {hello:'true'});
      setPresent(response1)

      const response2 = await postData(apiaddress+'/today-ict-absent', {hello:'true'});
      setAbsent(response2)

      const response3 = await postData(apiaddress+'/today-ict-leave', {hello:'true'});
      setLeave(response3)

      const response4 = await postData(apiaddress+'/today-ict-lates', {hello:'true'});
      setlates(response4)

      const response5 = await postData(apiaddress+'/dashboard-charts', {hello:'true'});
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
setTimeout(() => {
const ctx1 = document.getElementById('myChart1').getContext('2d');
const ctx2 = document.getElementById('myChart2').getContext('2d');
const ctx3 = document.getElementById('myChart3').getContext('2d');
const ctx4 = document.getElementById('myChart4').getContext('2d');
const ctx5 = document.getElementById('myChart5').getContext('2d');
const ctx6 = document.getElementById('myChart6').getContext('2d');

var myChart1 = new Chart(ctx1, {
  type: 'bar',
  data: {
      labels: ["Strength","Present","Absent","Leave","Late"],
      datasets: [{
          label: '1st-Year-A',
          data: data[0],
          backgroundColor: [
              '#ec407a',
              '#00a40e',
              'red',
              '#00acc1',
              'orange'
          ],
          borderColor: [
            '#ec407a',
            '#00a40e',
            'red',
            '#00acc1',
            'orange'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});
var myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
      labels: ["Strength","Present","Absent","Leave","Late"],
      datasets: [{
          label: '2nd-Year-A',
          data: data[1],
          backgroundColor: [
              '#ec407a',
              '#00a40e',
              'red',
              '#00acc1',
              'orange'
          ],
          borderColor: [
            '#ec407a',
            '#00a40e',
            'red',
            '#00acc1',
            'orange'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});
var myChart3 = new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: ["Strength","Present","Absent","Leave","Late"],
      datasets: [{
          label: '3rd-Year-A',
          data: data[2],
          backgroundColor: [
              '#ec407a',
              '#00a40e',
              'red',
              '#00acc1',
              'orange'
          ],
          borderColor: [
            '#ec407a',
            '#00a40e',
            'red',
            '#00acc1',
            'orange'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});
var myChart4 = new Chart(ctx4, {
  type: 'bar',
  data: {
      labels: ["Strength","Present","Absent","Leave","Late"],
      datasets: [{
          label: '1st-Year-B',
          data: data[3],
          backgroundColor: [
              '#ec407a',
              '#00a40e',
              'red',
              '#00acc1',
              'orange'
          ],
          borderColor: [
            '#ec407a',
            '#00a40e',
            'red',
            '#00acc1',
            'orange'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});
var myChart5 = new Chart(ctx5, {
  type: 'bar',
  data: {
      labels: ["Strength","Present","Absent","Leave","Late"],
      datasets: [{
          label: '2nd-Year-B',
          data: data[4],
          backgroundColor: [
              '#ec407a',
              '#00a40e',
              'red',
              '#00acc1',
              'orange'
          ],
          borderColor: [
            '#ec407a',
            '#00a40e',
            'red',
            '#00acc1',
            'orange'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});
var myChart6 = new Chart(ctx6, {
  type: 'bar',
  data: {
      labels: ["Strength","Present","Absent","Leave","Late"],
      datasets: [{
          label: '3rd-Year-B',
          data: data[5],
          backgroundColor: [
              '#ec407a',
              '#00a40e',
              'red',
              '#00acc1',
              'orange'
          ],
          borderColor: [
            '#ec407a',
            '#00a40e',
            'red',
            '#00acc1',
            'orange'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});

}, 200);
// function toggleFullScreen() {
//   if (!document.fullscreenElement) {
//     document.documentElement.requestFullscreen();
//   } else {
//     if (document.exitFullscreen) {
//       document.exitFullscreen();
//     }
//   }
// }


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
            <CardHeader>
            <canvas id="myChart1"/>
              {/* <h4 className={classes.cardTitle}>First Year A</h4> */}

            </CardHeader>


          </Card>
          </Link>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={4}>
        <Link to={'/admin/todaydetail/2nd-year/a'}>
          <Card chart>
            <CardHeader>
            <canvas id="myChart2"/>
            {/* <h4 className={classes.cardTitle}>Second Year A</h4> */}
            </CardHeader>

          </Card>
          </Link>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
        <Link to={'/admin/todaydetail/3rd-year/a'}>
          <Card chart>
            <CardHeader>
            <canvas id="myChart3"/>
            {/* <h4 className={classes.cardTitle}>Third Year A</h4> */}
            </CardHeader>

          </Card>
          </Link>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
        <Link to={'/admin/todaydetail/1st-year/b'}>
          <Card chart>
            <CardHeader>
            <canvas id="myChart4"/>
            {/* <h4 className={classes.cardTitle}>First Year B</h4> */}
            </CardHeader>
          </Card>
          </Link>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
        <Link to={'/admin/todaydetail/2nd-year/b'}>
          <Card chart>
            <CardHeader>
            <canvas id="myChart5"/>
            {/* <h4 className={classes.cardTitle}>Second Year B</h4> */}
            </CardHeader>
          </Card>
          </Link>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
        <Link to={'/admin/todaydetail/3rd-year/b'}>
          <Card chart>
            <CardHeader>
            <canvas id="myChart6"/>
            {/* <h4 className={classes.cardTitle}>Third Year B</h4> */}
            </CardHeader>
          </Card>
          </Link>
        </GridItem>

      </GridContainer>

    </div>
  );
}