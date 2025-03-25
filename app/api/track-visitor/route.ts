import { NextResponse } from "next/server";
import { supabase } from "@/src/lib/supabaseClient";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { page } = await req.json();
    const userAgent = req.headers.get("user-agent") || "Unknown";

    const ipRes = await axios.get("https://api64.ipify.org?format=json");
    const ip = ipRes.data.ip;

    const locationRes = await axios.get(`https://ipwhois.app/json/`);
    const {
      city,
      country,
      country_code,
      latitude,
      longitude,
      org,
      country_flag,
      country_neighbours,
    } = locationRes.data;

    const { error } = await supabase.from("visitors").insert([
      {
        ip_address: ip,
        location: `${city}, ${country}`,
        user_agent: userAgent,
        country_code,
        latitude,
        longitude,
        org,
        country_flag,
        country_neighbours,
        page
      },
    ]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Visitor tracking error:", error);
    return NextResponse.json(
      { error: "Failed to track visitor" },
      { status: 500 }
    );
  }
}
