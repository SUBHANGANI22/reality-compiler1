// compiler/ir.ts
import type { 
  IntermediateRepresentation, 
  ExtractedData, 
  ValidationResult, 
  RiskAnalysis 
} from '../types/CompilerInput';

export class IR implements IntermediateRepresentation {
  raw: {
    text: string[];
    imageDescriptions: string[];
    audioTranscriptions: string[];
  };
  
  extracted: ExtractedData;
  validated: ValidationResult;
  risks: RiskAnalysis;

  constructor() {
    this.raw = {
      text: [],
      imageDescriptions: [],
      audioTranscriptions: []
    };

    this.extracted = {
      goals: [],
      entities: [],
      constraints: [],
      requirements: []
    };

    this.validated = {
      isValid: false,
      completeness: 0,
      clarity: 0,
      feasibility: 0,
      issues: [],
      suggestions: []
    };

    this.risks = {
      risks: [],
      overallRiskScore: 0,
      criticalRisks: 0
    };
  }

  addRawText(text: string) {
    this.raw.text.push(text);
  }

  addImageDescription(description: string) {
    this.raw.imageDescriptions.push(description);
  }

  addAudioTranscription(transcription: string) {
    this.raw.audioTranscriptions.push(transcription);
  }

  setExtractedData(data: Partial<ExtractedData>) {
    this.extracted = { ...this.extracted, ...data };
  }

  setValidationResult(result: ValidationResult) {
    this.validated = result;
  }

  setRiskAnalysis(analysis: RiskAnalysis) {
    this.risks = analysis;
  }

  getAllRawContent(): string {
    return [
      ...this.raw.text,
      ...this.raw.imageDescriptions.map(d => `[IMAGE CONTENT]: ${d}`),
      ...this.raw.audioTranscriptions.map(t => `[AUDIO CONTENT]: ${t}`)
    ].join('\n\n');
  }

  getCompleteness(): number {
    let score = 0;
    const weights = {
      goals: 30,
      entities: 20,
      constraints: 20,
      requirements: 30
    };

    if (this.extracted.goals.length > 0) score += weights.goals;
    if (this.extracted.entities.length > 0) score += weights.entities;
    if (this.extracted.constraints.length > 0) score += weights.constraints;
    if (this.extracted.requirements.length > 0) score += weights.requirements;

    return score;
  }

  toJSON() {
    return {
      raw: this.raw,
      extracted: this.extracted,
      validated: this.validated,
      risks: this.risks
    };
  }
}