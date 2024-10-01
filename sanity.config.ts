import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./schema";

export default defineConfig({
  name: "default",
  title: "betterTravel-Sanity-Studio",

  projectId: "oajovp2j",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schema,
  },
});
