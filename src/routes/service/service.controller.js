const serviceModel = require("../../models/service.model");

const services = [
  {
    name: "color",
    subServices: [
      {
        name: "B.LuZ Inoa",
      },
      {
        name: "B.Luz Wella",
      },
      {
        name: "Color Inoa",
      },
      {
        name: "Color Wella",
      },
    ],
  },
  {
    name: "lavado",
    subServices: [
      {
        name: "Comun",
      },
      {
        name: "Kerast",
      },
      {
        name: "Loreal",
      },
    ],
  },
  {
    name: "corte",
    subServices: [
      {
        name: "corte",
      },
      {
        name: "flequillo",
      },
    ],
  },
  {
    name: "botox",
    subServices: [
      {
        name: "botox c",
      },
      {
        name: "botox m",
      },
      {
        name: "botox l",
      },
      {
        name: "botox xl",
      },
    ],
  },
  {
    name: "brushing",
    subServices: [
      {
        name: "brush o plcht. c.",
      },
      {
        name: "brush o plcht. m.",
      },
      {
        name: "brush o plcht. l.",
      },
      {
        name: "brush o plcht. xl.",
      },
      {
        name: "bru con plcht. c.",
      },
      {
        name: "bru con plcht. m.",
      },
      {
        name: "bru con plcht. l.",
      },
      {
        name: "bru con plcht. xl.",
      },
    ],
  },
  {
    name: "baby",
    subServices: [
      {
        name: "baby corto",
      },
      {
        name: "baby medio",
      },
      {
        name: "baby largo",
      },
      {
        name: "baby xl",
      },
    ],
  },
  {
    name: "bala",
    subServices: [
      {
        name: "bala corto",
      },
      {
        name: "bala medio",
      },
      {
        name: "bala largo",
      },
      {
        name: "bala xl",
      },
    ],
  },
  {
    name: "ref.c.papel",
    subServices: [
      {
        name: "ref.c.p. corto",
      },
      {
        name: "ref.c.p. medio",
      },
      {
        name: "ref.c.p. largo",
      },
      {
        name: "ref.c.p. xl",
      },
      {
        name: "ref. 4 a 6 paq",
      },
      {
        name: "ref. hasta 14 paq",
      },
    ],
  },
  {
    name: "iluminacion",
    subServices: [
      {
        name: "ilu. corto",
      },
      {
        name: "ilu. medio",
      },
      {
        name: "ilu. largo",
      },
      {
        name: "ilu. xl",
      },
    ],
  },
  {
    name: "half",
    subServices: [
      {
        name: "half. corto",
      },
      {
        name: "half. medio",
      },
      {
        name: "half. largo",
      },
      {
        name: "half. xl",
      },
    ],
  },
  {
    name: "mechas count.",
    subServices: [
      {
        name: "m.c. un lateral",
      },
      {
        name: "m.c. dos lateral",
      },
      {
        name: "m.c. cuatro lateral",
      },
    ],
  },
];

async function createServices(req, res) {
  try {
    services.forEach(async (service) => {
      await serviceModel.createService(service);
    });
    res.status(201).json({ message: "services created successfull" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getServices(req, res) {
  try {
    const services = await serviceModel.getServices();
    res.status(200).json(services);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  createServices,
  getServices,
};
