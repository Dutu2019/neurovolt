import { notFound } from "next/navigation";

export const runtime = "edge";

export default function page() {
  notFound();
}
