// Fonte única dos dados do restaurante. Campos null não aparecem na interface.
// Só preencha phone e hours depois de confirmar com o estabelecimento.
export const restaurant = {
  name: "Azumy Sushi Bar",
  address: {
    street: "Avenida Senador Lacerda Franco, 135",
    district: "Centro",
    city: "Itatiba",
    region: "SP",
    postalCode: "13250-400",
  },
  instagram: {
    handle: "@azumy_sushi_itatiba",
    url: "https://www.instagram.com/azumy_sushi_itatiba/",
  },
  phone: null as null | { display: string; e164: string }, // ex.: { display: "(11) 0000-0000", e164: "+5511000000000" }
  hours: null as null | string[],
};

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    `${restaurant.name}, ${restaurant.address.street}, ${restaurant.address.city}, ${restaurant.address.region}`,
  );

export const siteUrl: string | null =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null);
