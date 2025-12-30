'use client';
import React from 'react';
import { Zap } from 'lucide-react';
import type { CompileButtonProps } from '@/types';

export default function CompileButton({ onClick, isCompiling }: CompileButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isCompiling}
      className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-slate-700 disabled:text-slate-500 text-slate-900 font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
    >
      <Zap className="w-5 h-5" />
      {isCompiling ? 'Compiling Reality...' : 'Compile Reality'}
    </button>
  );
}