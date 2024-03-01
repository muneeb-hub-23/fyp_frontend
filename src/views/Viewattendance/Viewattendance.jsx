import React, { useEffect } from 'react';
import Chart from 'chart.js';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

function Viewattendance() {

  useEffect(() => {
    const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;

    Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
      draw: function() {
        const chart = this.chart;
        const {
          width,
          height,
          ctx,
          config
        } = chart.chart;

        const {
          datasets
        } = config.data;

        const dataset = datasets[0];
        const datasetData = dataset.data;
        const completed = datasetData[0];
        const text = `${completed}%`;
        let x, y, mid;

        originalDoughnutDraw.apply(this, arguments);

        const fontSize = (height / 80).toFixed(1);
        ctx.font = fontSize + "em Lato, sans-serif";
        ctx.textBaseline = "top";

        x = Math.round((width - ctx.measureText(text).width) / 2);
        y = (height / 2) - fontSize;
        ctx.fillStyle = "#000000"
        ctx.fillText(text, x, y);
        mid = x + ctx.measureText(text).width / 2;
      }
    });

    const createChart = (id, percent_value,color) => {
      var context = document.getElementById(id).getContext('2d');
      var chart = new Chart(context, {
        type: 'doughnut',
        data: {
          labels: [],
          datasets: [{
            label: 'First dataset',
            data: [percent_value, 100 - percent_value],
            backgroundColor: [color, '#000000']
          }]
        },
        options: {}
      });

      return chart;
    };

    const chart1 = createChart('myChart1', 70,'#00ff00');
    const chart2 = createChart('myChart2',60, '#00ffff');
    const chart3 = createChart('myChart3', 80,'#f15a24');
    const chart4 = createChart('myChart4', 60,'#ff0000');

    return () => {
      // Cleanup charts
      chart1.destroy();
      chart2.destroy();
      chart3.destroy();
      chart4.destroy();
    };
  }, []);

  return (

    <GridContainer justify="center" alignItems="center" spacing={1}>

      <GridItem xs={12} sm={6} md={2}> 
      sdf
      </GridItem>
      <GridItem xs={12} sm={6} md={6}>
      dsfs
      </GridItem>
      <GridItem xs={12} sm={6} md={2}>  
      sdfsf
      </GridItem>
      <GridItem xs={12} sm={6} md={2}> 
      sdfsddf
      </GridItem>
       
      
      <GridItem xs={6} sm={6} md={2}>  
        <div className="cover">
          <div id='ticket' className='ticketg'>
            <h3>TOTAL</h3>
            <h4>PRESENT</h4>
            <hr />
            <h2>79</h2>
          </div>
          <canvas className='doughnutchart' id="myChart1" />
        </div>
      </GridItem>

      <GridItem xs={6} sm={6} md={2}> 
        <div className="cover">
          <div id='ticket' className='ticketl'>
            <h3>TOTAL</h3>
            <h4>LEAVES</h4>
            <hr />
            <h2>79</h2>
          </div>
          <canvas className='doughnutchart' id="myChart2" />
        </div>
      </GridItem>

      <GridItem xs={6} sm={6} md={2}> 
        <div className="cover">
          <div id='ticket' className='ticketo'>
            <h3>TOTAL</h3>
            <h4>LATES</h4>
            <hr />
            <h2>79</h2>
          </div>
          <canvas className='doughnutchart' id="myChart3" />
        </div>
      </GridItem>

      <GridItem xs={6} sm={6} md={2}> 
        <div className="cover">
          <div id='ticket' className='ticketr'>
            <h3>TOTAL</h3>
            <h4>ABSENT</h4>
            <hr />
            <h2>79</h2>
          </div>
          <canvas className='doughnutchart' id="myChart4" />
        </div>
      </GridItem>

    </GridContainer>
  );
}

export default Viewattendance;
