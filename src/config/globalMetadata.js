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
    title: "Learn English Online | Expert 1-on-1 English Tutoring",
    description: "Master English with personalized, 1-on-1 online tutoring. Improve your speaking, business communication, and exam scores with expert native tutors.",
    keywords: ["learn english", "english tutoring", "online english classes", "esl coach", "business english"]
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
