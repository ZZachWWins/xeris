// src/components/BlockExplorer.js
import React, { useState, useEffect, useCallback } from 'react';
import { FaCube, FaLink, FaClock, FaDatabase } from 'react-icons/fa';

function BlockExplorer() {
  const [latestSlot, setLatestSlot] = useState(null);
  const [recentBlocks, setRecentBlocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const RPC_ENDPOINT = '/api/blocks';

  // Helper function to convert Byte Array [9, 64, ...] to Hex String "0940..."
  const bytesToHex = (bytes) => {
    if (!bytes || !Array.isArray(bytes)) return 'N/A';
    return bytes
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  };

  const fetchBlockchainData = useCallback(async () => {
    try {
      const response = await fetch(RPC_ENDPOINT);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      
      if (data && Array.isArray(data) && data.length > 0) {
        setLatestSlot(data[0].slot);
        setRecentBlocks(data.slice(0, 10));
      }
      setLoading(false);
      setError(null);
    } catch (err) {
      console.error('Error fetching blocks:', err);
      setError('Unable to connect to the Xeris network relay.');
      setLoading(false);
    }
  }, [RPC_ENDPOINT]);

  useEffect(() => {
    fetchBlockchainData();
    const interval = setInterval(fetchBlockchainData, 5000);
    return () => clearInterval(interval);
  }, [fetchBlockchainData]);

  return (
    <section className="xeriscoin-section">
      <h2 className="xeriscoin-title">Live Block Explorer</h2>
      <p className="xeriscoin-text">
        Real-time visibility into the Xeris Layer 1 network state.
      </p>

      <div className="countdown-container" style={{ animation: 'none', background: 'rgba(255, 255, 255, 0.05)' }}>
        <div className="countdown-title">
          <span className="live-indicator"></span> Current Network Height
        </div>
        <div className="countdown-value" style={{ fontSize: '4rem', color: '#17A2B8' }}>
          {loading ? '...' : (latestSlot !== null ? latestSlot.toLocaleString() : '0')}
        </div>
        <div className="countdown-label">Total Slots Validated</div>
      </div>

      {error && <p className="error-message" style={{ color: '#ff4500', marginTop: '1rem' }}>{error}</p>}

      <div className="partnership-grid" style={{ marginTop: '3rem' }}>
        <div className="partnership-card" style={{ maxWidth: '100%', textAlign: 'left' }}>
          <h3 style={{ marginBottom: '1.5rem' }}><FaDatabase className="btn-icon" /> Recent Blocks</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#f0f0f0' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.2)' }}>
                  <th style={{ padding: '1rem' }}><FaCube /> Slot</th>
                  <th style={{ padding: '1rem' }}><FaLink /> Hash</th>
                  <th style={{ padding: '1rem' }}><FaClock /> Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {recentBlocks && recentBlocks.length > 0 ? (
                  recentBlocks.map((block, idx) => {
                    const hashHex = bytesToHex(block.hash);
                    return (
                      <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '1rem', fontWeight: 'bold', color: '#32cd32' }}>{block.slot}</td>
                        <td style={{ padding: '1rem', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                          {hashHex !== 'N/A' ? `${hashHex.substring(0, 16)}...` : 'N/A'}
                        </td>
                        <td style={{ padding: '1rem' }}>
                          {block.poh_timestamp ? new Date(block.poh_timestamp).toLocaleTimeString() : 'Pending'}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="3" style={{ padding: '2rem', textAlign: 'center', color: '#aaa' }}>
                      {loading ? 'Fetching ledger data...' : 'No blocks found in current epoch.'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`
        .live-indicator {
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: #32cd32;
          border-radius: 50%;
          margin-right: 10px;
          box-shadow: 0 0 8px #32cd32;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}

export default BlockExplorer;