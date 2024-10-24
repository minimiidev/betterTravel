export default {
  name: "product",
  title: "Productos",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Tipo de Product",
      type: "string",
      description: "Ej: Resort, Hotel, Tour",
      options: {
        list: [
          { title: "Resort", value: "Resort" },
          { title: "Hotel", value: "Hotel" },
          { title: "Tour", value: "Tour" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Imagen",
      type: "image",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Descripcion",
      type: "blockContent",
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "ageKids",
      title: "Edad Niños",
      type: "text",
      description: "Edad de los niños",
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "checkOutTime",
      title: "Check Out",
      type: "string",
      description: "Hora del Check Out",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
