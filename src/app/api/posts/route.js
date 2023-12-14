import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";

export async function GET() {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json({
      success: true,
      posts,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(request, response) {
  try {
    const { text } = await request.json();
    if (!text)
      return NextResponse.json({
        success: false,
        error: "You must provide text to post.",
      });
    const post = await prisma.post.create({ data: { text } });
    return NextResponse.json({
      success: true,
      post,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
