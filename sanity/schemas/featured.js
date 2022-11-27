export default {
  name: "featured",
  type: "document",
  title: "Featured Menu categories",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured Category name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "restaurents",
      type: "array",
      title: "Restaurents",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
