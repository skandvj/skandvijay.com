import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { Eye, Users, Clock, Globe, TrendingUp, ArrowUpRight, ArrowDownRight, Calendar, Shield, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement);

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [stats, setStats] = useState({
    totalViews: 0,
    uniqueVisitors: 0,
    avgSessionTime: 0,
    bounceRate: 0
  });

  // Simple authentication check
  useEffect(() => {
    const auth = localStorage.getItem('dashboard_auth');
    if (auth === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === 'skand2024') {
      localStorage.setItem('dashboard_auth', 'authenticated');
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('dashboard_auth');
    setIsAuthenticated(false);
    navigate('/');
  };

  // Simulate real-time data updates
  useEffect(() => {
    if (!isAuthenticated) return;

    const interval = setInterval(() => {
      setStats(prev => ({
        totalViews: prev.totalViews + Math.floor(Math.random() * 3),
        uniqueVisitors: prev.uniqueVisitors + Math.floor(Math.random() * 2),
        avgSessionTime: Math.floor(Math.random() * 300) + 120,
        bounceRate: Math.floor(Math.random() * 20) + 25
      }));
    }, 5000);

    // Initial data
    setStats({
      totalViews: 2847,
      uniqueVisitors: 1892,
      avgSessionTime: 245,
      bounceRate: 28
    });

    return () => clearInterval(interval);
  }, [isAuthenticated]);

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield size={32} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Admin Dashboard</h1>
            <p className="text-slate-600">Enter password to access analytics</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                placeholder="Enter admin password"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200"
            >
              Access Dashboard
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-slate-600 hover:text-slate-900 text-sm"
            >
              ← Back to Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const pageViewsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Page Views',
        data: [165, 178, 190, 181, 196, 172, 188],
        borderColor: 'rgb(15, 23, 42)',
        backgroundColor: 'rgba(15, 23, 42, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const deviceData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        data: [52, 35, 13],
        backgroundColor: ['#0f172a', '#475569', '#94a3b8'],
        borderWidth: 0
      }
    ]
  };

  const topPagesData = {
    labels: ['Home', 'About', 'Projects', 'Publications', 'Contact'],
    datasets: [
      {
        label: 'Page Views',
        data: [420, 280, 250, 180, 120],
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        borderColor: 'rgb(15, 23, 42)',
        borderWidth: 1
      }
    ]
  };

  const recentActivity = [
    { action: 'Portfolio viewed', location: 'San Francisco, CA', time: '2 minutes ago', type: 'view' },
    { action: 'Resume downloaded', location: 'New York, NY', time: '5 minutes ago', type: 'download' },
    { action: 'Contact form submitted', location: 'Seattle, WA', time: '12 minutes ago', type: 'contact' },
    { action: 'Publication shared', location: 'Austin, TX', time: '18 minutes ago', type: 'share' },
    { action: 'Project link clicked', location: 'Boston, MA', time: '25 minutes ago', type: 'click' }
  ];

  const statCards = [
    {
      title: 'Total Views',
      value: stats.totalViews.toLocaleString(),
      change: '+12%',
      trend: 'up',
      icon: Eye,
      color: 'from-slate-700 to-slate-900'
    },
    {
      title: 'Unique Visitors',
      value: stats.uniqueVisitors.toLocaleString(),
      change: '+8%',
      trend: 'up',
      icon: Users,
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: 'Avg. Session Time',
      value: `${Math.floor(stats.avgSessionTime / 60)}:${(stats.avgSessionTime % 60).toString().padStart(2, '0')}`,
      change: '+15%',
      trend: 'up',
      icon: Clock,
      color: 'from-green-600 to-green-800'
    },
    {
      title: 'Bounce Rate',
      value: `${stats.bounceRate}%`,
      change: '-5%',
      trend: 'down',
      icon: TrendingUp,
      color: 'from-purple-600 to-purple-800'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <BarChart3 size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Analytics Dashboard</h1>
                <p className="text-slate-600">Portfolio performance insights</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                View Portfolio
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {statCards.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white`}>
                  <stat.icon size={24} />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  <span>{stat.change}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-slate-600 text-sm">{stat.title}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Page Views Chart */}
          <motion.div
            className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Page Views This Week</h3>
            <Line 
              data={pageViewsData} 
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'rgba(0,0,0,0.05)'
                    }
                  },
                  x: {
                    grid: {
                      display: false
                    }
                  }
                }
              }}
            />
          </motion.div>

          {/* Device Breakdown */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Device Breakdown</h3>
            <Doughnut 
              data={deviceData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom' as const,
                  }
                }
              }}
            />
          </motion.div>

          {/* Top Pages */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Top Pages</h3>
            <Bar 
              data={topPagesData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'rgba(0,0,0,0.05)'
                    }
                  },
                  x: {
                    grid: {
                      display: false
                    }
                  }
                }
              }}
            />
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                  <div className={`w-3 h-3 rounded-full ${
                    activity.type === 'view' ? 'bg-blue-500' :
                    activity.type === 'download' ? 'bg-green-500' :
                    activity.type === 'contact' ? 'bg-purple-500' :
                    activity.type === 'share' ? 'bg-orange-500' : 'bg-slate-500'
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">{activity.action}</p>
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Globe size={14} />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-slate-500">
                    <Clock size={14} />
                    <span>{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Real-time indicator */}
        <motion.div
          className="mt-8 flex items-center justify-center space-x-2 text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm">Live data • Updates every 5 seconds</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;