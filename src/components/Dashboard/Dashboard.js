import React from 'react';
import { Area, AreaChart, Bar, BarChart, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useBusinessData from '../../hooks/useBusinessData';

const Dashboard = () => {
    const [data] = useBusinessData([]);

    return (
        <div className='dashboard-container'>
            <h1>This is Dashboard. Total data: {data.length}</h1>
            <div className='rechart-container grid grid-cols-2'>
                <div className='line-chart'>
                    <h3 className='text-center text-2xl'>Month wise sell</h3>
                    <ResponsiveContainer width="80%" height={400}>
                        <LineChart data={data} margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                            <XAxis dataKey='month'></XAxis>
                            <YAxis></YAxis>
                            <Tooltip></Tooltip>
                            <Line type="monotone" dataKey='sell'></Line>
                        </LineChart>
                    </ResponsiveContainer>

                </div>
                <div className=''>
                    <h3>Investment VS Revenue</h3>
                    <ResponsiveContainer width="80%" height={400}>
                        <AreaChart data={data} margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                            <XAxis dataKey='month'></XAxis>
                            <YAxis></YAxis>
                            <Tooltip></Tooltip>
                            <Area dataKey='investment' fill="#8884d8"></Area>
                            <Area dataKey='revenue' fill="#82ca9d"></Area>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    <ResponsiveContainer width="80%" height={400}>
                        <BarChart data={data} margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                            <XAxis dataKey='month'></XAxis>
                            <YAxis></YAxis>
                            <Tooltip></Tooltip>
                            <Bar dataKey='investment' fill="#8884d8" stackId="a"></Bar>
                            <Bar dataKey='revenue' fill="#82ca9d" stackId="a"></Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    {/* <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                            <XAxis dataKey='month'></XAxis>
                            <YAxis></YAxis>
                            <Tooltip></Tooltip>
                            <Pie data={data} dataKey="investment"></Pie>
                            <Pie data={data} dataKey="revenue"></Pie>
                            </PieChart>
                        </ResponsiveContainer> */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;