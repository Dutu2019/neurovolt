"use server";

import { saveEmail } from "@/database";

export async function postEmail(email: string) {
  try {
    await saveEmail(email);
  } catch (error) {
    console.error("Error posting email:", error);
    throw error;
  }
}
