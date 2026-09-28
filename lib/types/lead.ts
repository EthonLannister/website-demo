export interface LeadSubmission {
  fullName: string;
  workEmail: string;
  company: string;
  phone?: string;
  jobTitle?: string;
  country?: string;
  programInterest?: string;
  companySize?: string;
  sourceChannel?: string;
  message?: string;
  contactPreference?: 'email' | 'phone';
}

export interface LeadSubmissionResult {
  success: boolean;
  message: string;
  submissionId?: string;
  errors?: Record<string, string>;
}
