import React from 'react';
import { Calendar, Briefcase, FileCheck, Landmark } from 'lucide-react';

export function PilotProposal() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-10 font-sans bg-[#050505] my-12 border border-white/10 relative">
      
      {/* Document Header */}
      <header className="border-b border-white/20 pb-8 mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-serif text-white tracking-tight">Paid Pilot Proposal</h1>
          <h2 className="text-xl text-[#D4AF37] mt-2 font-light">Sovereign-AI Runtime Governance Implementation</h2>
        </div>
        <div className="text-right">
          <div className="font-bold text-white uppercase tracking-widest text-sm">[COMPANY NAME]</div>
          <div className="text-xs text-white/50 font-mono mt-1 uppercase">[DATE]</div>
        </div>
      </header>

      <div className="space-y-10 text-white/80">
        
        {/* Objective */}
        <section>
          <h3 className="text-xl font-serif text-white mb-4 flex items-center tracking-tight">
            <span className="text-[#D4AF37] mr-3 font-mono text-sm">01.</span>
            Objective & Scope
          </h3>
          <p className="font-light leading-relaxed mb-6 text-white/70">
            The objective of this Proof of Concept (POC) is to integrate Sovereign-AI into one active Generative AI workflow at [Company Name]. This will demonstrate verifiable runtime control, PII redaction, prompt-injection defense, and auditability in a regulated enterprise environment.
          </p>
          <div className="bg-white/[0.02] border border-white/10 p-6">
            <strong className="block text-white mb-3 uppercase tracking-widest text-xs">Scope of Work:</strong>
            <ul className="list-none space-y-3 text-white/70 ml-2 font-light text-sm">
              <li className="flex"><span className="text-[#D4AF37] mr-3">―</span> Integration with 1 GenAI application (e.g. RAG system or Chatbot).</li>
              <li className="flex"><span className="text-[#D4AF37] mr-3">―</span> Tuning of 1 selected domain policy pack (e.g. BFSI or DPDP).</li>
              <li className="flex"><span className="text-[#D4AF37] mr-3">―</span> Establishment of the Control Tower dashboard for audit recording.</li>
            </ul>
          </div>
        </section>

        {/* Deliverables */}
        <section>
          <h3 className="text-xl font-serif text-white mb-6 flex items-center tracking-tight">
            <span className="text-[#D4AF37] mr-3 font-mono text-sm">02.</span>
            Key Deliverables
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-white/10 p-6 bg-transparent hover:border-[#D4AF37]/50 transition-colors group">
              <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">Red-Team Test Report</h4>
              <p className="text-sm font-light text-white/50">Summary of bypass attempts, precision/recall metrics, and false-positive optimization results.</p>
            </div>
            <div className="border border-white/10 p-6 bg-transparent hover:border-[#D4AF37]/50 transition-colors group">
              <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">Latency Benchmarks</h4>
              <p className="text-sm font-light text-white/50">P50 and P95 latency overhead metrics for Tier 1, 2, and 3 enforcement operations.</p>
            </div>
            <div className="border border-white/10 p-6 bg-transparent hover:border-[#D4AF37]/50 transition-colors group">
              <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">Compliance Logs</h4>
              <p className="text-sm font-light text-white/50">Sample export of structured audit traces detailing enforcement actions and policy execution.</p>
            </div>
            <div className="border border-white/10 p-6 bg-transparent hover:border-[#D4AF37]/50 transition-colors group">
              <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">Deployment Architecture</h4>
              <p className="text-sm font-light text-white/50">Sign-off ready VPC or on-premise reference architecture diagrams.</p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h3 className="text-xl font-serif text-white mb-8 flex items-center tracking-tight">
            <span className="text-[#D4AF37] mr-3 font-mono text-sm">03.</span>
            Timeline (4-6 Weeks)
          </h3>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-white/10">
            {['Discovery & Baseline', 'Policy Configuration', 'Integration', 'Measurement & Evidence', 'Expansion Plan'].map((phase, idx) => (
               <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                 <div className="flex items-center justify-center w-8 h-8 border border-[#D4AF37]/50 bg-black text-[#D4AF37] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-mono text-[10px] z-10 transition-colors group-hover:border-[#D4AF37]">0{idx + 1}</div>
                 <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/[0.02] p-5 border border-white/10 transition-colors group-hover:border-white/30">
                    <h4 className="font-bold text-white text-xs uppercase tracking-widest">{phase}</h4>
                 </div>
               </div>
            ))}
          </div>
        </section>

        {/* Commercials */}
        <section>
          <h3 className="text-xl font-serif text-white mb-6 flex items-center tracking-tight">
            <span className="text-[#D4AF37] mr-3 font-mono text-sm">04.</span>
            Commercials
          </h3>
          <div className="bg-transparent border border-[#D4AF37]/50 text-white p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] blur-[120px] opacity-[0.05] transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6 mb-6">
              <div>
                <h4 className="text-lg font-serif">Pilot Implementation Fee</h4>
                <p className="text-white/40 mt-1 font-light text-sm">One-time engagement for the 4-6 week POC.</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-serif text-[#D4AF37]">USD 25,000</div>
                <div className="text-xs font-mono text-white/40 mt-2 uppercase tracking-widest">~ INR 21L</div>
              </div>
            </div>
            <div className="relative z-10">
              <p className="text-sm text-white/50 font-light">
                <strong className="text-white font-medium uppercase tracking-widest text-[10px] mr-2">Note:</strong> The entire amount is fully adjustable against the first year's Annual Enterprise License upon successful conversion.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
