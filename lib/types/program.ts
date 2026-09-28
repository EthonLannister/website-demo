import { SupportedLocale } from './common';

export type TourMode = 'corporate' | 'emba' | 'delegation';

export interface ProgramTrack {
  id: string;
  mode: TourMode;
  title: string;
  badge: string;
  duration: string;
  description: string;
  highlights: string[];
  targetAudience: string;
  deliverables: string[];
}

export interface DiagnosticInput {
  decision: string;
  audience: string;
  timing: string;
  evidence: string;
}

export interface DiagnosticResult {
  recommendedTrack: TourMode | string;
  title: string;
  rationale: string;
  recommendedDestinations: string[];
  suggestedDuration: string;
}
