import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";

export async function PUT(request, response) {
  try {
    const { postId } = response.params;

    //extract text from body
    const { text } = await request.json();
    const post = await prisma.post.findFirst({ where: { id: postId } });

    if (!text)
      return NextResponse.json({
        success: false,
        error: "No post with that id found",
      });

    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { text },
    });

    return NextResponse.json({
      success: true,
      post: updatedPost,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function DELETE(request, response) {
  try {
    const { postId } = response.params;

    //extract text from body
    const { text } = await request.json();
    const post = await prisma.post.findFirst({ where: { id: postId } });

    if (!text)
      return NextResponse.json({
        success: false,
        error: "No post with that id found",
      });

    const deletePost = await prisma.post.delete({
      where: { id: postId },
    });

    return NextResponse.json({
      success: true,
      post: deletePost,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
