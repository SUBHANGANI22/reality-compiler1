'use client';   
import React from 'react';
import { Image } from 'lucide-react';
import type { ImageInputProps } from '@/types';

export default function ImageInput({ onUpload }: ImageInputProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload({ type: 'image', file, name: file.name });
    }
  };

  return (
    <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 bg-slate-800/50 hover:border-teal-500 transition-colors cursor-pointer">
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange}
        className="hidden" 
        id="image-upload"
      />
      <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center gap-3">
        <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center">
          <Image className="w-6 h-6 text-teal-500" />
        </div>
        <div className="text-center">
          <div className="text-sm font-medium text-white mb-1">Visual Input</div>
          <div className="text-xs text-slate-400">Whiteboard, sketch, or diagram</div>
        </div>
        <div className="text-xs text-slate-500 mt-2">Drop file or click to browse</div>
      </label>
    </div>
  );
}