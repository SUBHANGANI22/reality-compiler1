'use client';
import React from 'react';
import { Target } from 'lucide-react';
import type { GoalCardProps } from '@/types';

export default function GoalCard({ goal, priority }: GoalCardProps) {
  return (
    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-teal-500/50 transition-colors">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Target className="w-4 h-4 text-teal-500" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-sm font-medium text-white">{goal}</h4>
            <span className="text-xs px-2 py-0.5 bg-teal-500/20 text-teal-400 rounded">
              {priority}
            </span>
          </div>
          <p className="text-xs text-slate-400">Target outcome with measurable criteria</p>
        </div>
      </div>
    </div>
  );
}