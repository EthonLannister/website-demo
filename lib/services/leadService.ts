import { LeadSubmission, LeadSubmissionResult } from '@/lib/types';
import { dataRepo } from '@/lib/data';

/**
 * Lead Service
 * 
 * Handles incoming executive study tour briefs, inquiries, and customer contact data.
 * In V1 (Static Phase): Performs field validation and calls simulated repository.
 * In V2 (Dynamic CMS Phase): Directly inserts into PostgreSQL/Supabase table 'leads',
 * sends webhook notification to Slack/Lark/Email, and syncs to CRM (HubSpot/Salesforce).
 */
export class LeadService {
  /**
   * Validates required lead submission fields.
   */
  validateLead(lead: Partial<LeadSubmission>): { isValid: boolean; errors: Record<string, string> } {
    const errors: Record<string, string> = {};

    if (!lead.fullName || !lead.fullName.trim()) {
      errors.fullName = 'Full name is required.';
    }

    if (!lead.workEmail || !lead.workEmail.trim()) {
      errors.workEmail = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.workEmail.trim())) {
      errors.workEmail = 'Please provide a valid corporate email address.';
    }

    if (!lead.company || !lead.company.trim()) {
      errors.company = 'Company / Organization name is required.';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }

  /**
   * Submits a new lead inquiry.
   */
  async submitLead(lead: LeadSubmission): Promise<LeadSubmissionResult> {
    const validation = this.validateLead(lead);

    if (!validation.isValid) {
      return {
        success: false,
        message: 'Please complete all required fields.',
        errors: validation.errors
      };
    }

    // Call data repository layer (Static in V1, Supabase/CRM in V2)
    const result = await dataRepo.submitLead({
      fullName: lead.fullName,
      workEmail: lead.workEmail,
      company: lead.company,
      phone: lead.phone,
      jobTitle: lead.jobTitle,
      country: lead.country,
      programInterest: lead.programInterest || 'corporate',
      companySize: lead.companySize,
      sourceChannel: lead.sourceChannel,
      message: lead.message,
      contactPreference: lead.contactPreference || 'email'
    });

    return {
      success: result.success,
      message: result.message,
      submissionId: `LEAD-${Date.now()}`
    };
  }
}


export const leadService = new LeadService();
