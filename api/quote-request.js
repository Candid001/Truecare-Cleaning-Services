// Vercel serverless function (Node.js runtime).
// Receives the Request-a-Quote form submission and emails it via Resend.
// Required env var on Vercel: RESEND_API_KEY (Settings -> Environment Variables).

const QUOTE_RECIPIENT = "tomi@truecarecleaningservices.ca";
const FROM_ADDRESS = "TrueCare Website <quotes@truecarecleaningservices.ca>";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ success: false, error: "Email service not configured" });
  }

  try {
    const { formData, photos } = req.body || {};
    if (!formData || !formData.email) {
      return res.status(400).json({ success: false, error: "Missing form data" });
    }

    const f = formData;
    const html = `
      <h2>New Cleaning Quote Request</h2>
      <h3>Contact Information</h3>
      <p>
        Name: ${escapeHtml(f.firstName)} ${escapeHtml(f.lastName)}<br/>
        Email: ${escapeHtml(f.email)}<br/>
        Phone: ${escapeHtml(f.phone)}<br/>
        City: ${escapeHtml(f.city)}<br/>
        Province: ${escapeHtml(f.province)}
      </p>
      <h3>Service Details</h3>
      <p>
        Property Type: ${escapeHtml(f.propertyType)}<br/>
        Service Type: ${escapeHtml(f.serviceType)}<br/>
        Space Size: ${escapeHtml(f.spaceSize)}<br/>
        Rooms: ${escapeHtml(f.rooms)}<br/>
        Bathrooms: ${escapeHtml(f.bathrooms)}<br/>
        Frequency: ${escapeHtml(f.cleaningFrequency)}<br/>
        Cleanliness Level: ${escapeHtml(f.cleanlinessLevel)}<br/>
        Client Provides Supplies: ${escapeHtml(f.provideSupplies)}<br/>
        Has Pets: ${escapeHtml(f.hasPets)}
      </p>
      <h3>Schedule</h3>
      <p>
        Preferred Date: ${escapeHtml(f.preferredDate)}<br/>
        ${f.alternateDate ? `Alternate Date: ${escapeHtml(f.alternateDate)}<br/>` : ""}
        Preferred Time: ${escapeHtml(f.preferredTime)}
      </p>
      ${f.additionalNotes ? `<h3>Additional Notes</h3><p>${escapeHtml(f.additionalNotes)}</p>` : ""}
    `.trim();

    const attachments = Array.isArray(photos)
      ? photos
          .filter((p) => p && p.contentBase64)
          .map((p) => ({ filename: p.filename || "photo.jpg", content: p.contentBase64 }))
      : [];

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [QUOTE_RECIPIENT],
        subject: `New Quote Request from ${f.firstName} ${f.lastName}`,
        html,
        reply_to: f.email,
        attachments: attachments.length ? attachments : undefined,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.json().catch(() => ({}));
      console.error("Resend API error:", errBody);
      return res.status(502).json({ success: false, error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("quote-request handler error:", err);
    return res.status(500).json({ success: false, error: "Unexpected server error" });
  }
}
