export default {
  title: "Tooling",
  description:
    "To make things efficient for anyone using your design system, make tooling essential. Find the workflows where you can integrate things with the tools people use. This helps organically spread your design system and make it crucial to people’s daily work.",
  sections: {
    "t-design": {
      title: "Design",
      description:
        "The UI and UX in a design system need to be tied to development as much as possible. The tools in this checklist should help designers and developers work better together.",
      checklist: {
        "t-design-editor": {
          title: "Design editor",
          description:
            "There are many design editors available in the market today with the most popular names being Sketch, Figma and Adobe XD. If you're unsure which route to go down it's often best to speak with your team.",
        },
        "t-design-plugins": {
          title: "Plugins",
          description:
            "Most popular Design Editors (Sketch and Figma, especially) come with third-party plugin support. Whilst it's best to use the editors in-built tools for laying out your components, plugins can bring in a range of useful data to populate them.",
        },
        "t-design-version": {
          title: "Version control",
          description:
            "Having your design versioned with semantic versioning will allow you to easily align design with development, roll back faulty changes and release changes in code and design at the same time.",
        },
        "t-design-contribution": {
          title: "Contribution guidelines",
          description:
            "Define the process of contributing to the UI and UX of the design system and document it in a discoverable place to make it easier for everyone to contribute.",
        },
      },
    },
    "t-development": {
      title: "Development",
      description:
        "One of the main challenges in developing a design system isn’t building the components.  It’s making your code stable, easy to read and contribute to.",
      checklist: {
        "t-development-catalog": {
          title: "Component catalog",
          description:
            "Isolate your UI components’ environment outside of your product codebase to make sure they’re not dependent on any global dependencies and can be easily reused.",
        },
        "t-development-documentation": {
          title: "Documentation",
          description:
            "Having your code documented is key to driving adoption and reducing the load on the contributors.",
        },
        "t-development-style": {
          title: "Code style",
          description:
            "Having a defined code style helps align the way code’s written in the system and increases development velocity. It should be automated with the tools provided for each platform.",
        },
        "t-development-unit-testing": {
          title: "Unit testing",
          description:
            "Every part of the design system should be covered with unit tests.  Once your system’s adopted, any change in the isolated environment may affect how the product works.",
        },
        "t-development-a11y-testing": {
          title: "Accessibility testing",
          description:
            "Design systems should cover accessibility as much as possible.  Making this automatic reduces the risk of inaccessible components or user flows in the product.",
        },
        "t-development-version": {
          title: "Semantic versioning",
          description:
            "Version your code with semantic versioning that dictates how version numbers are assigned and incremented.",
        },
        "t-development-release": {
          title: "Release strategy",
          description:
            "Design system releases should be automated and ideally use scripts ran locally or in remote CI pipelines to prevent broken releases.",
        },
        "t-development-changelog": {
          title: "Commit message guidelines and changelog",
          description:
            "Automate the generation of your changelog by adopting a commit message guidelines that categorise and define the changes being made.",
        },
        "t-development-mr": {
          title: "MR templates",
          description:
            "Create merge request templates that outline the change being proposed to facilitate productive discussions.",
        },
        "t-development-contribution": {
          title: "Contribution guidelines",
          description:
            "Define the process of contributing to the code of the design system. Document everything in a discoverable place to make it easier for everyone to contribute.",
        },
      },
    },
  },
};
