'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import type { ConstraintListProps } from '@/types';

const ConstraintList: React.FC<ConstraintListProps> = ({ constraints }) => {
  return (
    <div className="space-y-2">
      {constraints.map((constraint: string, idx: number) => (
        <div
          key={idx}
          className="bg-slate-800 rounded-lg p-3 border border-slate-700"
        >
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-slate-300">
              {constraint}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConstraintList;
