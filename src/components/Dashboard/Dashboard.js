import React from 'react';
import useBusinessData from '../../hooks/useBusinessData';

const Dashboard = () => {
    const [data] = useBusinessData([]);

    return (
        <div className='dashboard-container'>
            <h1>This is Dashboard. Total data: {data.length}</h1>
            <div className='rechart-container'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Dashboard;