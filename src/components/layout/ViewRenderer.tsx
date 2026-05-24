import React from 'react';
import { ViewKey } from '../../types';
import { ExecutiveBrief } from '../views/ExecutiveBrief';
import { PitchDeck } from '../views/PitchDeck';
import { BFSIPager } from '../views/BFSIPager';
import { ArchitectureDiagram } from '../views/ArchitectureDiagram';
import { PilotProposal } from '../views/PilotProposal';

interface ViewRendererProps {
  view: ViewKey;
}

export function ViewRenderer({ view }: ViewRendererProps) {
  switch (view) {
    case 'executive-brief':
      return <ExecutiveBrief />;
    case 'pitch-deck':
      return <PitchDeck />;
    case 'bfsi-pager':
      return <BFSIPager />;
    case 'architecture':
      return <ArchitectureDiagram />;
    case 'pilot-proposal':
      return <PilotProposal />;
    default:
      return <ExecutiveBrief />;
  }
}
