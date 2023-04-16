export default {
  title: "项目管理",
  description:
    "设计系统与你的团队可能手上的任何其他项目没有什么不同。为了成功地建立和维护一个项目，需要明确的策略一以贯之，你需要为你的同事创造机会，让他们给予反馈，以帮助共同分享完善设计系统。",
  sections: {
    "pm-task-management": {
      title: "任务管理 (Task management)",
      description:
        "扎实的任务管理和工作流程是执行任何项目的关键步骤。采用像敏捷或看板这样的方法论可以在许多方面起到帮助。",
      checklist: {
        "pm-task-management-roadmap": {
          title: "路线图",
          description:
            "设定你的短期和长期愿景，并将事情具象出来，有助于决定要采取的步骤，了解你在整个愿景中的位置，并确定日常任务的优先次序。",
        },
        "pm-task-management-milestones": {
          title: "里程碑",
          description:
            "在路线图的帮助下，定义里程碑，作为项目管理中更大的成就。这些将帮助你了解自己的进展。",
        },
        "pm-task-management-ticketing": {
          title: "工单追踪 (Ticketing)",
          description:
            "通过使用Jira、Trello或GitHub等工单软件，更容易追踪日常进度。这将使他人更容易提交功能建议或错误报告。",
        },
      },
    },
    "pm-communications": {
      title: "沟通 (Communications)",
      description:
        "用户在塑造设计系统方面发挥了巨大的作用。建立沟通渠道，让他们能够发出声音，有助于追踪他们是如何使用系统的。这也会提高他们的主人翁意识和对系统的采用。",
      checklist: {
        "pm-communications-meetings": {
          title: "社区会议 (Community meetings)",
          description:
            "与每个使用设计系统的人安排社区会议。分享你的知识并提出建议，以改善社区的感觉。",
        },
        "pm-communications-channel": {
          title: "沟通渠道",
          description:
            "大多数产品开发工作都是以数字方式进行的，所以要建立一个数字渠道，让人们可以接触到并提出问题。",
        },
        "pm-communications-open-hours": {
          title: "开放时间",
          description:
            "创建开放时间，可以在一个更私密的环境中与你的受众接触，在那里可以更详细地讨论事情，也可以把这些作为同行编码或同行设计的机会。",
        },
        "pm-communications-faq": {
          title: "常见问题",
          description:
            "为了节约大家的时间，定义哪些问题是常见问题，并把它们记录在一个易于发现的地方。",
        },
      },
    },
    "pm-analytics": {
      title: "分析 (Analytics)",
      description:
        "当涉及到设计系统的开发时，数据并不是唯一的驱动因素。密切关注系统在开发过程和最终产品中的使用情况，可以为未来策略提供参考。",
      checklist: {
        "pm-analytics-component": {
          title: "组件分析",
          description:
            "追踪组件的使用情况。对于开发，可使用内置工具，如 Figma 的设计系统分析。对于最终产品，可根据技术的不同，对每个平台进行单独的跟踪。",
        },
        "pm-analytics-logging": {
          title: "错误记录",
          description:
            "实施一种方法来跟踪和确定产品中与组件相关的故障。",
        },
        "pm-analytics-tooling": {
          title: "工具分析",
          description:
            "追踪设计系统正在使用哪些工具。找出哪些是使用最多的，哪些功能是最受欢迎的。",
        },
        "pm-analytics-health": {
          title: "服务和健康度量",
          description:
            "为设计系统定义服务和健康指标，以便为衡量做得多好设定一个基准。常见的例子可以是关闭的工单数量、做出的改进或修复的报错。",
        },
      },
    },
  },
};
