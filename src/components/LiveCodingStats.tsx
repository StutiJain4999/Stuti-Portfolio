"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Award, RefreshCw, GitBranch, Star, Users, Folder, Calendar } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

interface StatItemProps {
  label: string;
  value: string | number;
  sublabel?: string;
  accentClass?: string;
}

function StatItem({ label, value, sublabel, accentClass = "text-cyan-400" }: StatItemProps) {
  return (
    <div className="flex flex-col p-4 bg-white/5 rounded-xl border border-white/5 justify-between">
      <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 mb-1">{label}</span>
      <span className={`text-2xl font-bold font-display ${accentClass}`}>{value}</span>
      {sublabel && <span className="font-mono text-[8px] text-zinc-500 mt-1 uppercase">{sublabel}</span>}
    </div>
  );
}

export default function LiveCodingStats() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/coding-stats");
      const data = await res.json();
      setStats(data);
    } catch (e) {
      console.error("Failed to load coding statistics:", e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchStats();
  };

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' ' + date.toLocaleDateString();
    } catch (e) {
      return "Recently";
    }
  };

  // Safe accessor helper
  const github = stats?.github;
  const leetcode = stats?.leetcode;
  const gfg = stats?.gfg;

  if (loading) {
    return (
      <section id="live-stats" className="w-full py-24 bg-transparent px-6 md:px-12 scroll-mt-[80px]">
        <div className="max-w-[1400px] w-[92%] mx-auto flex flex-col items-center justify-center min-h-[300px]">
          <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin mb-4" />
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">Initializing Live Connection...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="live-stats"
      className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden px-6 md:px-12 scroll-mt-[80px]"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-950/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1400px] w-[92%] mx-auto relative z-10">
        
        {/* Section Heading & Refresh Controls */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2"
            >
              REAL-TIME ACTIVITY
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase text-glow-purple font-display"
            >
              Live Coding Metrics
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:items-end gap-2"
          >
            <div className="flex items-center gap-3">
              <button
                onClick={handleRefresh}
                disabled={refreshing}
                className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-950/10 rounded-full text-[10px] font-mono tracking-widest uppercase text-zinc-300 hover:text-white transition-all duration-300 disabled:opacity-50 cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-cyan-400" : ""}`} />
                <span>{refreshing ? "Refreshing..." : "Sync Stats"}</span>
              </button>
            </div>
            {stats && (
              <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
                Last Synced: {formatDate(stats.updatedAt)}
              </span>
            )}
          </motion.div>
        </div>

        {/* 3-Column API Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* 1. GitHub Dynamic Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel border border-white/5 p-6 rounded-2xl bg-[#07060f]/60 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(139,92,246,0.08)] transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase font-display">GitHub Profile</h3>
                  <a
                    href="https://github.com/StutiJain4999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-zinc-500 hover:text-purple-400 transition-colors"
                  >
                    @StutiJain4999
                  </a>
                </div>
              </div>

              {/* GitHub metrics grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <StatItem label="Repositories" value={github?.publicRepos ?? 0} accentClass="text-purple-400" />
                <StatItem label="Followers" value={github?.followers ?? 0} accentClass="text-purple-400" />
                <StatItem label="Following" value={github?.following ?? 0} accentClass="text-purple-400" />
              </div>

              {/* Recent Activity feed */}
              <div className="space-y-3">
                <h4 className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">Recent Stream Feed</h4>
                {github?.recentActivity && github.recentActivity.length > 0 ? (
                  <div className="space-y-2.5 max-h-[170px] overflow-y-auto pr-1">
                    {github.recentActivity.map((act: any, i: number) => (
                      <div key={i} className="p-2.5 bg-white/5 border border-white/5 rounded-lg flex items-center justify-between text-left">
                        <div className="flex flex-col min-width-0">
                          <span className="font-mono text-[9px] text-zinc-300 font-bold truncate">
                            {act.type.replace("Event", "")}
                          </span>
                          <span className="font-mono text-[8px] text-zinc-500 truncate mt-0.5">
                            {act.repo.split("/")[1]}
                          </span>
                        </div>
                        <span className="font-mono text-[8px] text-zinc-500">
                          {new Date(act.date).toLocaleDateString()}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="font-mono text-[9px] text-zinc-600 uppercase">No recent events found</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* 2. LeetCode Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel border border-white/5 p-6 rounded-2xl bg-[#07060f]/60 hover:border-amber-500/30 hover:shadow-[0_10px_30px_rgba(245,158,11,0.08)] transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase font-display">LeetCode Profile</h3>
                  <a
                    href="https://leetcode.com/u/12408204/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-zinc-500 hover:text-amber-400 transition-colors"
                  >
                    @12408204
                  </a>
                </div>
              </div>

              {/* Total count details */}
              <div className="flex gap-4 items-center justify-between mb-6 p-4 bg-white/5 border border-white/5 rounded-xl">
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">Total Solved</span>
                  <span className="text-3xl font-bold font-display text-white">{leetcode?.solvedAll ?? 0}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">Active Streak</span>
                  <span className="text-xl font-bold font-display text-amber-400 flex items-center gap-1.5">
                    🔥 {leetcode?.streak ?? 0} Days
                  </span>
                </div>
              </div>

              {/* Difficulty breakdown */}
              <div className="space-y-3.5 mb-6">
                <h4 className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">Problem Difficulty Distribution</h4>
                <div className="space-y-2">
                  {/* Easy */}
                  <div>
                    <div className="flex justify-between text-xs mb-1 font-mono text-[9px]">
                      <span className="text-emerald-400">EASY</span>
                      <span className="text-zinc-400">{leetcode?.solvedEasy ?? 0}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${leetcode?.solvedAll ? ((leetcode.solvedEasy / leetcode.solvedAll) * 100) : 0}%` }}
                      />
                    </div>
                  </div>

                  {/* Medium */}
                  <div>
                    <div className="flex justify-between text-xs mb-1 font-mono text-[9px]">
                      <span className="text-amber-400">MEDIUM</span>
                      <span className="text-zinc-400">{leetcode?.solvedMedium ?? 0}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full"
                        style={{ width: `${leetcode?.solvedAll ? ((leetcode.solvedMedium / leetcode.solvedAll) * 100) : 0}%` }}
                      />
                    </div>
                  </div>

                  {/* Hard */}
                  <div>
                    <div className="flex justify-between text-xs mb-1 font-mono text-[9px]">
                      <span className="text-rose-400">HARD</span>
                      <span className="text-zinc-400">{leetcode?.solvedHard ?? 0}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-rose-500 rounded-full"
                        style={{ width: `${leetcode?.solvedAll ? ((leetcode.solvedHard / leetcode.solvedAll) * 100) : 0}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. GeeksforGeeks Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel border border-white/5 p-6 rounded-2xl bg-[#07060f]/60 hover:border-emerald-500/30 hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)] transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase font-display">GeeksforGeeks</h3>
                  <a
                    href="https://www.geeksforgeeks.org/profile/stutijanzm9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-zinc-500 hover:text-emerald-400 transition-colors"
                  >
                    @stutijanzm9
                  </a>
                </div>
              </div>

              {/* GFG metrics grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <StatItem label="Coding Score" value={gfg?.score ?? 0} accentClass="text-emerald-400" />
                <StatItem label="Problems Solved" value={gfg?.solved ?? 0} accentClass="text-emerald-400" />
              </div>

              <div className="p-4 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">Institute Rank</span>
                  <span className="text-2xl font-bold font-display text-emerald-400">#{gfg?.rank ?? "N/A"}</span>
                </div>
                <span className="font-mono text-[8px] text-zinc-500 text-right uppercase">
                  Lovely Professional University
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 4. GitHub Contributions Calendar Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel border border-white/5 p-6 rounded-2xl bg-[#07060f]/60 hover:border-cyan-500/30 transition-all duration-500 mt-8 max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-300">GitHub Contributions History</h4>
            </div>
            <a
              href="https://github.com/StutiJain4999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] font-mono tracking-widest text-cyan-400 hover:text-white uppercase transition-colors"
            >
              View Repository Graph
            </a>
          </div>

          <div className="w-full flex justify-center bg-black/30 p-4 rounded-xl border border-white/5 overflow-x-auto min-h-[120px] items-center">
            {/* Display SVG Contributions chart cleanly */}
            <img
              src="https://ghchart.rshah.org/cyan/StutiJain4999"
              alt="Stuti's GitHub Contributions Calendar"
              className="min-w-[680px] w-full max-w-4xl object-contain brightness-95 contrast-105"
            />
          </div>
        </motion.div>

        {/* 5. Repository Grid Section */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <Folder className="w-4 h-4 text-cyan-400" />
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-300">Active Repositories & Packages</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {github?.pinnedRepos && github.pinnedRepos.length > 0 ? (
              github.pinnedRepos.slice(0, 6).map((repo: any, idx: number) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group p-5 bg-[#07060f]/40 border border-white/5 hover:border-purple-500/30 hover:bg-[#07060f]/75 rounded-xl flex flex-col justify-between gap-4 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-white group-hover:text-purple-400 transition-colors uppercase truncate">
                        {repo.name}
                      </span>
                      {repo.language && (
                        <span className="px-2 py-0.5 bg-white/5 border border-white/5 rounded font-mono text-[8px] uppercase tracking-wider text-zinc-400">
                          {repo.language}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-2">
                      {repo.description || "Active coding repository featuring algorithms, engineering files, or documentation."}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-3 border-t border-white/5 font-mono text-[9px] text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500/70" />
                      {repo.stars} Stars
                    </span>
                    <span className="flex items-center gap-1">
                      <GitBranch className="w-3.5 h-3.5 text-cyan-500/70" />
                      {repo.forks} Forks
                    </span>
                  </div>
                </motion.a>
              ))
            ) : (
              <p className="font-mono text-xs text-zinc-500 uppercase col-span-3">No repositories available</p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
