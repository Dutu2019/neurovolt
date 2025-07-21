import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Courriel invalide" }, { status: 400 });
    }

    const params = new URLSearchParams({ "entry.1381889827": email });
    const googleFormsUrl = process.env.GOOGLE_FORMS_LINK;

    if (!googleFormsUrl) {
      return NextResponse.json(
        { error: "Configuration manquante" },
        { status: 500 }
      );
    }

    const res = await fetch(`${googleFormsUrl}?${params.toString()}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          error:
            "Il y a eu une erreur inattendue. Veuillez réessayer plus tard.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Il y a eu une erreur inattendue. Veuillez réessayer plus tard.",
      },
      { status: 500 }
    );
  }
}
