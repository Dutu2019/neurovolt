export async function postEmail(email: string) {
  if (typeof email !== "string" || !email.includes("@"))
    return new Error("Courriel invalide");

  try {
    const response = await fetch("/api/infolettre", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      return new Error(
        data.error ||
          "Il y a eu une erreur inattendue. Veuillez réessayer plus tard."
      );
    }

    return data;
  } catch (error) {
    return new Error(
      "Il y a eu une erreur inattendue. Veuillez réessayer plus tard."
    );
  }
}
