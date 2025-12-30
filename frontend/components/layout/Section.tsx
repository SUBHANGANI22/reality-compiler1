// import React, { useState } from 'react';
// import { Upload, Mic, Image, FileText, Zap, AlertTriangle, Target, GitBranch, List, Clock } from 'lucide-react';

// const Section = ({ title, children, className = "" }) => (
//   <section className={`${className}`}>
//     <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">{title}</h2>
//     {children}
//   </section>
// );
// export default Section;


'use client';

import React from 'react';
import type { SectionProps } from '@/types';

const Section: React.FC<SectionProps> = ({
  title,
  children,
  className = '',
}) => {
  return (
    <section className={className}>
      <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
