import React from 'react';
import { ViewKey } from '../../types';
import { 
  FileText, 
  Presentation, 
  Building2, 
  Network, 
  FileSignature 
} from 'lucide-react';

interface SidebarProps {
  currentView: ViewKey;
  onViewChange: (view: ViewKey) => void;
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const navItems = [
    { id: 'executive-brief', label: 'Executive Brief', icon: FileText },
    { id: 'pitch-deck', label: 'Pitch Deck', icon: Presentation },
    { id: 'bfsi-pager', label: 'BFSI One-Pager', icon: Building2 },
    { id: 'architecture', label: 'Architecture', icon: Network },
    { id: 'pilot-proposal', label: 'Pilot Proposal', icon: FileSignature },
  ] as const;

  return (
    <div className="w-64 border-r border-white/10 bg-[#050505] h-screen flex flex-col fixed left-0 top-0">
      <div className="p-6 border-b border-white/10">
        <h1 className="text-xl font-light tracking-[0.2em] text-white flex items-center gap-2">
          <span className="w-3 h-3 bg-[#D4AF37] rounded-full shrink-0"></span> VANTAGE
        </h1>
        <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">Asset Library</p>
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-sm transition-colors ${
                isActive 
                  ? 'bg-white/5 text-white border-l-2 border-[#D4AF37]' 
                  : 'text-white/50 hover:text-white border-l-2 border-transparent hover:bg-white/[0.02]'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-white/40'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="p-6 border-t border-white/10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8E6E1D] shrink-0"></div>
        <div className="text-left">
          <p className="text-xs text-white">Confidential</p>
          <p className="text-[10px] text-white/40 uppercase tracking-wider">Internal Use Only</p>
        </div>
      </div>
    </div>
  );
}
