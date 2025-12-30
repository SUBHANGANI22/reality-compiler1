export interface InputFile {
  type: 'image' | 'audio';
  file: File;
  name: string;
}

export interface Goal {
  text: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface Entity {
  name: string;
  role: string;
}

export interface ExecutionStep {
  action: string;
  description: string;
  duration: string;
}

export interface GraphNode {
  title: string;
  description: string;
}

export interface Risk {
  risk: string;
  severity: 'high' | 'medium' | 'low';
  mitigation: string;
}

export interface CompiledOutput {
  goals: Goal[];
  entities: Entity[];
  steps: ExecutionStep[];
  graph: GraphNode[];
  constraints: string[];
  risks: Risk[];
}

// Component Props Types
export interface UploadPanelProps {
  inputs: InputFile[];
  onUpload: (input: InputFile) => void;
  textValue: string;
  onTextChange: (value: string) => void;
}

export interface CompileButtonProps {
  onClick: () => void;
  isCompiling: boolean;
}

export interface OutputPanelProps {
  output: CompiledOutput | null;
}

export interface ImageInputProps {
  onUpload: (input: InputFile) => void;
}

export interface AudioInputProps {
  onUpload: (input: InputFile) => void;
}

export interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

export interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export interface GoalCardProps {
  goal: string;
  priority: string;
}

export interface EntityListProps {
  entities: Entity[];
}

export interface ConstraintListProps {
  constraints: string[];
}

export interface ExecutionStepsProps {
  steps: ExecutionStep[];
}

export interface DependencyGraphProps {
  nodes: GraphNode[];
}

export interface RiskListProps {
  risks: Risk[];
}