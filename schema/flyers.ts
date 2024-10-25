export default {
  name: "flyer",
  title: "Flyers",
  type: "document",
  fields: [
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
      name: "image",
      title: "Imagen",
      type: "image",
      description: "Imagen del flyer",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Descripcion",
      type: "blockContent",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
