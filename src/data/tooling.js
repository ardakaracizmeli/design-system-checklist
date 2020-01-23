export default {
  "id": "tooling",
  "title": "Tooling",
  "description": "To make things efficient for anyone using your design system, make tooling essential. Find the workflows where you can integrate things with the tools people use. This helps organically spread your design system and make it crucial to people’s daily work.",
  "sections": [{
    "title": "Design",
    "id": "t1",
    "description": "The UI and UX in a design system need to be tied to development as much as possible. The tools in this checklist should help designers and developers work better together.",
    "checklist": [{
      "id": "t2",
      "title": "Design Editor",
      "description": "There are many Design Editors available in the market today with the most popular names being Sketch, Figma and Adobe XD (see resources below). If you're unsure which route to go down it's often best to speak with your design team."
    }, {
      "id": "t3",
      "title": "Plugins",
      "description": "Most popular Design Editors (Sketch and Figma, especially) come with third-party plugin support. Whilst it's best to use the editors in-built tools for laying out your components, plugins can bring in a range of useful data to populate them."
    }, {
      "id": "t4",
      "title": "Version control",
      "description": "Having your design versioned with semantic versioning will allow you to easily align design with development, roll back faulty changes and release changes in code and design at the same time."
    }, {
      "id": "t5",
      "title": "Contribution guidelines",
      "description": "Define the process of contributing to the UI and UX of the design system and document it in a discoverable place to make it easier for everyone to contribute."
    }],
    "resources": [
      { "title": "Figma", "url": "https://www.figma.com/" },
      { "title": "Sketch", "url": "https://www.sketch.com/" },
      { "title": "Abstract: Design Version Control", "url": "http://www.abstract.com/" },
      { "title": "Semantic Versioning for Designers", "url": "https://github.com/jackunderhill/semver-design" }
    ]
  }, {
    "title": "Development",
    "id": "t6",
    "description": "One of the main challenges in developing a design system isn’t building the components.  It’s making your code stable, easy to read and contribute to.",
    "checklist": [{
      "id": "t7",
      "title": "Component catalog",
      "description": "Isolate your UI components’ environment outside of your product codebase to make sure they’re not dependent on any global dependencies and can be easily reused."
    }, {
      "id": "t8",
      "title": "Documentation",
      "description": "Having your code documented is key to driving adoption and reducing the load on the contributors."
    }, {
      "id": "t9",
      "title": "Code style",
      "description": "Having a defined code style helps align the way code’s written in the system and increases development velocity. It should be automated with the tools provided for each platform."
    }, {
      "id": "t10",
      "title": "Unit testing",
      "description": "Every part of the design system should be covered with unit tests.  Once your system’s adopted, any change in the isolated environment may affect how the product works."
    }, {
      "id": "t11",
      "title": "Accessibility testing",
      "description": "Design systems should cover accessibility as much as possible.  Making this automatic reduces the risk of inaccessible components or user flows in the product."
    }, {
      "id": "t12",
      "title": "Semantic versioning",
      "description": "Version your code with semantic versioning that dictates how version numbers are assigned and incremented."
    }, {
      "id": "t13",
      "title": "Release strategy",
      "description": "Design system releases should be automated and ideally use scripts ran locally or in remote CI pipelines to prevent broken releases."
    }, {
      "id": "t14",
      "title": "Commit message guidelines and changelog",
      "description": "Automate the generation of your changelog by adopting a commit message guidelines that categorise and define the changes being made."
    }, {
      "id": "t15",
      "title": "MR templates",
      "description": "Create merge request templates that outline the change being proposed to facilitate productive discussions."
    }, {
      "id": "t16",
      "title": "Contribution guidelines",
      "description": "Define the process of contributing to the code of the design system. Document everything in a discoverable place to make it easier for everyone to contribute."
    }],
    "resources": [{
      "title": "Storybook: UI component explorer for frontend developers",
      "url": "https://storybook.js.org/"
    }, {
      "title": "Semantic Versioning for Dummies",
      "url": "https://medium.com/the-non-traditional-developer/semantic-versioning-for-dummies-45c7fe04a1f8"
    }]
  }]
};
