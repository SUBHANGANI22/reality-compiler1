'use client';

import React from 'react';
import { Mic } from 'lucide-react';
import type { AudioInputProps, InputFile } from '@/types';

const AudioInput: React.FC<AudioInputProps> = ({ onUpload }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const input: InputFile = {
        type: 'audio',
        file,
        name: file.name,
      };

      onUpload(input);
    }
  };

  return (
    <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 bg-slate-800/50 hover:border-teal-500 transition-colors cursor-pointer">
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        className="hidden"
        id="audio-upload"
      />
      <label
        htmlFor="audio-upload"
        className="cursor-pointer flex flex-col items-center gap-3"
      >
        <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center">
          <Mic className="w-6 h-6 text-teal-500" />
        </div>

        <div className="text-center">
          <div className="text-sm font-medium text-white mb-1">
            Audio Input
          </div>
          <div className="text-xs text-slate-400">
            Voice explanation or recording
          </div>
        </div>

        <div className="text-xs text-slate-500 mt-2">
          Drop file or click to browse
        </div>
      </label>
    </div>
  );
};

export default AudioInput;
