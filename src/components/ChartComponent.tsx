import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface MonthlyData {
    month: string;
    Revenue: number;
    COGS: number;
    GrossProfit: number;
}

interface ChartComponentProps {
    data: MonthlyData[];
}

const formatNumber = (num: number) => {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B';
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    } else {
        return num.toString();
    }
};

const ChartComponent: React.FC<ChartComponentProps> = ({ data = [] }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={formatNumber} />
                <Tooltip formatter={(value) => formatNumber(Number(value))} />
                <Legend />
                <Bar dataKey="Revenue" fill="#8884d8" />
                <Bar dataKey="COGS" fill="#82ca9d" />
                <Bar dataKey="GrossProfit" fill="#ffc658" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ChartComponent;
