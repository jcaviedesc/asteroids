import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await request.json();
  const { start_date, end_date } = res.query;
  return NextResponse.json({ res });
}
