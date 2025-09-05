import React from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Tooltip 
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const data = {
  labels,
  datasets: [
    {
      label: 'Orders',
      data: [12, 19, 8, 15, 10, 14],
      backgroundColor: 'rgba(99, 102, 241, 0.8)',
      borderRadius: 4,
      borderSkipped: false,
      barThickness: 12,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'white',
      titleColor: '#1F2937',
      bodyColor: '#1F2937',
      borderColor: '#E5E7EB',
      borderWidth: 1,
      padding: 12,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      callbacks: {
        label: function(context) {
          return `${context.parsed.y} orders`;
        },
        title: () => null, // Hide title
      }
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#6B7280',
        font: {
          size: 12,
        },
      },
      border: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
      beginAtZero: true,
    },
  },
  elements: {
    bar: {
      backgroundColor: 'rgba(99, 102, 241, 0.8)',
      hoverBackgroundColor: 'rgba(99, 102, 241, 1)',
      borderRadius: 4,
      borderSkipped: false,
    },
  },
};

const OrdersChart = () => {
  return (
    <div className="h-64">
      <Bar options={options} data={data} />
    </div>
  );
};

export default OrdersChart;
