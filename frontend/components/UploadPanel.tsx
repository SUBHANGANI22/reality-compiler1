
'use client';
import React, { useState } from 'react';
import { Upload, Mic, Image, FileText, Zap, AlertTriangle, Target, GitBranch, List, Clock } from 'lucide-react';

import AudioInput from './inputs/AudioInput';
import TextInput from './inputs/TextInput';
import ImageInput from './inputs/ImageInput';
import type { UploadPanelProps, InputFile } from '@/types';

const UploadPanel: React.FC<UploadPanelProps> = ({
inputs, onUpload, textValue, onTextChange }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-2 gap-4">
      <ImageInput onUpload={onUpload} />
      <AudioInput onUpload={onUpload} />
    </div>
    
    <TextInput value={textValue} onChange={onTextChange} />
    
    {inputs.length > 0 && (
      <div className="space-y-2">
        <div className="text-xs font-medium text-slate-400">Uploaded Inputs</div>
        <div className="space-y-2">
          {inputs.map((input, idx) => (
            <div key={idx} className="bg-slate-800 rounded-lg p-3 border border-slate-700 flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                input.type === 'image' ? 'bg-purple-500/10' : 'bg-teal-500/10'
              }`}>
                {input.type === 'image' ? (
                  <Image className="w-4 h-4 text-purple-500" />
                ) : (
                  <Mic className="w-4 h-4 text-teal-500" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-white truncate">{input.name}</div>
                <div className="text-xs text-slate-400 capitalize">{input.type} input</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);
export default UploadPanel;