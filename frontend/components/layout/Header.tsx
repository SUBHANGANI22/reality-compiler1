// import React, { useState } from 'react';
// import { Upload, Mic, Image, FileText, Zap, AlertTriangle, Target, GitBranch, List, Clock } from 'lucide-react';

// // Layout Components
// const Header = () => (
//   <header className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 px-6 py-4">
//     <div className="flex items-center justify-between">
//       <div className="flex items-center gap-3">
//         <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
//           <Zap className="w-6 h-6 text-slate-900" />
//         </div>
//         <div>
//           <h1 className="text-xl font-bold text-white">Reality Compiler</h1>
//           <p className="text-sm text-slate-400">Convert chaos into executable reasoning</p>
//         </div>
//       </div>
//       <div className="text-xs text-slate-500 font-mono">v0.1.0</div>
//     </div>
//   </header>
// );
// export default Header;

// components/layout/Header.tsx
import React from 'react';
import { Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-slate-900" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Reality Compiler</h1>
            <p className="text-sm text-slate-400">Convert chaos into executable reasoning</p>
          </div>
        </div>
        <div className="text-xs text-slate-500 font-mono">v0.1.0</div>
      </div>
    </header>
  );
}