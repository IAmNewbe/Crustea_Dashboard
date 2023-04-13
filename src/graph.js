import React from "react";
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';

function LineChart({charData}){
    return <Line data={charData} options={{responsive:true}} style={{'width': '680px'}}/>
}

export default LineChart;
