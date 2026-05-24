import React from 'react';
import { ArrowDown, Box, Server, Shield, Hexagon } from 'lucide-react';

export function ArchitectureDiagram() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-10 flex flex-col h-full">
      <header className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl font-serif text-white tracking-tight">Technical Architecture</h1>
        <p className="text-white/50 text-lg mt-3 font-light">Model-agnostic runtime flow for enterprise GenAI governance.</p>
      </header>

      <div className="flex-1 bg-white/[0.02] border border-white/10 p-12 overflow-y-auto">
        
        {/* Client Application */}
        <div className="flex justify-center mb-8">
          <div className="w-72 bg-transparent border border-white/20 p-5 text-center relative z-10 flex flex-col items-center hover:border-white/40 transition-colors">
            <Box className="w-6 h-6 text-[#D4AF37] mx-auto mb-3" />
            <span className="font-bold text-white text-xs uppercase tracking-widest">Enterprise AI Application</span>
            <p className="text-[10px] text-white/40 mt-2 font-mono uppercase tracking-widest">Chatbot, Copilot, Agent</p>
          </div>
        </div>
        
        <div className="flex justify-center -my-4 relative z-0">
          <ArrowDown className="w-6 h-6 text-white/20" />
        </div>

        {/* API Layer */}
        <div className="flex justify-center mb-8 mt-4">
          <div className="w-[400px] bg-white/[0.05] border border-white/30 p-5 text-center relative hover:border-[#D4AF37]/50 transition-colors">
            <Server className="w-6 h-6 text-white mx-auto mb-3" />
            <span className="font-bold text-white text-xs uppercase tracking-widest">FastAPI Gateway</span>
            <p className="text-[10px] text-[#D4AF37] mt-2 font-mono uppercase tracking-widest">Zero-Trust / Protected Endpoints</p>
            
            {/* Control Tower Side Box attach */}
            <div className="absolute top-1/2 -right-8 lg:-right-56 transform -translate-y-1/2">
              <div className="hidden lg:flex items-center text-white/20">
                <span className="w-12 border-b border-dashed border-white/20"></span>
                <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-4 text-center w-40">
                  <span className="font-bold text-[#D4AF37] text-[10px] uppercase tracking-widest">Control Tower UI</span>
                  <p className="text-[9px] text-[#D4AF37]/60 mt-1 font-mono uppercase">Audit, Oversight</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center -my-4">
          <ArrowDown className="w-6 h-6 text-white/20" />
        </div>

        {/* Core Engine Box */}
        <div className="max-w-4xl mx-auto border border-[#D4AF37]/50 bg-black/50 p-10 relative mt-4">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black px-6 py-2 border border-[#D4AF37] font-mono text-[10px] text-[#D4AF37] uppercase tracking-[0.2em]">
            Sovereign-AI Core Engine
          </div>

          {/* Tier Router */}
          <div className="text-center mb-10 border-b border-white/10 pb-6">
            <span className="text-white/80 bg-white/5 border border-white/10 px-6 py-2 text-xs uppercase tracking-widest">Tier Router</span>
          </div>

          {/* Tiers */}
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-transparent border border-white/10 p-6 text-center flex flex-col items-center hover:border-white/30 transition-colors">
              <div className="w-10 h-10 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center text-sm font-mono tracking-widest mb-4">T1</div>
              <h3 className="font-bold text-white text-[11px] uppercase tracking-widest">Regex & Heuristics</h3>
              <p className="text-[10px] text-white/50 mt-3 font-light leading-relaxed">Fast, deterministic PII checks and known malicious-input screening.</p>
            </div>
            
            <div className="bg-transparent border border-white/10 p-6 text-center flex flex-col items-center hover:border-white/30 transition-colors">
              <div className="w-10 h-10 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center text-sm font-mono tracking-widest mb-4">T2</div>
              <h3 className="font-bold text-white text-[11px] uppercase tracking-widest">Semantic & Vector</h3>
              <p className="text-[10px] text-white/50 mt-3 font-light leading-relaxed">Domain-specific embedding comparison and intent detection.</p>
            </div>

            <div className="bg-transparent border border-white/10 p-6 text-center flex flex-col items-center hover:border-white/30 transition-colors">
              <div className="w-10 h-10 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center text-sm font-mono tracking-widest mb-4">T3</div>
              <h3 className="font-bold text-white text-[11px] uppercase tracking-widest">Agentic Review</h3>
              <p className="text-[10px] text-white/50 mt-3 font-light leading-relaxed">LangGraph ambiguity review and tool-use constraints.</p>
            </div>
          </div>

          {/* Policy Module */}
          <div className="mt-10 pt-8 border-t border-white/10 flex justify-center">
            <div className="bg-white/[0.02] border border-white/20 p-5 px-8 text-center flex items-center max-w-sm">
              <Shield className="w-5 h-5 text-white/60 mr-4" />
              <div className="text-left">
                <span className="font-bold text-white block text-[11px] uppercase tracking-widest mb-1">Policy Loader YAML</span>
                <span className="text-[9px] text-white/40 font-mono tracking-wider">Actions, Thresholds, Severity, Policy Packs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center -my-4 relative z-0 mt-4">
          <ArrowDown className="w-6 h-6 text-white/20" />
        </div>

        {/* Output */}
        <div className="flex justify-center mt-4">
          <div className="w-72 bg-transparent border border-white/20 p-5 text-center">
            <Hexagon className="w-6 h-6 text-[#D4AF37] mx-auto mb-3" />
            <span className="font-bold text-white text-xs uppercase tracking-widest">Enterprise LLM Provider</span>
            <p className="text-[10px] text-white/40 mt-2 font-mono uppercase tracking-widest">OpenAI, Azure, Bedrock, Vertex, Ollama</p>
          </div>
        </div>

      </div>
    </div>
  );
}
