
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FinancialProjections = () => {
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
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold" style={{ color: '#173e4e' }}>{`Year: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.dataKey === 'revenue' ? 'Total Revenue' : 'Operating Expenses'}: ${formatCurrency(entry.value)}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen p-6" style={{ background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3" style={{ color: '#173e4e' }}>
              The Well Financial Projections
            </h1>
            <p className="text-xl" style={{ color: '#8aa1a9' }}>
              Revenue Growth vs Operating Expenses (2025-2030)
            </p>
          </div>

          {/* Chart Container */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(138, 161, 169, 0.3)" />
                  <XAxis 
                    dataKey="year" 
                    tick={{ fill: '#173e4e', fontSize: 12, fontWeight: 'bold' }}
                    axisLine={{ stroke: '#173e4e' }}
                    tickLine={{ stroke: '#173e4e' }}
                  />
                  <YAxis 
                    tick={{ fill: '#173e4e', fontSize: 12 }}
                    axisLine={{ stroke: '#173e4e' }}
                    tickLine={{ stroke: '#173e4e' }}
                    tickFormatter={formatCurrency}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    wrapperStyle={{ 
                      color: '#173e4e', 
                      fontSize: '14px', 
                      fontWeight: 'bold',
                      paddingTop: '20px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#b8832b" 
                    strokeWidth={4}
                    dot={{ fill: '#b8832b', stroke: '#ffffff', strokeWidth: 3, r: 8 }}
                    activeDot={{ r: 12, stroke: '#ffffff', strokeWidth: 3 }}
                    name="Total Revenue"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="expenses" 
                    stroke="#173e4e" 
                    strokeWidth={4}
                    dot={{ fill: '#173e4e', stroke: '#ffffff', strokeWidth: 3, r: 8 }}
                    activeDot={{ r: 12, stroke: '#ffffff', strokeWidth: 3 }}
                    name="Total Operating Expenses"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-white border-2 transition-transform duration-300 hover:scale-105 hover:-translate-y-1" 
                  style={{ 
                    background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)',
                    borderColor: 'rgba(184, 131, 43, 0.3)'
                  }}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg opacity-90">2025 Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">$214K</div>
                <div className="text-sm opacity-80">Business Launch Year</div>
              </CardContent>
            </Card>

            <Card className="text-white border-2 transition-transform duration-300 hover:scale-105 hover:-translate-y-1" 
                  style={{ 
                    background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)',
                    borderColor: 'rgba(184, 131, 43, 0.3)'
                  }}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg opacity-90">2030 Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">$612K</div>
                <div className="text-sm opacity-80">+185% Growth</div>
              </CardContent>
            </Card>

            <Card className="text-white border-2 transition-transform duration-300 hover:scale-105 hover:-translate-y-1" 
                  style={{ 
                    background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)',
                    borderColor: 'rgba(184, 131, 43, 0.3)'
                  }}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg opacity-90">2026 Revenue vs Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">52%</div>
                <div className="text-sm opacity-80">Revenue covers 52% of expenses</div>
              </CardContent>
            </Card>

            <Card className="text-white border-2 transition-transform duration-300 hover:scale-105 hover:-translate-y-1" 
                  style={{ 
                    background: 'linear-gradient(135deg, #173e4e 0%, #8aa1a9 100%)',
                    borderColor: 'rgba(184, 131, 43, 0.3)'
                  }}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg opacity-90">2030 Revenue vs Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">80%</div>
                <div className="text-sm opacity-80">Revenue covers 80% of expenses</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialProjections;
