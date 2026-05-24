import React from 'react';
import { ShieldCheck, Scale, FileSearch, ArrowRight, Zap } from 'lucide-react';

export function BFSIPager() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-10">
      {/* Header */}
      <div className="bg-[#D4AF37] text-black p-12 mb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 border border-black/10 rounded-full opacity-20"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black/5 border border-black/10 text-black text-[10px] font-bold font-mono uppercase tracking-[0.2em] mb-6">
            <ShieldCheck className="w-4 h-4 opacity-70" /> <span>BFSI Sector Focus</span>
          </div>
          <h1 className="text-5xl font-serif mb-6 leading-tight">Sovereign-AI <br/><span className="text-black/60 italic">for BFSI</span></h1>
          <p className="text-xl text-black/80 max-w-2xl font-light leading-relaxed">
            Deploy GenAI safely in financial services. Audit-ready runtime governance for banking, insurance, and lending.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-8 space-y-12">
          <section>
            <h2 className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] mb-6 pb-4 border-b border-white/10">The Challenge</h2>
            <p className="text-white/80 leading-relaxed text-lg font-serif italic">
              Financial institutions face intense pressure to adopt LLMs for customer support and advisor copilots, yet they are blocked by strict constraints on customer data leakage (DPDP, GDPR), model hallucinations providing financial advice, and audit requirements. Static documentation is no longer sufficient; regulators demand <strong className="text-[#D4AF37] font-normal not-italic">runtime evidence</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] mb-6 pb-4 border-b border-white/10">How It Works</h2>
            <div className="space-y-6">
              <div className="flex bg-white/[0.02] border border-white/10 p-6 hover:border-[#D4AF37]/30 transition-colors">
                <FileSearch className="w-6 h-6 text-[#D4AF37] shrink-0 mr-6 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">DPDP & PII Redaction</h3>
                  <p className="text-white/60 mt-2 font-light leading-relaxed text-sm">Automatically detects and masks PAN, Aadhaar, UPI, and bank account data before it ever reaches the LLM.</p>
                </div>
              </div>
              <div className="flex bg-white/[0.02] border border-white/10 p-6 hover:border-[#D4AF37]/30 transition-colors">
                <Scale className="w-6 h-6 text-[#D4AF37] shrink-0 mr-6 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">Financial Advice Guardrails</h3>
                  <p className="text-white/60 mt-2 font-light leading-relaxed text-sm">Output safety rules prevent the AI from generating unauthorized investment advice or hallucinating loan terms.</p>
                </div>
              </div>
              <div className="flex bg-white/[0.02] border border-white/10 p-6 hover:border-[#D4AF37]/30 transition-colors">
                <Zap className="w-6 h-6 text-[#D4AF37] shrink-0 mr-6 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">Zero-Trust Environment</h3>
                  <p className="text-white/60 mt-2 font-light leading-relaxed text-sm">Private VPC/on-premise deployment ensures sensitive financial data never leaves your infrastructure.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="col-span-4">
          <div className="bg-white/[0.02] border border-white/10 p-8 sticky top-8">
            <h3 className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.2em] mb-6">Core Use Cases</h3>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-white/40 mr-3 shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm font-light">Banking Chatbots</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-white/40 mr-3 shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm font-light">Loan & Underwriting Copilots</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-white/40 mr-3 shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm font-light">Wealth Advisory Assistants</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-4 h-4 text-white/40 mr-3 shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm font-light">KYC Document Processors</span>
              </li>
            </ul>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-4">GTM Acceleration</h3>
              <p className="text-sm text-white/60 mb-6 font-serif italic">Launch a secure GenAI pilot in 4-6 weeks.</p>
              <button className="w-full bg-white text-black py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-colors">
                Request a Paid Pilot
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
