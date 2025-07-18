"use server";

import { promises as fs } from "fs";
import path from "path";

const EMAILS_FILE = path.join(process.cwd(), "emails.json");

// Initialize the emails file if it doesn't exist
async function initEmailsFile() {
  try {
    await fs.access(EMAILS_FILE);
  } catch {
    // File doesn't exist, create it
    await fs.writeFile(EMAILS_FILE, JSON.stringify([]));
  }
}

export async function saveEmail(email: string): Promise<void> {
  await initEmailsFile();

  try {
    // Read existing emails
    const fileContent = await fs.readFile(EMAILS_FILE, "utf-8");
    const emails: string[] = JSON.parse(fileContent);

    // Check if email already exists
    if (emails.includes(email)) {
      throw new Error("Email already exists");
    }

    // Add new email
    emails.push(email);

    // Save back to file
    await fs.writeFile(EMAILS_FILE, JSON.stringify(emails, null, 2));
  } catch (error) {
    console.error("Error saving email:", error);
    throw error;
  }
}

export async function getEmails(): Promise<string[]> {
  await initEmailsFile();

  try {
    const fileContent = await fs.readFile(EMAILS_FILE, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error reading emails:", error);
    return [];
  }
}
