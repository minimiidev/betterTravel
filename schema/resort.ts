export default {
  name: "resort",
  title: "Resort",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "location",
      title: "Ubicacion",
      type: "string",
    },
    {
      name: "image",
      title: "Imagen",
      type: "image",
    },
    {
      name: "description",
      title: "Descripcion",
      type: "blockContent",
    },
    {
      name: "price",
      title: "Precio",
      type: "number",
      description: "Coste por persona",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "priceKids",
      title: "Precio Niños",
      type: "number",
      description: "Coste de niños",
    },
    {
      name: "ageKids",
      title: "Edad Niños",
      type: "text",
      description: "Edad de los niños",
    },
    {
      name: "currency",
      title: "Moneda",
      type: "string",
      options: {
        list: [
          { title: "DOP", value: "DOP" },
          { title: "USD", value: "USD" },
          { title: "EUR", value: "EUR" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "checkInTime",
      title: "Check In",
      type: "string",
      description: "Hora del Check In",
    },
    {
      name: "checkOutTime",
      title: "Check Out",
      type: "string",
      description: "Hora del Check Out",
    },
  ],
};
