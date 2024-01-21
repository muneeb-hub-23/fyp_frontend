import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
)
function LineChart(){
    const data = {
        labels: ['1','2','3'],
        datasets:[{
            label:'First-year',
            data:[70,40,60],
            backgroundColor: 'black',
            borderColor: 'black',
            pointBorderColor: 'red',
            fill:true
        },{
            label:'Second-year',
            data:[50,20,90],
            backgroundColor: 'blue',
            borderColor: 'blue',
            pointBorderColor: 'red',
            fill:true
        },{
            label:'Third-year',
            data:[70,40,80],
            backgroundColor: 'red',
            borderColor: 'red',
            pointBorderColor: 'red',
            fill:true,
            tension:0.1
        }]
    }
    const options = {
        maintainAspectRatio: false,
        plugins:{
            legend:true
        },
        scales:{
            yy:{
                min:0,
                max:100
            }
        }
    }

    return(
<div style={{height:'40vh',width:'100%'}}>
        <Line data = {data} options={options} />
        </div>
    )
}
export default LineChart;