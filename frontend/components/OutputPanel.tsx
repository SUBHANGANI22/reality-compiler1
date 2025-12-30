'use client';
import React from 'react';
import { Zap } from 'lucide-react';
import Section from './layout/Section';
import GoalCard from './outputs/GoalCard';
import EntityList from './outputs/EntityList';
import ExecutionSteps from './outputs/ExecutionSteps';
import DependencyGraph from './outputs/DependencyGraph';
import ConstraintList from './outputs/ConstraintList';
import RiskList from './outputs/RiskList';
import type { OutputPanelProps } from '@/types';


export default function OutputPanel({ output }: OutputPanelProps) {
  if (!output) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center px-8">
        <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mb-6">
          <Zap className="w-10 h-10 text-slate-700" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">No compiled output yet</h3>
        <p className="text-sm text-slate-400 max-w-md">
          Add inputs on the left and click "Compile Reality" to generate structured reasoning
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Section title="Goals & Objectives">
        <div className="space-y-3">
          {output.goals.map((goal, idx) => (
            <GoalCard key={idx} goal={goal.text} priority={goal.priority} />
          ))}
        </div>
      </Section>

      <Section title="Key Entities">
        <EntityList entities={output.entities} />
      </Section>

      <Section title="Execution Plan">
        <ExecutionSteps steps={output.steps} />
      </Section>

      <Section title="Decision Graph">
        <DependencyGraph nodes={output.graph} />
      </Section>

      <Section title="Constraints">
        <ConstraintList constraints={output.constraints} />
      </Section>

      <Section title="Risk Analysis">
        <RiskList risks={output.risks} />
      </Section>
    </div>
  );
}