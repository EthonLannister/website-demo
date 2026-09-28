import { NextRequest, NextResponse } from 'next/server';
import { leadService } from '@/lib/services';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = await leadService.submitLead(body);

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (err: any) {
    console.error('Error handling lead submission:', err);
    return NextResponse.json(
      { success: false, message: err.message || 'Server error occurred' },
      { status: 500 }
    );
  }
}

