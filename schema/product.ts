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
          { title: "Resort", value: "Resorts" },
          { title: "Hotel", value: "Hoteles" },
          { title: "Excursion", value: "Excursiones" },
          { title: "Crucero", value: "Cruceros" },
          { title: "Paquete Internacional", value: "Paquetes-Internacionales" },
          { title: "Tour", value: "Tours" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "name",
      title: "Nombre",
      type: "string",
      description: "Nombre del producto",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Dar click en generar luego de escribir el titulo",
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
      description: "EN CASO DE SER NECESARIO?",
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
      description: "Descripcion del producto",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "requirements",
      title: "Requisitos",
      type: "blockContent",
      description: "Requisitos del producto",
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
      description: "Coste de niños para resorts",
    },
    {
      name: "ageKids",
      title: "Edad Niños",
      type: "string",
      description: "Edad de los niños para resorts",
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
