// example theme.js
export const theme = {
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    background: "#f5f3f1",
    primary: "#726250",
    muted: "#eae7e4",
    white: "#fff",
    secondary: "#ccc6be",
  },

  layout: {
    container: {
      maxWidth: ["100%", "80%", "60%"],
      px: [4, 0, 0],
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
    },
  },
};
