// pages/index.js
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Particles ko import karne ki zaroorat nahi, direct CSS use karte hain for safe build

export default function Home() {
  const [investment, setInvestment] = useState(100);
  const [result, setResult] = useState(null);
  const [deposits, setDeposits] = useState([]);

  // Generate Mock Data
  const genRow = () => ({
    id: Math.random(), 
    wallet: `0x${Math.random().toString(16).slice(2, 6)}...${Math.random().toString(16).slice(2, 6)}`,
    amount: (Math.random() * 500 + 10).toFixed(2),
  });

  // Calculator Logic
  const calculate = () => {
    if(investment < 10) return alert("Minimum investment is 10 TRX");
    const daily = investment * 0.03;
    const totalReward = investment * 0.20;
    const totalReturn = investment + totalReward;
    setResult({ daily, totalReward, totalReturn });
  };

  // Live Update Simulation
  useEffect(() => {
    setDeposits(Array(30).fill(0).map(genRow));
    const int = setInterval(() => {
      setDeposits(prev => [genRow(), ...prev.slice(0, 29)]);
    }, 3000);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <Head><title>TRX Mining Platform</title></Head>

      {/* Simple CSS Particles Background as fallback */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjIiIGZpbGw9IiMwMGZmZjciIG9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==')] bg-repeat animate-pulse"></div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 border-b border-white/10">
          <h1 className="text-2xl font-orbitron font-bold text-[var(--primary-color)]">TRXMINE</h1>
          <div className="flex gap-4">
            <Link href="/login"><button className="px-4 py-2 border border-white/20 rounded hover:bg-white/10 transition">Login</button></Link>
            <Link href="/register"><button className="px-4 py-2 bg-[var(--primary-color)] text-black rounded font-bold">Register</button></Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="text-center py-20 px-6">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-white">
            Next Generation Mining
          </motion.h1>
          <p className="text-xl text-gray-400 mt-4 mb-8">Experience the future of blockchain mining.</p>
          <Link href="/register"><button className="px-8 py-4 bg-[var(--primary-color)] text-black font-bold rounded-lg neon-border">Start Mining</button></Link>
        </div>

        {/* Calculator */}
        <div className="max-w-3xl mx-auto p-6 glass-card rounded-xl m-10 neon-border">
          <h2 className="text-2xl font-orbitron text-center mb-6 text-[var(--primary-color)]">Profit Calculator</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input type="number" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} className="flex-1 p-3 bg-black/50 rounded border border-white/20 text-white" placeholder="Investment (TRX)" />
            <button onClick={calculate} className="p-3 bg-white/10 rounded border border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-black transition font-bold">Calculate</button>
          </div>
          {result && (
            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div className="p-3 bg-black/30 rounded">
                <p className="text-xs text-gray-400">Daily</p>
                <p className="text-lg font-bold">{result.daily.toFixed(2)}</p>
              </div>
              <div className="p-3 bg-black/30 rounded">
                <p className="text-xs text-gray-400">Total Reward</p>
                <p className="text-lg font-bold">{result.totalReward.toFixed(2)}</p>
              </div>
              <div className="p-3 bg-black/30 rounded border border-[var(--primary-color)]">
                <p className="text-xs text-gray-400">Total Return</p>
                <p className="text-lg font-bold text-[var(--primary-color)]">{result.totalReturn.toFixed(2)}</p>
              </div>
            </div>
          )}
        </div>

        {/* Live Tables */}
        <div className="grid md:grid-cols-2 gap-6 p-6 container mx-auto pb-20">
          <div className="glass-card p-4 rounded-xl overflow-hidden h-80 overflow-y-auto scrollbar-hide">
            <h3 className="text-lg font-bold mb-4 text-[var(--primary-color)]">Live Deposits</h3>
            {deposits.map((d, i) => (
              <motion.div key={d.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex justify-between text-sm border-b border-white/5 py-2">
                <span className="font-mono text-gray-300">{d.wallet}</span>
                <span className="text-[var(--primary-color)]">{d.amount} TRX</span>
              </motion.div>
            ))}
          </div>
          <div className="glass-card p-4 rounded-xl overflow-hidden h-80 overflow-y-auto scrollbar-hide">
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Live Withdrawals</h3>
            {deposits.map((d) => (
              <div key={d.id+1} className="flex justify-between text-sm border-b border-white/5 py-2">
                <span className="font-mono text-gray-300">{d.wallet}</span>
                <span className="text-yellow-400">{d.amount} TRX</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
