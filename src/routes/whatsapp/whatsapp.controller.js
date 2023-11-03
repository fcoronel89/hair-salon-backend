const axios = require("axios");
require("dotenv").config();

async function sendWhatsappMessage(req, res) {
  try {
    const { shift, professional, confirmationType } = req.body;

    const fromPhoneNumberId = process.env.WHATSAPP_FROM_NUMBER_ID;
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
    //const recipientPhoneNumber = req.body.recipientPhoneNumber;
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
    console.log("body", req.body);

    const url = `https://graph.facebook.com/v18.0/${fromPhoneNumberId}/messages`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    const data = {
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

    // Send the WhatsApp message
    const response = await axios.post(url, data, { headers });

    console.log("Message sent successfully:", response.data);
    res.json({ ok: true });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ ok:false, error: "Failed to send message" });
  }
}

module.exports = {
  sendWhatsappMessage,
};
