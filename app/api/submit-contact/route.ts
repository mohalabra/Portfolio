import { NextResponse } from "next/server";
import { supabase } from "@/src/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const { name, email, message, rating } = await req.json();

    if (!message)
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );

    const { error } = await supabase
      .from("feedback")
      .insert([{ name, email, message, rating }]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Feedback submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit feedback" },
      { status: 500 }
    );
  }
}
