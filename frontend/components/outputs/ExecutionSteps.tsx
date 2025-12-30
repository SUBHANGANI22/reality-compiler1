'use client';

import React from 'react';
import { Clock } from 'lucide-react';
import type { ExecutionStepsProps, ExecutionStep } from '@/types';

const ExecutionSteps: React.FC<ExecutionStepsProps> = ({ steps }) => {
  return (
    <div className="space-y-3">
      {steps.map((step: ExecutionStep, idx: number) => (
        <div
          key={idx}
          className="bg-slate-800 rounded-lg p-4 border border-slate-700"
        >
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-teal-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-teal-500">
                {idx + 1}
              </span>
            </div>

            <div className="flex-1">
              <h4 className="text-sm font-medium text-white mb-1">
                {step.action}
              </h4>

              <p className="text-xs text-slate-400 mb-2">
                {step.description}
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-3 h-3" />
                <span>{step.duration}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExecutionSteps;
