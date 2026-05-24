import React from 'react';
import { Target, Flag, Layers, DollarSign, Activity } from 'lucide-react';

export function ExecutiveBrief() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-10">
      <header className="h-20 border-white/10 flex items-center justify-between border-b pb-12 mb-10">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] mb-2">Project Genesis</p>
          <h1 className="text-4xl font-serif text-white">Sovereign-AI</h1>
          <h2 className="text-lg font-serif italic text-white/60 mt-1">Global Market Research & Commercialization Brief</h2>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-tighter text-white/40">Confidential</p>
          <p className="text-sm font-mono text-[#D4AF37]">FOR INVESTORS/COO</p>
        </div>
      </header>

      <div className="space-y-8">
        {/* Core Thesis */}
        <section className="bg-white/[0.02] border border-white/10 p-8">
          <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] mb-4 flex items-center">
            <Target className="w-4 h-4 mr-3 opacity-80" /> Core Thesis
          </h3>
          <p className="text-white/80 leading-relaxed font-light text-lg">
            Sovereign-AI should be positioned globally as a configurable runtime governance and guardrail layer for enterprise GenAI. 
            India, BFSI, and DPDP are strong initial wedges, but the larger opportunity is global: policy packs for different jurisdictions, domains, sectors, and risk classes.
          </p>
        </section>

        {/* Positioning */}
        <section>
          <h3 className="text-[10px] uppercase tracking-widest text-white/40 mb-4 flex items-center">
            <Flag className="w-4 h-4 mr-3 opacity-50" /> Recommended Positioning
          </h3>
          <div className="bg-white/[0.02] border border-white/10 p-8">
            <p className="text-white/90 leading-relaxed font-serif italic text-xl">
              "Sovereign-AI is the configurable runtime governance layer for enterprise GenAI - enforcing policies for data protection, prompt-injection defense, output safety, consent checks, audit traces, and agentic AI control across global markets, sectors, and deployment models."
            </p>
          </div>
        </section>

        {/* Executive Conclusions */}
        <section>
          <h3 className="text-[10px] uppercase tracking-widest text-white/40 mb-4 flex items-center">
            <Activity className="w-4 h-4 mr-3 opacity-50" /> Executive Conclusions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/[0.02] border border-white/10 p-8 hover:border-[#D4AF37]/30 transition-colors">
              <h4 className="text-[11px] uppercase tracking-widest text-white mb-3 flex items-center gap-2"><span className="w-1 h-1 bg-[#D4AF37]"></span> Category & Moat</h4>
              <p className="text-sm text-white/60 font-light leading-relaxed">Configurable AI Runtime Governance Platform. The moat is separation between policy and enforcement via YAML policy packs.</p>
            </div>
            <div className="bg-white/[0.02] border border-white/10 p-8 hover:border-[#D4AF37]/30 transition-colors">
              <h4 className="text-[11px] uppercase tracking-widest text-white mb-3 flex items-center gap-2"><span className="w-1 h-1 bg-[#D4AF37]"></span> Primary Wedge</h4>
              <p className="text-sm text-white/60 font-light leading-relaxed">India BFSI and healthtech. The product possesses out-of-the-box India PII helpers and DPDP-style alignment natively.</p>
            </div>
            <div className="bg-white/[0.02] border border-white/10 p-8 hover:border-[#D4AF37]/30 transition-colors">
              <h4 className="text-[11px] uppercase tracking-widest text-white mb-3 flex items-center gap-2"><span className="w-1 h-1 bg-[#D4AF37]"></span> Primary Buyer</h4>
              <p className="text-sm text-white/60 font-light leading-relaxed">CTO, CISO, Head of AI, Chief Risk Officer, Data Protection Officer, and business owners launching GenAI.</p>
            </div>
            <div className="bg-white/[0.02] border border-white/10 p-8 hover:border-[#D4AF37]/30 transition-colors">
              <h4 className="text-[11px] uppercase tracking-widest text-white mb-3 flex items-center gap-2"><span className="w-1 h-1 bg-[#D4AF37]"></span> Critical Proof Assets</h4>
              <p className="text-sm text-white/60 font-light leading-relaxed">Red-team results, tier latency benchmarks, PII detection quality logs, deployment architecture, and dashboard demos.</p>
            </div>
          </div>
        </section>

        {/* Architecture & Pricing block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-white/10 mt-12">
          <section>
            <h3 className="text-[10px] uppercase tracking-widest text-white/40 mb-6 flex items-center">
              <Layers className="w-4 h-4 mr-3 opacity-50" /> Layered Architecture
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-5 items-start">
                <span className="shrink-0 w-8 h-8 border border-white/20 text-[#D4AF37] flex items-center justify-center text-xs font-mono">01</span>
                <div>
                  <strong className="block text-xs uppercase tracking-widest text-white mb-1">Tier 1: Regex & Heuristics</strong>
                  <span className="text-sm text-white/50 block font-light leading-relaxed">Low-latency first line of defense; enables cost control and high throughput.</span>
                </div>
              </li>
              <li className="flex gap-5 items-start">
                <span className="shrink-0 w-8 h-8 border border-white/20 text-[#D4AF37] flex items-center justify-center text-xs font-mono">02</span>
                <div>
                  <strong className="block text-xs uppercase tracking-widest text-white mb-1">Tier 2: Semantic Analysis</strong>
                  <span className="text-sm text-white/50 block font-light leading-relaxed">Embeddings and vector-backed intent detection and domain limit checks.</span>
                </div>
              </li>
              <li className="flex gap-5 items-start">
                <span className="shrink-0 w-8 h-8 border border-white/20 text-[#D4AF37] flex items-center justify-center text-xs font-mono">03</span>
                <div>
                  <strong className="block text-xs uppercase tracking-widest text-white mb-1">Tier 3: LangGraph Review</strong>
                  <span className="text-sm text-white/50 block font-light leading-relaxed">Deep review for agentic cases, complex tool boundaries, and fallback workflows.</span>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-[10px] uppercase tracking-widest text-white/40 mb-6 flex items-center">
              <DollarSign className="w-4 h-4 mr-3 opacity-50" /> Commercial Model
            </h3>
            <div className="bg-[#D4AF37] p-8 text-black flex flex-col h-full">
              <div className="mb-8">
                <h4 className="text-[10px] font-bold uppercase tracking-widest border-b border-black/20 pb-3 mb-4">Paid POC Land</h4>
                <p className="text-sm italic font-serif leading-tight">One workflow, test pack, baseline integration.</p>
                <div className="mt-4 flex justify-between items-end">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/50">4-6 weeks</span>
                  <span className="text-2xl font-light">USD 25k-50k</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-[10px] font-bold uppercase tracking-widest border-b border-black/20 pb-3 mb-4">Enterprise License Expand</h4>
                <p className="text-sm italic font-serif leading-tight">Multiple active applications, audit evidence, policy packs.</p>
                <div className="mt-4 flex justify-between items-end">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/50">Annual</span>
                  <span className="text-2xl font-light">USD 200k+</span>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
