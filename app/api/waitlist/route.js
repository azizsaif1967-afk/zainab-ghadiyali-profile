// Server route — never exposes KIT_API_KEY to the browser.
// Adds the email as a subscriber in Kit (formerly ConvertKit) via v4 API.
//
// Required env var:
//   KIT_API_KEY  — your Kit Personal API Key (Settings → Advanced → API)
//
// Docs: https://developers.kit.com/v4#create-a-subscriber

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const KIT_ENDPOINT = "https://api.kit.com/v4/subscribers";

export async function POST(request) {
  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    return Response.json(
      { ok: false, error: "Server is missing KIT_API_KEY." },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const email = (body?.email || "").trim();
  const firstName = (body?.firstName || body?.name || "").trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { ok: false, error: "Please enter a valid email." },
      { status: 400 }
    );
  }

  const kitRes = await fetch(KIT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-Kit-Api-Key": apiKey,
    },
    body: JSON.stringify({
      email_address: email,
      first_name: firstName || undefined,
      // state defaults to "active"; Kit will send a confirmation email
      // automatically if double opt-in is enabled in your account.
    }),
  });

  let kitData = null;
  try {
    kitData = await kitRes.json();
  } catch {
    /* non-JSON response */
  }

  if (!kitRes.ok) {
    // Most common: 422 if Kit thinks the email is malformed,
    // 401/403 if the API key is wrong.
    const errMsg =
      kitData?.errors?.[0] ||
      kitData?.error ||
      kitData?.message ||
      `Kit responded with ${kitRes.status}.`;
    return Response.json(
      { ok: false, error: errMsg },
      { status: kitRes.status }
    );
  }

  return Response.json({ ok: true });
}
