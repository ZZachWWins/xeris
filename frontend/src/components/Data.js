// Data.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { FaChartBar, FaChartLine, FaPieChartAlt } from 'react-icons/fa';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Data() {
  // Tokenomics Halving Chart Data
  const halvingData = {
    labels: ['Era 0 (Now)', 'Era 1 (2 yrs)', 'Era 2 (4 yrs)', 'Era 3 (6 yrs)', 'Era 4 (8 yrs)'],
    datasets: [{
      label: 'Block Rewards (XRS)',
      data: [342.5, 171.25, 85.625, 42.8125, 21.40625],
      borderColor: '#ffd700',
      backgroundColor: 'rgba(255, 215, 0, 0.1)',
      fill: true,
      tension: 0.1
    }]
  };

  const halvingOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'XRS Halving Schedule: Deflationary Path to 700M Cap',
        color: '#32cd32'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(50, 205, 50, 0.2)' }
      },
      x: {
        grid: { color: 'rgba(50, 205, 50, 0.2)' }
      }
    }
  };

  // Market TAM Doughnut Chart Data
  const tamData = {
    labels: ['Global Payments', 'DeFi', 'NFTs'],
    datasets: [{
      data: [5000, 2000, 50],
      backgroundColor: ['#32cd32', '#ffd700', '#800080']
    }]
  };

  const tamOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'XRS Market Opportunity ($B)',
        color: '#fff'
      },
      legend: { position: 'bottom' }
    }
  };

  // Problem Metrics Bar Chart Data (from whitepaper table)
  const problemData = {
    labels: ['Cross-Border Fees', 'Settlement Delays', 'Unbanked Exclusion'],
    datasets: [{
      label: 'Annual Cost ($T)',
      data: [0.7, 1.2, 2],
      backgroundColor: '#ffd700',
      borderColor: '#32cd32',
      borderWidth: 1
    }]
  };

  const problemOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Global Payments Problems: Annual Economic Impact',
        color: '#32cd32'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Trillions ($T)', color: '#fff' },
        grid: { color: 'rgba(50, 205, 50, 0.2)' }
      },
      x: {
        grid: { color: 'rgba(50, 205, 50, 0.2)' }
      }
    }
  };

  // TPS Projection Line Chart Data
  const tpsData = {
    labels: ['Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026', 'Q3 2026'],
    datasets: [{
      label: 'TPS Achieved',
      data: [10000, 15000, 25000, 40000, 65000],
      borderColor: '#32cd32',
      backgroundColor: 'rgba(50, 205, 50, 0.1)',
      fill: true,
      tension: 0.4
    }]
  };

  const tpsOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'XerisCoin Scalability Roadmap',
        color: '#ffd700'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(255, 215, 0, 0.1)' }
      },
      x: {
        grid: { color: 'rgba(255, 215, 0, 0.1)' }
      }
    }
  };

  return (
    <section className="data-section">
      <h2 className="data-title">Data & Insights</h2>
      <p className="data-text">
        Dive into the numbers powering XerisCoin. From deflationary tokenomics to market projections, these visuals highlight our path to revolutionizing global payments. Data sourced from our whitepaper—<a href="https://res.cloudinary.com/your-cloud-name/image/upload/v123/xeris_whitepaper.pdf" download className="download-link">download full PDF</a>.
      </p>

      <div className="charts-grid">
        {/* Tokenomics Halving Chart */}
        <div className="chart-card">
          <FaChartLine className="chart-icon" />
          <h3 className="chart-title">Tokenomics: Halving Schedule</h3>
          <Line data={halvingData} options={halvingOptions} />
          <p className="chart-caption">Capped at 700M XRS with halvings every 2 years for scarcity.</p>
        </div>

        {/* Market TAM Doughnut */}
        <div className="chart-card">
          <FaPieChartAlt className="chart-icon" />
          <h3 className="chart-title">Market Opportunity</h3>
          <Doughnut data={tamData} options={tamOptions} />
          <p className="chart-caption">$5T payments + $2T DeFi + $50B NFTs—XRS captures it all.</p>
        </div>

        {/* Problem Metrics Bar */}
        <div className="chart-card">
          <FaChartBar className="chart-icon" />
          <h3 className="chart-title">Payments Problems</h3>
          <Bar data={problemData} options={problemOptions} />
          <p className="chart-caption">Annual costs: $700B fees, $1.2T delays, $2T exclusion.</p>
        </div>

        {/* TPS Projection */}
        <div className="chart-card">
          <FaChartLine className="chart-icon" />
          <h3 className="chart-title">Performance Projections</h3>
          <Line data={tpsData} options={tpsOptions} />
          <p className="chart-caption">Scaling to 65k TPS by Q3 2026 via hybrid consensus.</p>
        </div>
      </div>

      <div className="data-cta">
        <Link to="/xeriscoin" className="cta-button">Back to XerisCoin</Link>
      </div>
    </section>
  );
}

export default Data;