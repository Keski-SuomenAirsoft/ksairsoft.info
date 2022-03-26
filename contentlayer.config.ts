import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    sort: { type: "number", required: true },
  },
}));

export default makeSource({
  contentDirPath: "src/posts",
  documentTypes: [Post],
});
