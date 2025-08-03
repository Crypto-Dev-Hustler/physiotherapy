/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/twilio.ts
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export async function sendWhatsapp({ name, phone, date, time }: any) {
  const message = `📅 *New Appointment*\n👤 Name: ${name}\n📞 Phone: ${phone}\n📆 Date: ${date}\n🕒 Time: ${time}`;
console.log("Whatsapp Msg ===> ",message);
console.log('Sending WhatsApp to:', process.env.OWNER_WHATSAPP);

try {
    console.log('Sending WhatsApp to:', process.env.OWNER_WHATSAPP);
    const res = await client.messages.create({
        body: message,
        from: process.env.TWILIO_WHATSAPP_NUMBER!,
        to: process.env.OWNER_WHATSAPP!, // Only joined numbers work in sandbox
    });

    console.log("✅ WhatsApp message sent via Twilio:", res.sid);
  } catch (err: any) {
    console.error("❌ Twilio send error:", err.message);
  }
}
