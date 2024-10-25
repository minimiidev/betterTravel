export default {
  name: "product",
  title: "Productos",
  type: "document",
  fields: [
    {
      name: "promotion",
      title: "Promocion",
      type: "boolean",
      description: "Esta en promocion ?",
    },
    {
      name: "type",
      title: "Tipo de Producto",
      type: "string",
      description: "Ej: Resort, Hotel, Paq. Internacional",
      options: {
        list: [
          { title: "Resort", value: "Resort" },
          { title: "Hotel", value: "Hotel" },
          { title: "Excursiones", value: "Excursiones" },
          { title: "Crucero", value: "Crucero" },
          { title: "Paquete Internacional", value: "Paquete Internacional" },
          { title: "Circuitos", value: "Circuitos" },
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

  preview: {
    select: {
      title: `name`,
      media: "image",
      promotion: "promotion",
    },
    prepare(selection: any) {
      const title = `${selection.promotion ? "Promo" : ""}  | ${selection.title} `;
      const promotion = selection.promotion;
      return {
        title,
        subtitle: promotion ? "Promocion" : "No Promocion",
        media: selection.media,
      };
    },
  },
};
