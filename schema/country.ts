import FlagPreview from "../src/components/studio/FlagPreview.jsx";

export default {
  name: "country",
  title: "Paises",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
      description: "Name of the country",
    },
    // , {
    //     name: "flagIcon",
    //     title: "Flag Icon",
    //     type: "text",
    //     description: "Bandera del pais",
    // }
  ],
};
