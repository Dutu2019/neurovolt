import { NextResponse } from "next/server";
import { getAllProjects } from "@/lib/content/projects";

// IMPORTANT:
// This endpoint reads from the filesystem. On Cloudflare Pages/Workers runtime,
// filesystem access is not available at runtime.
// Use this endpoint in local dev, or use `getAllProjects()` directly in server components at build-time.
export const runtime = "nodejs";

export async function GET() {
  const projects = await getAllProjects();

  // Strip server-only fields before returning to the client
  const safe = projects.map(({ _absoluteDir, ...rest }) => rest);
  return NextResponse.json(safe);
}

