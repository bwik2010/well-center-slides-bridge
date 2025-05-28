
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FinancialProjectionsSlide = () => {
  // Financial data from The Well projections
  const chartData = [
    { year: 2025, revenue: 214500, expenses: 328500 },
    { year: 2026, revenue: 411500, expenses: 789250 },
    { year: 2027, revenue: 508000, expenses: 831650 },
    { year: 2028, revenue: 570000, expenses: 824165 },
    { year: 2029, revenue: 612000, expenses: 742054 },
    { year: 2030, revenue: 612000, expenses: 760331 },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-sm" style={{ color: '#173e4e' }}>{`Year: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.dataKey === 'revenue' ? 'Revenue' : 'Expenses'}: ${formatCurrency(entry.value)}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full flex flex-col p-8" style={{ background: 'linear-gradient(135deg, #8aa1a920 0%, #173e4e20 100%)' }}>
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#173e4e' }}>
          Financial Projections
        </h1>
        <p className="text-lg" style={{ color: '#8aa1a9' }}>
          Revenue Growth vs Operating Expenses (2025-2030)
        </p>
      </div>

      {/* Chart Container */}
      <div className="flex-1 bg-white rounded-xl p-4 shadow-lg border border-gray-200 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(138, 161, 169, 0.3)" />
            <XAxis 
              dataKey="year" 
              tick={{ fill: '#173e4e', fontSize: 11, fontWeight: 'bold' }}
              axisLine={{ stroke: '#173e4e' }}
              tickLine={{ stroke: '#173e4e' }}
            />
            <YAxis 
              tick={{ fill: '#173e4e', fontSize: 10 }}
              axisLine={{ stroke: '#173e4e' }}
              tickLine={{ stroke: '#173e4e' }}
              tickFormatter={formatCurrency}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ 
                color: '#173e4e', 
                fontSize: '12px', 
                fontWeight: 'bold'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#b8832b" 
              strokeWidth={3}
              dot={{ fill: '#b8832b', stroke: '#ffffff', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, stroke: '#ffffff', strokeWidth: 2 }}
              name="Total Revenue"
            />
            <Line 
              type="monotone" 
              dataKey="expenses" 
              stroke="#173e4e" 
              strokeWidth={3}
              dot={{ fill: '#173e4e', stroke: '#ffffff', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, stroke: '#ffffff', strokeWidth: 2 }}
              name="Operating Expenses"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-3">
        <div className="text-white p-3 rounded-lg text-center border-2" 
             style={{ 
               background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)',
               borderColor: 'rgba(184, 131, 43, 0.3)'
             }}>
          <div className="text-xs opacity-90 mb-1">2025 Revenue</div>
          <div className="text-lg font-bold">$214K</div>
          <div className="text-xs opacity-80">Launch Year</div>
        </div>

        <div className="text-white p-3 rounded-lg text-center border-2" 
             style={{ 
               background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)',
               borderColor: 'rgba(184, 131, 43, 0.3)'
             }}>
          <div className="text-xs opacity-90 mb-1">2030 Revenue</div>
          <div className="text-lg font-bold">$612K</div>
          <div className="text-xs opacity-80">+185% Growth</div>
        </div>

        <div className="text-white p-3 rounded-lg text-center border-2" 
             style={{ 
               background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)',
               borderColor: 'rgba(184, 131, 43, 0.3)'
             }}>
          <div className="text-xs opacity-90 mb-1">2026 Coverage</div>
          <div className="text-lg font-bold">52%</div>
          <div className="text-xs opacity-80">Revenue vs Expenses</div>
        </div>

        <div className="text-white p-3 rounded-lg text-center border-2" 
             style={{ 
               background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)',
               borderColor: 'rgba(184, 131, 43, 0.3)'
             }}>
          <div className="text-xs opacity-90 mb-1">2030 Coverage</div>
          <div className="text-lg font-bold">80%</div>
          <div className="text-xs opacity-80">Revenue vs Expenses</div>
        </div>
      </div>
    </div>
  );
};

export default FinancialProjectionsSlide;
