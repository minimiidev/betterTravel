export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
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
