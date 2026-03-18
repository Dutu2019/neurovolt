import path from "node:path";

export const CONTENT_ROOT = path.join(process.cwd(), "public", "content");
export const PROJECTS_DIR = path.join(CONTENT_ROOT, "projects");
export const ARTICLES_DIR = path.join(CONTENT_ROOT, "articles");

export function assertServerOnly() {
  // Guard: these utilities use fs and must not be imported into client components.
  if (typeof window !== "undefined") {
    throw new Error("content fs utilities must only run on the server");
  }
}
