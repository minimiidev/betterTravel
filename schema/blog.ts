export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Tipo de Blog",
      type: "string",
      description: "Ej: FAQs, Blog, Noticias",
      options: {
        list: [
          { title: "FAQs", value: "faq" },
          { title: "Blog", value: "Blog" },
          { title: "Noticias", value: "Noticias" },
          { title: "Destinos", value: "Destinos" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "name",
      title: "Titulo",
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
      name: "descriptionMeta",
      title: "Descripcion para meta",
      description: "DESCRIPCION BREVE DE LA PUBLICACION",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Descripcion",
      type: "blockContent",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Imagen Principal",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Fecha de publicacion",
      type: "date",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
