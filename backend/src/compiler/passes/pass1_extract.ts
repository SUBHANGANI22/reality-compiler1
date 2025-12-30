// // compiler/passes/pass1_extract.ts
// import GeminiService from '../../services/gemini';
// import { IR } from '../ir';
// import type { ExtractedData, Goal, Entity } from '../../types/CompilerInput';

// export class ExtractionPass {
//   private gemini: GeminiService;

//   constructor() {
//     this.gemini = new GeminiService({ temperature: 0.3 });
//   }

//   async execute(ir: IR): Promise<IR> {
//     console.log('🔍 Pass 1: Extracting structured data from raw inputs...');

//     const rawContent = ir.getAllRawContent();
    
//     if (!rawContent.trim()) {
//       throw new Error('No content to extract from');
//     }

//     const extractionPrompt = `
// You are a Reality Compiler that extracts structured information from chaotic multimodal inputs.

// Analyze the following content and extract:
// 1. **Goals**: Clear, actionable objectives with priority levels
// 2. **Entities**: People, teams, organizations, systems involved
// 3. **Constraints**: Limitations, boundaries, requirements
// 4. **Requirements**: Specific needs or specifications
// 5. **Timeline**: Any mentioned deadlines or timeframes
// 6. **Resources**: Mentioned resources (budget, team size, tools, etc.)

// Content to analyze:
// ${rawContent}

// Return ONLY valid JSON in this exact format (no markdown, no explanations):
// {
//   "goals": [
//     {
//       "text": "goal description",
//       "priority": "High|Medium|Low",
//       "measurable": true|false,
//       "deadline": "optional deadline"
//     }
//   ],
//   "entities": [
//     {
//       "name": "entity name",
//       "role": "role description",
//       "type": "person|team|organization|system|stakeholder"
//     }
//   ],
//   "constraints": ["constraint 1", "constraint 2"],
//   "requirements": ["requirement 1", "requirement 2"],
//   "timeline": "overall timeline description",
//   "resources": ["resource 1", "resource 2"]
// }`;

//     try {
//       const response = await this.gemini.extractStructuredData(extractionPrompt, '');
//       const cleanedResponse = this.cleanJsonResponse(response);
//       const extracted: ExtractedData = JSON.parse(cleanedResponse);

//       // Validate and normalize extracted data
//       extracted.goals = this.normalizeGoals(extracted.goals || []);
//       extracted.entities = this.normalizeEntities(extracted.entities || []);
//       extracted.constraints = extracted.constraints || [];
//       extracted.requirements = extracted.requirements || [];

//       ir.setExtractedData(extracted);
      
//       console.log(`✅ Extracted: ${extracted.goals.length} goals, ${extracted.entities.length} entities`);
      
//       return ir;
//     } catch (error) {
//       console.error('❌ Extraction failed:', error);
//       throw new Error(`Extraction pass failed: ${error.message}`);
//     }
//   }

//   private cleanJsonResponse(response: string): string {
//     // Remove markdown code blocks if present
//     let cleaned = response.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    
//     // Remove any leading/trailing whitespace
//     cleaned = cleaned.trim();
    
//     // Find the first { and last }
//     const firstBrace = cleaned.indexOf('{');
//     const lastBrace = cleaned.lastIndexOf('}');
    
//     if (firstBrace !== -1 && lastBrace !== -1) {
//       cleaned = cleaned.substring(firstBrace, lastBrace + 1);
//     }
    
//     return cleaned;
//   }

//   private normalizeGoals(goals: any[]): Goal[] {
//     return goals.map(goal => ({
//       text: goal.text || '',
//       priority: this.normalizePriority(goal.priority),
//       measurable: goal.measurable ?? false,
//       deadline: goal.deadline
//     }));
//   }

//   private normalizePriority(priority: string): 'High' | 'Medium' | 'Low' {
//     const p = (priority || '').toLowerCase();
//     if (p.includes('high') || p.includes('critical')) return 'High';
//     if (p.includes('low')) return 'Low';
//     return 'Medium';
//   }

//   private normalizeEntities(entities: any[]): Entity[] {
//     return entities.map(entity => ({
//       name: entity.name || '',
//       role: entity.role || '',
//       type: this.normalizeEntityType(entity.type)
//     }));
//   }

//   private normalizeEntityType(type: string): 'person' | 'team' | 'organization' | 'system' | 'stakeholder' {
//     const t = (type || '').toLowerCase();
//     if (t.includes('team')) return 'team';
//     if (t.includes('org') || t.includes('company')) return 'organization';
//     if (t.includes('system') || t.includes('tool')) return 'system';
//     if (t.includes('person') || t.includes('individual')) return 'person';
//     return 'stakeholder';
//   }
// }