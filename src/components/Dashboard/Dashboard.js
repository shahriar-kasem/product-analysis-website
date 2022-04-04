import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useBusinessData from '../../hooks/useBusinessData';

const Dashboard = () => {
    const [data] = useBusinessData([]);

    return (
        <div className='dashboard-container'>
            <h1>This is Dashboard. Total data: {data.length}</h1>
            <div className='rechart-container'>
                <div>
                    <h3>Month wise sell</h3>
                    <LineChart width={500} height={300} data={data}>
                        <XAxis dataKey='month'></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Line type="monotone" dataKey='sell'></Line>
                    </LineChart>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Dashboard;