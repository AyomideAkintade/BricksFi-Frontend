import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  RadialBarChart, RadialBar, LineChart, Line
} from 'recharts';

const revenueData = [
  { name: 'Jan', 2022: 15, 2021: 12 },
  { name: 'Feb', 2022: 12, 2021: 10 },
  { name: 'Mar', 2022: 20, 2021: 15 },
  { name: 'Apr', 2022: 30, 2021: 25 },
  { name: 'May', 2022: 18, 2021: 10 },
  { name: 'Jun', 2022: 25, 2021: 18 },
];

const portfolioData = [{ name: 'Growth', value: 78 }];

const incomeData = [
  { name: 'Jan', income: 300 },
  { name: 'Feb', income: 350 },
  { name: 'Mar', income: 400 },
  { name: 'Apr', income: 420 },
  { name: 'May', income: 390 },
  { name: 'Jun', income: 450 },
];

const Analytics = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Total Revenue */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Total Revenue</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={revenueData}>
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="2022" fill="#8884d8" radius={[10, 10, 0, 0]} />
              <Bar dataKey="2021" fill="#82ca9d" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Portfolio Growth */}
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">2023 Portfolio Growth</h3>
          <ResponsiveContainer width="100%" height={180}>
            <RadialBarChart
              innerRadius="70%" outerRadius="100%"
              data={portfolioData} startAngle={180} endAngle={0}
            >
              <RadialBar minAngle={15} clockWise dataKey="value" fill="#8884d8" />
            </RadialBarChart>
          </ResponsiveContainer>
          <p className="mt-4 text-xl font-bold">78%</p>
          <p className="text-gray-500">Growth</p>
        </div>

        {/* Property Statistics */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Property Statistics</h3>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-3xl font-bold">32</p>
              <p className="text-sm text-gray-500">Total Property</p>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-16 h-16" viewBox="0 0 36 36">
                <path className="text-gray-300" d="M18 1.5a16.5 16.5 0 1 1 0 33 16.5 16.5 0 0 1 0-33z" fill="none" strokeWidth="3" />
                <path className="text-green-500" strokeDasharray="38,100" d="M18 1.5a16.5 16.5 0 0 1 0 33" fill="none" strokeWidth="3" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <p>Palm Harbor</p>
              <p className="text-gray-700">82.5k</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>Palm Harbor</p>
              <p className="text-gray-700">23.8k</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>Palm Harbor</p>
              <p className="text-gray-700">23.8k</p>
            </div>
          </div>
        </div>
      </div>

      {/* Income vs Expenses */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-700">Income</h3>
          <h3 className="text-lg font-semibold text-gray-700">Expenses</h3>
        </div>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={incomeData}>
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-3xl font-bold">$459.1k</p>
          <p className="text-green-500 font-semibold">+42.9%</p>
        </div>
        <p className="text-gray-500">Income this week: $65 ($39k less than last week)</p>
      </div>
    </div>
  );
};

export default Analytics;
