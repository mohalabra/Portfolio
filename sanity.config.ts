import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {schemaTypes} from "./sanity/schemas";

const config = defineConfig({
  projectId: "mk3jpe3b",
  dataset: "production",
  title: "My Personal Portfolio",
  apiVersion: "2024/07/07",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemaTypes},
});

export default config;
