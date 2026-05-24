import { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { ViewRenderer } from './components/layout/ViewRenderer';
import { ViewKey } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewKey>('executive-brief');

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] flex font-sans overflow-hidden">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-1 ml-64 h-screen overflow-y-auto">
        <ViewRenderer view={currentView} />
      </main>
    </div>
  );
}
