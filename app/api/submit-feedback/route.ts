import { NextResponse } from "next/server";
import { supabase } from "@/src/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const { message, rating } = await req.json();

    // Validate input
    if (typeof rating !== "number" || rating < 0 || rating > 5) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { error } = await supabase.from("feedback").insert([{ message, rating }]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Feedback submission error:", error);
    return NextResponse.json({ error: "Failed to submit feedback" }, { status: 500 });
  }
}
