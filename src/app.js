const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  const htmlResponse = `
      <html>
        <head>
          <title>NodeJs y Express en Vercel</title>
        </head>
        <body>
          <h1>Soy un proyecto Back end en vercel</h1>
        </body>
      </html>
    `;
  res.send(htmlResponse);
});

app.post("/send-whatsapp-message", async (req, res) => {
  try {
    const { shift, professional, confirmationType } = req.body;

    const urlBase = "http://localhost:5173/";
    const fromPhoneNumberId = "158645557327099";
    const accessToken =
      "EAFb2W9aC9GkBO5TowA3v8g0iunnD0lKZAFeEicWIXGkqx50tYtlGKgeAz9AIhOsRgYs6ND7jn3HKucpI2ijnznRBLWTn1ETeTHfd6ZC1j6FrsYHA6JyITL0QqZBn9d6ZAIlh6s6GweerkRo2fw7rxjvrvZBXZBHJQhmrjehd8DsZCYZAvCMMVtAkQXEx023Hqe4nX3ScOheUGuVV5lDPawZDZD";
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
            sub_type : "url",
            index: '0',
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
    res.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

module.exports = app;
