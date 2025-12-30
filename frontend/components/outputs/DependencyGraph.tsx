'use client';

import React from 'react';
import { GitBranch } from 'lucide-react';
import type { DependencyGraphProps } from '@/types';

const DependencyGraph: React.FC<DependencyGraphProps> = ({ nodes }) => (
  <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
    <div className="flex items-center gap-2 mb-4">
      <GitBranch className="w-4 h-4 text-teal-500" />
      <h3 className="text-sm font-medium text-white">Decision Flow</h3>
    </div>

    <div className="space-y-4">
      {nodes.map((node, idx) => (
        <div key={idx} className="relative">
          {idx > 0 && (
            <div className="absolute left-4 -top-4 w-0.5 h-4 bg-slate-700" />
          )}
          <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700">
            <div className="text-sm text-white font-medium mb-1">
              {node.title}
            </div>
            <div className="text-xs text-slate-400">
              {node.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default DependencyGraph;
