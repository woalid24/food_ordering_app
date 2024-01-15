import { connectMongodb } from "@/app/lib/mongodb";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
     await connectMongodb();
     await User.create({ email: email, password: password });
    return NextResponse.json({ message: "sucssful" }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ message: "an error occurred" }, { status: 500 });
  }
}
