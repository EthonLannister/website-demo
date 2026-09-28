import { NextRequest, NextResponse } from 'next/server';
import { dataRepo } from '@/lib/data';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.fullName || !body.workEmail || !body.company) {
      return NextResponse.json(
        { success: false, message: 'Please provide full name, work email, and company.' },
        { status: 400 }
      );
    }

    const result = await dataRepo.submitLead(body);

    return NextResponse.json(result, { status: 200 });
  } catch (err: any) {
    console.error('Error handling lead submission:', err);
    return NextResponse.json(
      { success: false, message: err.message || 'Server error occurred' },
      { status: 500 }
    );
  }
}
