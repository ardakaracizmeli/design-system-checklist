export default {
  title: "Maintenance",
  description:
    "Design systems are no different than any other project your team might take on. In order to successfully build and maintain one, you need a clear strategy that’s well executed daily, and you‘ll need to create opportunities for your colleagues to give feedback to help share your design system together.",

  sections: {
    "m-documentation": {
      title: "Documentation",
      description:
        "Documentation resources are a core part of any design system as it saves time and effort for the team and everyone using the design system. It allows people to learn the ropes and find answers to the most commonly asked questions without contacting the team.",
      checklist: {
        "m-documentation-principles": {
          title: "Design system principles",
          description:
            "List your core principles when building a design system to let designers and developers know your values and which are the main factors for the decision-making in your team.",
        },
        "m-documentation-start": {
          title: "Getting started",
          description:
            "Guide others through the first steps of setting up and using your design system, which can help them build their first feature or product without contacting you directly.",
        },
        "m-documentation-design": {
          title: "Design best practices",
          description:
            "Share tips on how to design products using the design system in a scalable way, avoid common pitfalls and use your design tool to its max potential.",
        },
        "m-documentation-dev": {
          title: "Development best practices",
          description:
            "Share tips on developing products using the design system, the recommended technical dependencies, and avoiding common pitfalls.",
        },
        "m-documentation-anatomy": {
          title: "Component anatomy",
          description:
            "Provide an overview of the components' design anatomy to help everyone understand the limitations of the component layout and which parts of it are customizable.",
        },
        "m-documentation-props": {
          title: "Component properties",
          description:
            "Document properties your components support in both design and code. We recommend aligning most of them across platforms for a smoother design handoff process.",
        },
        "m-documentation-composition": {
          title: "Component composition examples",
          description:
            "When building low-level components supporting slots for inserting other content – provide examples of how to use them to create more advanced compositions.",
        },
        "m-documentation-sandbox": {
          title: "Sandbox product example",
          description:
            "If you don’t have a way to test your components in the product yourself, you can build a simple application that simulates actual product layouts to test how your components behave in the wild and try out new design system features before releasing them.",
        },
        "m-documentation-env": {
          title: "Browser / OS support",
          description:
            "Define the level of support you provide for various operating systems and browsers, and make sure you align with the product on this topic.",
        },
        "m-documentation-release": {
          title: "Release cycle",
          description:
            "Establish and document a predictable release cycle for the major versions that include breaking changes. This way, product teams can plan the migrations on their side.",
        },
      },
    },
    "m-local": {
      title: "Local libraries",
      description:
        "The scope of the design system is usually to build the core repeating patterns to increase the velocity of product teams. That means you won't implement all UI elements yourself. Product teams will still build local components using the design system to solve their specific scenarios.",
      checklist: {
        "m-local-when": {
          title: "When to build",
          description:
            "Share your expectations on when product teams should build custom components instead of requesting a new feature in the design system or using an existing component.",
        },
        "m-local-types": {
          title: "Horizontal and vertical libraries",
          description:
            "Outline the difference between the horizontal libraries used across multiple products and vertical libraries only used by the team building it.",
        },
        "m-local-expectations": {
          title: "Library expectations",
          description:
            "Document the minimum set of requirements for shipping a local library. Describe your expectations on the library quality, documentation, and maintenance.",
        },
        "m-local-release": {
          title: "Release cycle alignment",
          description:
            "Ensure that local libraries are in sync with the design system release cycle. They should support your newly published major releases of the system to avoid blocking the product from updating.",
        },
      },
    },
    "m-process": {
      title: "Team processes",
      description:
        "All teams that have successfully scaled their design system did this by establishing robust processes for working with their stakeholders and the community. As you keep developing the system, they will save you endless hours and let you avoid answering the same questions repeatedly.",
      checklist: {
        "m-process-log": {
          title: "Decision-making log",
          description:
            "For the topics you have to handle repeatedly – make logs on how you make those decisions. You won’t miss any contextual requirements and will avoid having additional alignment meetings.",
        },
        "m-process-roadmap": {
          title: "Roadmap",
          description:
            "Try planning your long-term work and allocating only a part of your time for community support. This will help you evolve the system over time instead of only focusing on smaller bug fixes and feature requests.",
        },
        "m-process-stakeholder": {
          title: "Stakeholder mapping",
          description:
            "List out the main stakeholders across all products you’re supporting. Those could be people working in the development and design but also don’t miss the people leadership who can help you grow the adoption.",
        },
        "m-process-analytics": {
          title: "Analytics",
          description:
            "Define a way to track the usage and the value of the libraries and tooling you provide. You can start with easy-to-set-up metrics, like analytics for your documentation website, feedback surveys, or components usage analytics in your design tool.",
        },
        "m-process-shifts": {
          title: 'Ongoing support "shifts"',
          description:
            "If multiple people work on the same platform, distribute and plan the community support work for them. That will let team members focus on the planned work instead of being distracted by the requests and questions.",
        },
        "m-process-sla": {
          title: "SLA",
          description:
            "Define the timelines for how long it takes you to handle incoming requests and bug reports to help product teams understand if they should wait for your release or find a temporary workaround.",
        },
      },
    },
    "m-community": {
      title: "Community support",
      description:
        "It’s crucial to help product designers and developers get more productive with the design system, fix the bugs they find in the products, and address their needs. To make sure you get that feedback – your goal is to make it easy and safe for everyone to share their findings.",
      checklist: {
        "m-community-channels": {
          title: "Support channels",
          description:
            "Create support channels in the tools you use for communication. It’s a good idea to separate them by the platform to make it comfortable for everyone to share platform-specific details of their issues.",
        },
        "m-community-template": {
          title: "Templates",
          description:
            "Prepare templates for creating feature requests and bug reports. Use them to ask for reproduction links, design proposals, and other contextual information you need to make decisions instead of manually looking for that information.",
        },
        "m-community-updates": {
          title: "Regular updates",
          description:
            "You’re risking the adoption of the new features if you’re only focusing on the implementation but never talking about it with the community. Defining a cadence for your updates helps build a habit for product teams to come and check what’s new in the system and how they can leverage it.",
        },
        "m-community-slots": {
          title: "Open hours",
          description:
            "There will be questions that can’t be resolved in a single ticket or chat. Keep a few bookable calendar slots for other teams to receive a consultation or discuss their feature implementation with your team.",
        },
      },
    },
    "m-contribution": {
      title: "Contribution",
      description:
        "Building design systems is a team game. Make sure to include product teams in the journey, help them contribute to the system and let them advocate for it across the company.",
      checklist: {
        "m-contribution-rules": {
          title: "House rules for the system",
          description:
            "Explain how your design and development process works to the product teams. Design system teams usually move slower than product teams since there is more responsibility on making scalable decisions in the components affecting the whole product.",
        },
        "m-contribution-guidelines": {
          title: "Contribution guidelines",
          description:
            "Explain what contributors need to set up to prepare their design and development environment for adding and testing new features.",
        },
        "m-contribution-template": {
          title: "Feature proposal template",
          description:
            "Prepare a standard template for initiating the work on a new feature. This template should ensure that proposed changes will be applied across all platforms and won’t break the existing component usage in the product.",
        },
        "m-contribution-engagement": {
          title: "Engagement",
          description:
            "Make sure to highlight and reward contributors' work when making announcements about the new features and help them get support from their managers when they contribute. ",
        },
      },
    },
  },
};
