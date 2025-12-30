'use client';

import React, { useState } from 'react';
import UploadPanel from '@/components/UploadPanel';
import CompileButton from '@/components/CompileButton';
import OutputPanel from '@/components/OutputPanel';
import Header from '@/components/layout/Header';
import Section from '@/components/layout/Section';
import { InputFile,CompiledOutput } from '@/types';

export default function RealityCompiler() {
  const [inputs, setInputs] = useState<InputFile[]>([]);
  const [textValue, setTextValue] = useState<string>('');
  const [output, setOutput] = useState<CompiledOutput | null>(null);
  const [isCompiling, setIsCompiling] = useState<boolean>(false);

  const handleUpload = (input: InputFile) => {
    setInputs([...inputs, input]);
  };

  const handleCompile = () => {
    if (inputs.length === 0 && !textValue.trim()) {
      return;
    }

    setIsCompiling(true);
    
    // Simulate compilation
    setTimeout(() => {
      setOutput({
        goals: [
          { text: "Launch MVP within 3 months", priority: "High" },
          { text: "Achieve 80% user satisfaction", priority: "High" },
          { text: "Establish market presence", priority: "Medium" }
        ],
        entities: [
          { name: "Product Team", role: "Development & Design" },
          { name: "Marketing Team", role: "Go-to-market Strategy" },
          { name: "Target Users", role: "Early Adopters" }
        ],
        steps: [
          { 
            action: "Requirements Analysis", 
            description: "Analyze all inputs and extract core requirements",
            duration: "1 week"
          },
          { 
            action: "System Design", 
            description: "Design architecture and user flows",
            duration: "2 weeks"
          },
          { 
            action: "Development Sprint", 
            description: "Implement core features and functionality",
            duration: "6 weeks"
          },
          { 
            action: "Testing & QA", 
            description: "Comprehensive testing and bug fixes",
            duration: "2 weeks"
          },
          { 
            action: "Beta Launch", 
            description: "Release to selected early adopters",
            duration: "1 week"
          }
        ],
        graph: [
          { title: "Input Analysis", description: "Process multimodal inputs" },
          { title: "Goal Extraction", description: "Identify primary objectives" },
          { title: "Constraint Mapping", description: "Map limitations and boundaries" },
          { title: "Strategy Synthesis", description: "Generate execution strategy" },
          { title: "Risk Assessment", description: "Evaluate potential risks" }
        ],
        constraints: [
          "Budget limited to $50k for MVP phase",
          "Team size capped at 5 members",
          "Must comply with GDPR regulations",
          "Technology stack limited to approved frameworks"
        ],
        risks: [
          { 
            risk: "Timeline Delays", 
            severity: "high",
            mitigation: "Build buffer time and prioritize core features"
          },
          { 
            risk: "Resource Constraints", 
            severity: "medium",
            mitigation: "Identify backup resources and contractors"
          },
          { 
            risk: "Market Competition", 
            severity: "medium",
            mitigation: "Focus on unique value proposition"
          }
        ]
      });
      setIsCompiling(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-88px)]">
        {/* Left Panel - Inputs */}
        <div className="border-r border-slate-800 overflow-y-auto">
          <div className="p-6">
            <Section title="Raw Reality Inputs">
              <UploadPanel 
                inputs={inputs}
                onUpload={handleUpload}
                textValue={textValue}
                onTextChange={setTextValue}
              />
            </Section>
            
            <div className="mt-6">
              <CompileButton onClick={handleCompile} isCompiling={isCompiling} />
            </div>
          </div>
        </div>

        {/* Right Panel - Output */}
        <div className="bg-slate-900/30 overflow-y-auto">
          <div className="p-6">
            <Section title="Compiled Reasoning Output">
              <OutputPanel output={output} />
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}