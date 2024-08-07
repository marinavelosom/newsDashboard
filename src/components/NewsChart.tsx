import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

interface NewsChartProps {
  data: { date: string, count: number }[];
  startDate: string;
  endDate: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, 'dd/MM/yyyy');
};

const NewsChart: React.FC<NewsChartProps> = ({ data, startDate, endDate }) => {
  // Filtrando os dados com base nas datas selecionadas
  const filteredData = data.filter(d => {
    const date = new Date(d.date);
    return date >= new Date(startDate) && date <= new Date(endDate);
  });

  return (
    <ResponsiveContainer width="90%" height={400}>
      <LineChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="date" 
          tickFormatter={formatDate}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default NewsChart;

