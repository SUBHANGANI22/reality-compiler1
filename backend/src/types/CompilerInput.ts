// types/CompilerInput.ts

export interface MultimodalInput {
  text?: string;
  images?: ImageInput[];
  audio?: AudioInput[];
}

export interface ImageInput {
  data: string; // base64
  mimeType: string;
  filename: string;
}

export interface AudioInput {
  data: string; // base64
  mimeType: string;
  filename: string;
  transcription?: string;
}

export interface CompilerInput {
  inputs: MultimodalInput;
  metadata?: {
    userId?: string;
    timestamp?: string;
    context?: string;
  };
}

// Intermediate Representation (IR)
export interface IntermediateRepresentation {
  raw: {
    text: string[];
    imageDescriptions: string[];
    audioTranscriptions: string[];
  };
  extracted: ExtractedData;
  validated: ValidationResult;
  risks: RiskAnalysis;
}

export interface ExtractedData {
  goals: Goal[];
  entities: Entity[];
  constraints: string[];
  requirements: string[];
  timeline?: string;
  resources?: string[];
}

export interface Goal {
  text: string;
  priority: 'High' | 'Medium' | 'Low';
  measurable: boolean;
  deadline?: string;
}

export interface Entity {
  name: string;
  role: string;
  type: 'person' | 'team' | 'organization' | 'system' | 'stakeholder';
}

export interface ValidationResult {
  isValid: boolean;
  completeness: number; // 0-100
  clarity: number; // 0-100
  feasibility: number; // 0-100
  issues: ValidationIssue[];
  suggestions: string[];
}

export interface ValidationIssue {
  severity: 'error' | 'warning' | 'info';
  message: string;
  field?: string;
}

export interface RiskAnalysis {
  risks: Risk[];
  overallRiskScore: number; // 0-100
  criticalRisks: number;
}

export interface Risk {
  risk: string;
  severity: 'high' | 'medium' | 'low';
  probability: number; // 0-100
  impact: number; // 0-100
  mitigation: string;
  category: string;
}

// Final Compiled Output
export interface CompiledOutput {
  goals: Goal[];
  entities: Entity[];
  steps: ExecutionStep[];
  graph: GraphNode[];
  constraints: string[];
  risks: Risk[];
  metadata: {
    compiledAt: string;
    version: string;
    confidence: number;
  };
}

export interface ExecutionStep {
  action: string;
  description: string;
  duration: string;
  dependencies?: string[];
  assignee?: string;
  phase: number;
}

export interface GraphNode {
  id: string;
  title: string;
  description: string;
  type: 'decision' | 'action' | 'milestone' | 'gate';
  dependencies?: string[];
}

// types/CompilerInput.ts

// export interface CompilerInput {
//   textInput?: string;
//   imageFiles?: FileInput[];
//   audioFiles?: FileInput[];
// }

// export interface FileInput {
//   data: string; // base64 encoded
//   mimeType: string;
//   filename: string;
// }

// export interface Goal {
//   text: string;
//   priority: 'High' | 'Medium' | 'Low';
// }

// export interface Entity {
//   name: string;
//   role: string;
// }

// export interface ExecutionStep {
//   action: string;
//   description: string;
//   duration: string;
// }

// export interface GraphNode {
//   title: string;
//   description: string;
// }

// export interface Risk {
//   risk: string;
//   severity: 'high' | 'medium' | 'low';
//   mitigation: string;
// }

// export interface CompiledOutput {
//   goals: Goal[];
//   entities: Entity[];
//   steps: ExecutionStep[];
//   graph: GraphNode[];
//   constraints: string[];
//   risks: Risk[];
// }

// // Intermediate Representation
// export interface IR {
//   rawInputs: {
//     text?: string;
//     images?: string[];
//     audio?: string[];
//   };
//   extracted?: ExtractedData;
//   validated?: ValidatedData;
//   risks?: Risk[];
// }

// export interface ExtractedData {
//   goals: Goal[];
//   entities: Entity[];
//   constraints: string[];
//   requirements: string[];
//   context: string;
// }

// export interface ValidatedData {
//   goals: Goal[];
//   entities: Entity[];
//   steps: ExecutionStep[];
//   graph: GraphNode[];
//   constraints: string[];
//   feasibilityScore: number;
//   gaps: string[];
// }