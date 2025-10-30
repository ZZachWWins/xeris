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
import { FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa';

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
  // Tokenomics Halving Chart Data (Page 7: Rewards halving every 730K blocks)
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
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'XRS Halving Schedule: Deflationary Path to 700M Cap (Σ 342.5 × 730K × (1/2)^n = 500M Mineable)',
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

  // Updated Market TAM Doughnut Chart Data (Page 9: Added Healthcare $8T)
  const tamData = {
    labels: ['Global Payments ($5T)', 'DeFi ($2T)', 'NFTs ($50B)', 'Healthcare ($8T)'],
    datasets: [{
      data: [5000, 2000, 50, 8000],
      backgroundColor: ['#32cd32', '#ffd700', '#800080', '#ff4500']
    }]
  };

  const tamOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'XRS Market Opportunity ($T)',
        color: '#fff'
      },
      legend: { position: 'bottom' }
    }
  };

  // Problem Metrics Bar Chart Data (Page 1 table)
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
    maintainAspectRatio: false,
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

  // Extended TPS Projection Line Chart Data (Page 6 figure: To 65K TPS by 2030)
  const tpsData = {
    labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
    datasets: [{
      label: 'TPS Achieved',
      data: [10000, 20000, 40000, 50000, 58000, 65000],
      borderColor: '#32cd32',
      backgroundColor: 'rgba(50, 205, 50, 0.1)',
      fill: true,
      tension: 0.4
    }]
  };

  const tpsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'XerisCoin Scalability Roadmap (65K TPS Potential)',
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

  // Competitor TPS Bar Chart (Page 5 table: Linear scale for compatibility)
  const competitorTpsData = {
    labels: ['Bitcoin', 'Ethereum', 'Solana', 'XRS'],
    datasets: [{
      label: 'Transactions Per Second (TPS)',
      data: [7, 15, 65000, 10000],
      backgroundColor: ['#f7931a', '#627eea', '#9945ff', '#32cd32'],
      borderColor: '#ffd700',
      borderWidth: 1
    }]
  };

  const competitorTpsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y', // Horizontal bars
    plugins: {
      title: {
        display: true,
        text: 'Competitor TPS Comparison',
        color: '#32cd32'
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        title: { display: true, text: 'TPS', color: '#fff' },
        grid: { color: 'rgba(50, 205, 50, 0.2)' }
      },
      y: {
        grid: { color: 'rgba(50, 205, 50, 0.2)' }
      }
    }
  };

  // Revenue Streams Stacked Bar (Page 15 table)
  const revenueData = {
    labels: ['Year 1 (2025)', 'Year 2 (2026)', 'Year 3 (2027)'],
    datasets: [
      {
        label: 'Staking Fees',
        data: [0.2, 5, 30],
        backgroundColor: '#32cd32'
      },
      {
        label: 'Transaction Fees',
        data: [0.1, 3, 20],
        backgroundColor: '#ffd700'
      },
      {
        label: 'NFT Royalties',
        data: [0.05, 2, 15],
        backgroundColor: '#800080'
      },
      {
        label: 'Enterprise',
        data: [0.15, 5, 35],
        backgroundColor: '#ff4500'
      }
    ]
  };

  const revenueOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Projected Revenue Streams ($M)',
        color: '#32cd32'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Revenue ($M)', color: '#fff' },
        grid: { color: 'rgba(50, 205, 50, 0.2)' }
      },
      x: {
        stacked: true,
        grid: { color: 'rgba(50, 205, 50, 0.2)' }
      }
    }
  };

  // Market Cap & User Growth Dual-Axis Line Chart
  const marketCapData = {
    labels: ['2025', '2026', '2027'],
    datasets: [
      {
        label: 'Market Cap ($M)',
        data: [10, 100, 1000],
        borderColor: '#ffd700',
        backgroundColor: 'rgba(255, 215, 0, 0.1)',
        yAxisID: 'y',
        fill: false,
        tension: 0.4
      },
      {
        label: 'Active Users (M)',
        data: [0.01, 0.1, 1],
        borderColor: '#32cd32',
        backgroundColor: 'rgba(50, 205, 50, 0.1)',
        yAxisID: 'y1',
        fill: false,
        tension: 0.4
      }
    ]
  };

  const marketCapOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Market Cap & User Growth Projections',
        color: '#ffd700'
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: { display: true, text: 'Market Cap ($M)', color: '#ffd700' },
        beginAtZero: true,
        grid: { color: 'rgba(255, 215, 0, 0.1)' }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: { display: true, text: 'Users (M)', color: '#32cd32' },
        beginAtZero: true,
        grid: { drawOnChartArea: false }
      },
      x: {
        grid: { color: 'rgba(255, 215, 0, 0.1)' }
      }
    }
  };

  const renderChart = (chart, fallbackText = 'Chart unavailable') => {
    try {
      return chart;
    } catch (error) {
      console.error('Chart render error:', error);
      return <p style={{ color: '#ccc', textAlign: 'center' }}>{fallbackText}</p>;
    }
  };

  return (
    <section className="data-section">
      <h2 className="data-title">Data & Insights</h2>
      <p className="data-text">
        Dive into the numbers powering XerisCoin. From deflationary tokenomics to market projections, these visuals highlight our path to revolutionizing global payments. Data sourced from our whitepaper—<a href="https://drive.google.com/file/d/13tq8KVKvbfWJvcet2-oSqTcHR75I5nqM/view?usp=sharing" download className="download-link">download full PDF</a>.
      </p>

      <div className="charts-grid">
        {/* Tokenomics Halving Chart */}
        <div className="chart-card">
          <FaChartLine className="chart-icon" />
          <h3 className="chart-title">Tokenomics: Halving Schedule</h3>
          <div style={{ height: '400px' }}>
            {renderChart(<Line data={halvingData} options={halvingOptions} />)}
          </div>
          <p className="chart-caption">Capped at 700M XRS with halvings every 2 years for scarcity (geometric series: Σ 342.5 × 730K × (1/2)^n = 500M mineable).</p>
        </div>

        {/* Updated Market TAM Doughnut */}
        <div className="chart-card">
          <FaChartPie className="chart-icon" />
          <h3 className="chart-title">Market Opportunity</h3>
          <div style={{ height: '400px' }}>
            {renderChart(<Doughnut data={tamData} options={tamOptions} />)}
          </div>
          <p className="chart-caption">$15T+ total (Payments + DeFi + NFTs + Healthcare)—XRS captures via Texas-first adoption.</p>
        </div>

        {/* Problem Metrics Bar */}
        <div className="chart-card">
          <FaChartBar className="chart-icon" />
          <h3 className="chart-title">Payments Problems</h3>
          <div style={{ height: '400px' }}>
            {renderChart(<Bar data={problemData} options={problemOptions} />)}
          </div>
          <p className="chart-caption">Annual costs: $700B fees, $1.2T delays, $2T exclusion.</p>
        </div>

        {/* Extended TPS Projection */}
        <div className="chart-card">
          <FaChartLine className="chart-icon" />
          <h3 className="chart-title">Performance Projections</h3>
          <div style={{ height: '400px' }}>
            {renderChart(<Line data={tpsData} options={tpsOptions} />)}
          </div>
          <p className="chart-caption">Scaling to 65K TPS by 2030 via hybrid consensus (PoH slots + PoW/PoS).</p>
        </div>

        {/* Competitor TPS Bar */}
        <div className="chart-card">
          <FaChartBar className="chart-icon" />
          <h3 className="chart-title">TPS vs Competitors</h3>
          <div style={{ height: '400px' }}>
            {renderChart(<Bar data={competitorTpsData} options={competitorTpsOptions} />)}
          </div>
          <p className="chart-caption">XRS balances Solana speed with Bitcoin security (Page 5 comparison).</p>
        </div>

        {/* Revenue Streams Stacked Bar */}
        <div className="chart-card">
          <FaChartBar className="chart-icon" />
          <h3 className="chart-title">Revenue Projections</h3>
          <div style={{ height: '400px' }}>
            {renderChart(<Bar data={revenueData} options={revenueOptions} />)}
          </div>
          <p className="chart-caption">Stacked by source: $200K staking Year 1 → $100M total Year 3 (5% APY, 0.1% fees, etc.).</p>
        </div>

        {/* Market Cap Line */}
        <div className="chart-card">
          <FaChartLine className="chart-icon" />
          <h3 className="chart-title">Market Cap & Users</h3>
          <div style={{ height: '400px' }}>
            {renderChart(<Line data={marketCapData} options={marketCapOptions} />)}
          </div>
          <p className="chart-caption">$10M cap (10K users) in 2025 → $1B (10M users) in 2027 (conservative model).</p>
        </div>
      </div>

      <div className="data-cta">
        <Link to="/xeriscoin" className="cta-button">Back to XerisCoin</Link>
      </div>
    </section>
  );
}

export default Data;