import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(req: NextRequest) {
  try {
    const { event, page, plan, billingPeriod, email, amount, metadata } = await req.json();

    if (!event) {
      return NextResponse.json(
        { error: 'Event type is required' },
        { status: 400 }
      );
    }

    // Store tracking event in database
    await pool.query(
      `INSERT INTO tracking_events (event, page, plan, billing_period, email, amount, metadata, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())`,
      [event, page, plan, billingPeriod, email, amount, metadata ? JSON.stringify(metadata) : null]
    );

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error tracking event:', error);
    return NextResponse.json(
      { error: 'Failed to track event' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Tracking endpoint' });
}
