'use client';
import React from 'react';
import { FileText } from 'lucide-react';
import type { TextInputProps } from '@/types';

export default function TextInput({ value, onChange }: TextInputProps) {
  return (
    <div className="bg-slate-800/50 rounded-lg border border-slate-700">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700">
        <FileText className="w-4 h-4 text-teal-500" />
        <div className="text-sm font-medium text-white">Reality Description</div>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Describe your scenario, problem, or context in natural language. Include goals, constraints, stakeholders, and any relevant details..."
        className="w-full bg-transparent text-sm text-slate-300 placeholder-slate-600 p-4 focus:outline-none resize-none font-mono"
        rows={8}
      />
    </div>
  );
}