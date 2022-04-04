import React from 'react';
import { Area, AreaChart, Bar, BarChart, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useBusinessData from '../../hooks/useBusinessData';

const Dashboard = () => {
    const [data] = useBusinessData([]);

    return (
        <div className='dashboard-container my-10'>
            <div className='rechart-container grid md:grid-cols-2 grid-cols-1 gap-5 mx-5'>
                <div className='line-chart border-4'>
                    <h3 className='text-center text-2xl my-3 font-semibold text-red-400'>Month wise sell</h3>
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
                <div className='area-chart border-4'>
                    <h3 className='text-center text-2xl my-3 font-semibold text-red-400'>Investment VS Revenue</h3>
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
                <div className='bar-chart border-4'>
                    <h3 className='text-center text-2xl my-3 font-semibold text-red-400'>Investment VS Revenue</h3>
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
                <div className='pie-chart border-4'>
                    <h3 className='text-center text-2xl my-3 font-semibold text-red-400'>Investment VS Revenue</h3>
                    <ResponsiveContainer width="80%" height={400}>
                        <PieChart>
                            <Tooltip></Tooltip>
                            <Pie data={data} dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label></Pie>
                            <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8"></Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;