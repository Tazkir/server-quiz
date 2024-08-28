import Logs from "@/models/logs";
import connectMongoDB from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, score, userAnswer } = await request.json();
  await connectMongoDB();
  await Logs.create({ name, score, userAnswer });
  return NextResponse.json({ message: "Logs Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const logs = await Logs.find();
  return NextResponse.json({ logs });
}
