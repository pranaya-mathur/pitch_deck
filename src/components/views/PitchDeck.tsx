import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Sovereign-AI",
    subtitle: "The runtime governance layer for safe, auditable enterprise GenAI.",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] mb-2">Vantage Pitch Series</p>
        <h1 className="text-6xl font-serif text-white">Sovereign-AI</h1>
        <p className="text-xl font-light text-white/60 max-w-2xl">Configurable AI Runtime Governance for LLMs, RAG Systems, Copilots, and AI Agents</p>
      </div>
    )
  },
  {
    id: 2,
    title: "The Problem",
    subtitle: "GenAI adoption heavily outpaces governance controls.",
    content: (
      <div className="grid grid-cols-2 gap-10 h-full items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif text-white leading-tight">Traditional security tools fail at the LLM runtime layer.</h2>
          <p className="text-sm text-white/60 leading-relaxed font-light">Enterprises cannot prove what their AI did. Sensitive data enters prompts, agents call unintended tools, and compliance teams rely on static policy documents, not runtime enforcement.</p>
        </div>
        <div className="bg-white/[0.02] border border-white/10 p-8 space-y-8">
          <div className="border-l-2 border-[#D4AF37] pl-5 py-1">
            <strong className="text-white text-xs uppercase tracking-widest block mb-2">Prompt Injection</strong>
            <span className="text-white/50 text-sm font-light">Indirect prompts overriding system safety.</span>
          </div>
          <div className="border-l-2 border-[#D4AF37] pl-5 py-1">
            <strong className="text-white text-xs uppercase tracking-widest block mb-2">Sensitive Disclosure</strong>
            <span className="text-white/50 text-sm font-light">LLMs leaking customer or patient PII.</span>
          </div>
          <div className="border-l-2 border-[#D4AF37] pl-5 py-1">
            <strong className="text-white text-xs uppercase tracking-widest block mb-2">Audit Failure</strong>
            <span className="text-white/50 text-sm font-light">Inability to prove why a decision was allowed.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "The Solution",
    subtitle: "Configurable Runtime Enforcement.",
    content: (
      <div className="h-full flex flex-col justify-center space-y-12">
        <p className="text-2xl font-serif italic text-white/80 leading-relaxed pb-12 border-b border-white/10">
          Sovereign-AI sits in the runtime path of enterprise GenAI. It checks inputs and outputs, applies configurable policies, redacts sensitive data, detects prompt-injection attempts, and records audit evidence.
        </p>
        <div className="grid grid-cols-4 gap-6">
          {['Input Validation', 'PII Redaction', 'Output Control', 'Consent Checks'].map(feature => (
            <div key={feature} className="p-8 bg-white/[0.02] border border-white/10 flex items-center justify-center text-center hover:border-[#D4AF37]/50 transition-colors">
              <h3 className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Global Market Demand",
    subtitle: "Regulatory frameworks demanding runtime governance.",
    content: (
      <div className="grid grid-cols-2 gap-6 h-full content-center">
        <div className="p-8 border border-white/10 bg-white/[0.02] hover:border-[#D4AF37]/30 transition-colors">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] mb-3">EU AI Act & GDPR</h3>
          <p className="text-white/60 text-sm font-light leading-relaxed">High-risk system obligations, logging, human oversight, transparency.</p>
        </div>
        <div className="p-8 border border-white/10 bg-white/[0.02] hover:border-[#D4AF37]/30 transition-colors">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] mb-3">US NIST RMF & HIPAA</h3>
          <p className="text-white/60 text-sm font-light leading-relaxed">Voluntary AI risk profiles, PHI detection workflows, minimum necessary rules.</p>
        </div>
        <div className="p-8 border border-white/10 bg-white/[0.02] hover:border-[#D4AF37]/30 transition-colors">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] mb-3">India DPDP & RBI/BFSI</h3>
          <p className="text-white/60 text-sm font-light leading-relaxed">Sovereign data protection, BFSI specific AI directives.</p>
        </div>
        <div className="p-8 border border-white/10 bg-white/[0.02] hover:border-[#D4AF37]/30 transition-colors">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] mb-3">APAC / Singapore PDPA</h3>
          <p className="text-white/60 text-sm font-light leading-relaxed">Consent signaling, cross-border evidence.</p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "The Product",
    subtitle: "A Three-Tier Policy Engine.",
    content: (
      <div className="flex flex-col h-full justify-center space-y-8">
        <div className="flex gap-8 items-center border-b border-white/10 pb-8">
          <div className="w-16 h-16 shrink-0 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center text-lg font-mono tracking-widest">T1</div>
          <div className="flex-1">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-white mb-2">Regex & Heuristics</h3>
            <p className="text-sm text-white/50 font-light leading-relaxed">Fast deterministic checks for obvious patterns and lengths. Low cost, high throughput.</p>
          </div>
        </div>
        <div className="flex gap-8 items-center border-b border-white/10 pb-8">
          <div className="w-16 h-16 shrink-0 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center text-lg font-mono tracking-widest">T2</div>
          <div className="flex-1">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-white mb-2">Semantic & Vector Checks</h3>
            <p className="text-sm text-white/50 font-light leading-relaxed">Embeddings-backed intention, similarity, and domain-risk detection.</p>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="w-16 h-16 shrink-0 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center text-lg font-mono tracking-widest">T3</div>
          <div className="flex-1">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-white mb-2">LangGraph Agent Review</h3>
            <p className="text-sm text-white/50 font-light leading-relaxed">Deeper reasoning for ambiguous edge cases, tools, and fallback mapping.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "The Moat: Policy Packs",
    subtitle: "Turning custom platform deployments into repeatable SaaS SKUs.",
    content: (
      <div className="grid grid-cols-3 gap-6 h-full content-center">
        {['BFSI Pack', 'DPDP Pack', 'HIPAA/PHI Pack', 'UK GDPR Pack', 'Legal Pack', 'Agentic AI Pack'].map(pack => (
          <div key={pack} className="bg-white/[0.02] border border-white/10 p-10 flex flex-col items-center text-center justify-center group hover:bg-[#D4AF37]/5 transition-colors">
            <div className="w-10 h-[1px] bg-[#D4AF37] mb-6 group-hover:w-16 transition-all duration-300"></div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">{pack}</h4>
            <span className="text-[9px] text-white/40 mt-4 font-mono uppercase tracking-[0.2em]">Configured Rules & Evidence</span>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 7,
    title: "Buyer Personas & ICP",
    subtitle: "Selling to the Global Enterprise C-Suite.",
    content: (
      <div className="flex flex-col justify-center h-full">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-4 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-normal">Buyer</th>
              <th className="py-4 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-normal">Core Pain</th>
              <th className="py-4 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-normal">Messaging Narrative</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <tr className="hover:bg-white/[0.02] transition-colors">
              <td className="py-8 text-white uppercase tracking-wider text-xs font-bold">CISO / Security Head</td>
              <td className="py-8 text-white/60 font-light text-sm">Prompt injection, data leakage</td>
              <td className="py-8 font-serif italic text-white/80 text-lg">Control AI inputs and outputs at the boundary.</td>
            </tr>
            <tr className="hover:bg-white/[0.02] transition-colors">
              <td className="py-8 text-white uppercase tracking-wider text-xs font-bold">DPO / Chief Compliance</td>
              <td className="py-8 text-white/60 font-light text-sm">Regulatory defensibility, missing evidence</td>
              <td className="py-8 font-serif italic text-white/80 text-lg">Turn governance policies into undeniable runtime logs.</td>
            </tr>
            <tr className="hover:bg-white/[0.02] transition-colors">
              <td className="py-8 text-white uppercase tracking-wider text-xs font-bold">Head of Engineering</td>
              <td className="py-8 text-white/60 font-light text-sm">Latency overhead, scalability</td>
              <td className="py-8 font-serif italic text-white/80 text-lg">A centralized high-performance gateway, not developer fragmented.</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    id: 8,
    title: "Competitive Landscape",
    subtitle: "Differentiated by deployment capability and governance.",
    content: (
      <div className="h-full flex flex-col justify-center">
        <div className="space-y-10">
          <div className="border-l focus:border-white/20 border-[#D4AF37] pl-8">
            <strong className="block text-xs uppercase tracking-widest text-white mb-3">vs. Open Source (NeMo)</strong>
            <span className="text-lg text-white/60 font-serif italic leading-relaxed">Sovereign-AI is fully productized with dashboards, RBAC, and policy packs.</span>
          </div>
          <div className="border-l border-[#D4AF37] pl-8">
            <strong className="block text-xs uppercase tracking-widest text-white mb-3">vs. Cloud Safety APIs</strong>
            <span className="text-lg text-white/60 font-serif italic leading-relaxed">We are model-agnostic and work in fully air-gapped private deployments (VPC/On-prem).</span>
          </div>
          <div className="border-l border-[#D4AF37] pl-8">
            <strong className="block text-xs uppercase tracking-widest text-white mb-3">vs. Privacy Data Tools</strong>
            <span className="text-lg text-white/60 font-serif italic leading-relaxed">Broader scope than just PII masking—we address injection, agent flow constraints, and governance audit logs.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "Commercial Strategy",
    subtitle: "Land and Expand approach for high-ACV enterprise.",
    content: (
      <div className="h-full grid grid-cols-2 gap-8 content-center">
        <div className="bg-[#D4AF37] text-black p-12 flex flex-col justify-between aspect-square hover:-translate-y-1 transition-transform duration-300">
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6 border-b border-black/20 pb-4">Phase I: Land</h3>
            <h4 className="text-4xl font-serif mb-4">Paid Pilot</h4>
            <p className="text-sm font-medium text-black/70">4-6 weeks to secure 1 GTM AI App</p>
          </div>
          <div className="text-6xl font-light">$25k<span className="text-2xl text-black/50 ml-2 uppercase font-sans tracking-widest text-[10px]">Baseline</span></div>
        </div>
        <div className="bg-white/[0.02] border border-white/10 p-12 flex flex-col justify-between aspect-square hover:-translate-y-1 transition-transform duration-300 hover:border-[#D4AF37]/50">
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-6 border-b border-white/10 pb-4">Phase II: Expand</h3>
            <h4 className="text-4xl font-serif text-white mb-4">Enterprise Label</h4>
            <p className="text-sm font-light text-white/50">Annual recurring cross-application licensing</p>
          </div>
          <div className="text-6xl font-light text-white">$200k+ <span className="text-sm text-[#D4AF37] font-mono tracking-widest uppercase ml-2">ARR</span></div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: "The Roadmap",
    subtitle: "Where we are heading in 12-18 months.",
    content: (
      <div className="flex flex-col justify-center h-full">
        <div className="pl-6 border-l border-[#D4AF37]/30 space-y-10 py-4">
          <div className="relative">
            <span className="absolute -left-[30px] top-2.5 w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37]"></span>
            <span className="text-xl font-serif text-white tracking-wide">Policy Pack Marketplace Launch</span>
          </div>
          <div className="relative opacity-60 hover:opacity-100 transition-opacity">
            <span className="absolute -left-[29px] top-2.5 w-1.5 h-1.5 bg-white/40 rounded-full"></span>
            <span className="text-xl font-serif text-white tracking-wide">Compliance Evidence Auto-Export (SOC2/ISO)</span>
          </div>
          <div className="relative opacity-60 hover:opacity-100 transition-opacity">
            <span className="absolute -left-[29px] top-2.5 w-1.5 h-1.5 bg-white/40 rounded-full"></span>
            <span className="text-xl font-serif text-white tracking-wide">Benchmark Metrics Dashboard Expansion</span>
          </div>
          <div className="relative opacity-60 hover:opacity-100 transition-opacity">
            <span className="absolute -left-[29px] top-2.5 w-1.5 h-1.5 bg-white/40 rounded-full"></span>
            <span className="text-xl font-serif text-white tracking-wide">Cloud SIEM Integrations (Splunk, Datadog)</span>
          </div>
        </div>
      </div>
    )
  }
];

export function PitchDeck() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide(prev => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setActiveSlide(prev => Math.max(prev - 1, 0));

  return (
    <div className="max-w-6xl mx-auto py-12 px-8 h-full flex flex-col">
      <div className="flex justify-between items-center mb-8 shrink-0">
        <div className="font-mono text-xs tracking-widest text-white/40">SLIDE <span className="text-[#D4AF37]">{activeSlide + 1}</span> OF {slides.length}</div>
        <div className="flex space-x-2">
          <button onClick={prevSlide} disabled={activeSlide === 0} className="p-3 border border-white/10 hover:border-white/30 disabled:opacity-20 transition-colors">
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button onClick={nextSlide} disabled={activeSlide === slides.length - 1} className="p-3 border border-white/10 hover:border-white/30 disabled:opacity-20 transition-colors">
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 bg-white/[0.02] border border-white/10 flex flex-col">
        <div className="px-12 py-10 border-b border-white/10 shrink-0">
          <h2 className="text-3xl font-serif text-white">{slides[activeSlide].title}</h2>
          {slides[activeSlide].subtitle && <p className="text-white/40 text-sm font-light uppercase tracking-widest mt-4">{slides[activeSlide].subtitle}</p>}
        </div>
        <div className="flex-1 p-12 overflow-y-auto">
          {slides[activeSlide].content}
        </div>
      </div>
    </div>
  );
}
