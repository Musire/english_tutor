export const globalMetadata = {
  // Base site defaults used if a specific page properties are missing
  default: {
    title: "Repisas Flotantes Portal",
    description: "Enterprise workspace for managing shelving configurations.",
    keywords: ["repisas", "flotantes", "dashboard"],
    twitter: { card: "summary_large_image" }
  },

  // c:\...\src\pages\page.jsx (Root Route)
  "/": {
    title: "Home Dashboard | Repisas Flotantes",
    description: "Overview and health performance metrics of shelving system installations.",
    keywords: ["home", "workspace", "overview"]
  },

  // c:\...\src\pages\tinker\page.jsx
  "/tinker": {
    title: "Tinker Workspace | Repisas Flotantes",
    description: "Interactive tools to draft and test custom routing properties.",
    keywords: ["tinker", "sandbox", "testing"]
  },

  // c:\...\src\pages\tinker\[id]\page.jsx (Dynamic Route Parameter Mapping)
  // Instead of static strings, use a function to pull runtime URL values
  "/tinker/:id": (params) => ({
    title: `Project Target: ${params.id || 'Unknown'} | Repisas Flotantes`,
    description: `Deep-dive configuration analytics tracking shelf project identity ${params.id}.`,
    keywords: ["tinker", "project", params.id || "detail"]
  }),

  // c:\...\src\pages\not-found.jsx
  "/404": {
    title: "Page Not Found | Repisas Flotantes",
    description: "The requested shelving workspace node does not exist.",
  }
};
