export default {
  title: "Project management",
  description:
    "Design systems are no different than any other project your team might take on. In order to successfully build and maintain one, you need a clear strategy that’s well executed daily, and you‘ll need to create opportunities for your colleagues to give feedback to help share your design system together.",
  sections: {
    "pm-task-management": {
      title: "Task management",
      description:
        "Solid task management and workflows are a crucial step in executing any project. Adopting a methodology like Agile or Kanban helps you cover a lot of ground.",
      checklist: {
        "pm-task-management-roadmap": {
          title: "Roadmap",
          description:
            "Setting your short and long term vision and mapping things out helps you decide the steps to take, understand your place in the bigger picture and prioritise day-to-day tasks.",
        },
        "pm-task-management-milestones": {
          title: "Milestones",
          description:
            "Define milestones that act as bigger epics in your project management with the help of your roadmap. These will help you understand your progress.",
        },
        "pm-task-management-ticketing": {
          title: "Ticketing",
          description:
            "Make it easier to track your day-to-day progress by using ticketing software like Jira, Trello or GitHub. This’ll make it easier for others to submit feature proposals or bug reports.",
        },
      },
    },
    "pm-communications": {
      title: "Communications",
      description:
        "Your users play a great role in shaping your design system. Creating communication channels where they can raise their voices helps you keep track of how they’re using your system. It’ll also improve their sense of ownership and the adoption of your system.",
      checklist: {
        "pm-communications-meetings": {
          title: "Community meetings",
          description:
            "Arrange community meetings with everyone who uses the design system. Share your knowledge and make proposals to improve the sense of community.",
        },
        "pm-communications-channel": {
          title: "Communication channel",
          description:
            "Most product development work happens digitally, so create a digital channel where people can reach out and ask questions.",
        },
        "pm-communications-open-hours": {
          title: "Open hours",
          description:
            "Create open hours in which you can engage your audience in a more private setting where you can discuss things in more detail. You can also use these as peer coding or peer design opportunities.",
        },
        "pm-communications-faq": {
          title: "FAQ",
          description:
            "To save everyone time, define which questions are asked frequently by your audience and document them in a discoverable place.",
        },
      },
    },
    "pm-analytics": {
      title: "Analytics",
      description:
        "Data isn’t the only driving factor when it comes to the development of design systems. Keeping a sharp eye on how your system’s used in the development process and the end product can inform your go-forward strategy.",
      checklist: {
        "pm-analytics-component": {
          title: "Component analytics",
          description:
            "Track the usage of your components. For development you can use built-in tools like Figma’s Design System Analytics. For the end product you can have a separate way of tracking per platform depending on the technology.",
        },
        "pm-analytics-logging": {
          title: "Error logging",
          description:
            "Implement a way to track and pinpoint component-related outages in your product.",
        },
        "pm-analytics-tooling": {
          title: "Tooling analytics",
          description:
            "Track what tools are being used for your design system. Find out which ones are used the most and which features are the most popular.",
        },
        "pm-analytics-health": {
          title: "Service and health metrics",
          description:
            "Define service and health metrics for your design system to set a benchmark on how well you’re doing. Common examples can be the number of tickets closed, improvements made or bugs fixed.",
        },
      },
    },
  },
};
