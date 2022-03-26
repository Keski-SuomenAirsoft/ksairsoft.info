import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    sort: { type: "number", required: true },
  },
}));

export default makeSource({
  contentDirPath: "src/mdPages",
  documentTypes: [Page],
});
