'use client';
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import type { RiskListProps } from '@/types';

export default function RiskList({ risks }: RiskListProps) {
  return (
    <div className="space-y-2">
      {risks.map((risk, idx) => (
        <div key={idx} className="bg-slate-800 rounded-lg p-3 border border-slate-700">
          <div className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
              risk.severity === 'high' ? 'bg-red-500/10' :
              risk.severity === 'medium' ? 'bg-amber-500/10' : 'bg-blue-500/10'
            }`}>
              <AlertTriangle className={`w-4 h-4 ${
                risk.severity === 'high' ? 'text-red-500' :
                risk.severity === 'medium' ? 'text-amber-500' : 'text-blue-500'
              }`} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white mb-1">{risk.risk}</div>
              <div className="text-xs text-slate-400">{risk.mitigation}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}