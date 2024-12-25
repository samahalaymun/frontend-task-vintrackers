export default defineAppConfig({
  ui: {
    primary: "indigo",
    gray: "cool",

    input: {
      padding: {
        xl: "px-3.5 py-3",
      },
      base: "bg-transparent border border-border rounded w-full outline-none focus:bg-transparent focus:border-b focus:ring-blue-100 focus:border-blue-100",
    },
    button: {
      variant: {
        ghost: "hover:bg-transparent dark:hover:bg-transparent p-0",
        solid: "bg-blue-100 text-white",
       
      },
    },
    checkbox: {
      label: "text-text",
    },
  },
});
