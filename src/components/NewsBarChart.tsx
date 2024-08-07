import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface NewsBarChartProps {
  data: { source: string, count: number }[];
}

const NewsBarChart: React.FC<NewsBarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="90%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="source" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default NewsBarChart;

