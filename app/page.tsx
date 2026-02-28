'use client';

import React from 'react';
import GhostNav from '@/components/ui/GhostNav';
import HeroSection from '@/components/sections/HeroSection';
import CraftSection from '@/components/sections/CraftSection';
import ProofSection from '@/components/sections/ProofSection';
import DialogueSection from '@/components/sections/DialogueSection';
import portfolioData from '@/dataset/portfolio_data.json';

export default function Home() {
  return (
    <>
      <GhostNav />
      <main className="page-container">
        <div className="story-column">
          <HeroSection />
          <CraftSection />
          <ProofSection projects={portfolioData.projects} />
          <DialogueSection />
        </div>
      </main>
    </>
  );
}
