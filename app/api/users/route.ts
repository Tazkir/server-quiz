import User from "@/models/user";
import connectMongoDB from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, score } = await request.json();
  await connectMongoDB();

  const existingUser = await User.findOne({ name });

  if (existingUser) {
    existingUser.score = score;
    await existingUser.save();
    return NextResponse.json(
      { message: "User Score Updated" },
      { status: 200 }
    );
  } else {
    await User.create({ name, score });
    return NextResponse.json({ message: "User Created" }, { status: 201 });
  }
}

export async function GET() {
  await connectMongoDB();
  const users = await User.find();
  return NextResponse.json({ users });
}
