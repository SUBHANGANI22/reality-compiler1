'use client';

import React from 'react';
import type { EntityListProps } from '@/types';

const EntityList: React.FC<EntityListProps> = ({ entities }) => (
  <div className="space-y-2">
    {entities.map((entity, idx) => (
      <div
        key={idx}
        className="bg-slate-800 rounded-lg p-3 border border-slate-700 flex items-center gap-3"
      >
        <div className="w-2 h-2 bg-blue-500 rounded-full" />
        <div className="flex-1">
          <div className="text-sm font-medium text-white">
            {entity.name}
          </div>
          <div className="text-xs text-slate-400">
            {entity.role}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default EntityList;
