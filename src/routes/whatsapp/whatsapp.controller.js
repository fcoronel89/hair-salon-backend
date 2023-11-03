const axios = require("axios");
require("dotenv").config();

const fromPhoneNumberId = process.env.WHATSAPP_FROM_NUMBER_ID;
const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;

function getDataToSend(shift, professional, confirmationType) {
  const templateName =
    confirmationType === "client"
      ? "shift_confirmation_client"
      : "shift_confirmation_professional ";
  const urlToConfirm =
    confirmationType === "client"
      ? "confirmar-turno-cliente/"
      : "confirmar-turno-profesional/";
  const secondParameter =
    confirmationType === "client"
      ? `${professional.firstName} ${professional.lastName}`
      : shift.service;
  return {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: "542234215869",
    type: "template",
    template: {
      name: templateName,
      language: {
        code: "es_AR",
      },
      components: [
        {
          type: "body",
          parameters: [
            {
              type: "text",
              text: `${shift.shiftDate} a las ${shift.time}`,
            },
            {
              type: "text",
              text: `${secondParameter}`,
            },
          ],
        },
        {
          type: "button",
          sub_type: "url",
          index: "0",
          parameters: [
            {
              type: "text",
              text: `${urlToConfirm}${shift.id}`,
            },
          ],
        },
      ],
    },
  };
}

async function sendWhatsappMessage(req, res) {
  try {
    const { shift, professional, confirmationType } = req.body;
    //const recipientPhoneNumber = req.body.recipientPhoneNumber;

    console.log("body", req.body);

    const url = `https://graph.facebook.com/v18.0/${fromPhoneNumberId}/messages`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    const data = getDataToSend(shift, professional, confirmationType);

    // Send the WhatsApp message
    const response = await axios.post(url, data, { headers });

    console.log("Message sent successfully:", response.data);
    res.json({ ok: true });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ ok: false, error: "Failed to send message" });
  }
}

module.exports = {
  sendWhatsappMessage,
};
