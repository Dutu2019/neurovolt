export async function postEmail(email: string) {
  if (typeof email !== "string" || !email.includes("@"))
    return new Error("Courriel invalide");
  const params = new URLSearchParams({ "entry.1381889827": email });
  const res = await fetch(
    `${process.env.GOOGLE_FORMS_LINK}?${params.toString()}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  if (!res.ok) {
    return new Error(
      "Il y a eu une erreur inattendue. Veuillez réessayer plus tard."
    );
  }
}
