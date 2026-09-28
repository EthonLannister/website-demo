import { DiagnosticInput } from '@/lib/types';

/**
 * Program Service
 * 
 * Provides program track definitions and diagnostic recommendations.
 * In V1 (Static Phase): Resolves tracks and rule-based diagnostic output.
 * In V2 (Dynamic CMS Phase): Fetches configurable tracks and AI-powered recommendations from API.
 */
export class ProgramService {
  /**
   * Evaluates diagnostic input choices and returns a tailored immersion recommendation.
   */
  async getDiagnosticRecommendation(
    input: DiagnosticInput,
    resultsDictionary?: {
      corporate: string;
      investorPolicy: string;
      university: string;
      industry: string;
    }
  ): Promise<string> {
    const { audience } = input;

    if (resultsDictionary) {
      if (audience === 'corporate') {
        return resultsDictionary.corporate;
      } else if (audience === 'investor-policy') {
        return resultsDictionary.investorPolicy;
      } else if (audience === 'university') {
        return resultsDictionary.university;
      } else {
        return resultsDictionary.industry;
      }
    }

    // Default fallback recommendation
    if (audience === 'corporate') {
      return 'Recommended Track: Executive Immersion (5–7 Days). Tailored for C-suite decision-makers evaluating AI vendor selection and commercial pilots.';
    } else if (audience === 'investor-policy') {
      return 'Recommended Track: Investor & Policy Mission (5 Days). Deep dives into valuation multiples, regulatory frameworks, and sovereign AI funds.';
    } else if (audience === 'university') {
      return 'Recommended Track: Academic & EMBA Study Mission (7 Days). Dual focus on academic research frontiers and practical enterprise scale.';
    } else {
      return 'Recommended Track: Sector-Specific Deep Dive (4–6 Days). Focuses on vertical applications in hardware, manufacturing, and automotive AI.';
    }
  }
}

export const programService = new ProgramService();
