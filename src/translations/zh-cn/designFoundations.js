export default {
  title: "基础",
  description:
    "设计资产和令牌，存储设计系统基础层（如颜色和排版）的值。它们用于组件，因此在此级别进行更改将在整个系统中产生共鸣。",
  sections: {
    "df-color": {
      title: "颜色",
      description:
        "颜色不仅是展示品牌的有效方式，也是与用户沟通的有效方式。具有目的性的颜色调色板可以通过为界面添加含义来帮助您开发直观的设计模式。",
      checklist: {
        "df-color-a11y": {
          title: "可访问性",
          description:
            "确保您的调色板中的主要颜色之间具有可访问的配对。更重要的是，确保您的背景和文本颜色具有至少AA标准的对比度比。",
        },
        "df-color-semantic": {
          title: "语义颜色",
          description:
            "除了品牌颜色之外，还要确保为禁用状态、背景、操作和高对比度文本等功能定义并制作颜色变量。",
        },
        "df-color-dark-mode": {
          title: "深色模式",
          description:
            "准备深色模式版本的调色板将使您的设计系统适应用户的操作系统颜色偏好。",
        },
        "df-color-guidelines": {
          title: "指南",
          description:
            "提供有关如何使用调色板中的颜色、在使用它们时要注意什么以及如何不使用它们的指南。",
        },
      },
    },
    "df-layout": {
      title: "布局",
      description:
        "精心设计的布局可以带来很长的路程。一致使用网格和间距可以使用户更轻松地扫描用户界面并掌握内容。",
      checklist: {
        "df-layout-units": {
          title: "单位",
          description:
            "单位是布局的最粒度构建块。定义一组具有一致增量（例如4、8、12和16的4点系统）的值将为设计网格和间距值提供基础。",
        },
        "df-layout-grid": {
          title: "网格",
          description:
            "每个布局都应该坐落在网格上，这为界面带来秩序和层次结构。为移动设备、平板电脑和台式机设备分别定义网格，包括列、间距和边距，以便您的界面可以快速适应任何平台。",
        },
        "df-layout-breakpoints": {
          title: "断点",
          description: "预定义网格将适应的屏幕大小和方向。",
        },
        "df-layout-spacing": {
          title: "间距",
          description:
            "水平和垂直节奏对于布局起着重要作用。您应该提供简单直接的方法来添加界面元素之间的空间，而不受网格的影响。",
        },
      },
    },
    "df-typography": {
      title: "排版",
      description:
        "排版是产品中展示内容的主要方式之一。排版比例中的清晰层次和对比样式将使阅读更容易，并有助于产品的整体结构。这也是一个展示品牌特征和存在的机会。",
      checklist: {
        "df-typography-mobile": {
          title: "响应式",
          description:
            "与移动设备相比，桌面设备通常可以承受更大的字体大小。创建一个适应视口大小的排版比例将有助于更有意义的层次结构和布局。",
        },
        "df-typography-grid": {
          title: "网格关系",
          description:
            "字体大小和行距应与您的网格匹配，以允许更好的文本和其他UI元素之间的配对。一个很好的例子是文本与带有边界框的图标配对。",
        },
        "df-typography-readability": {
          title: "可读性",
          description:
            "优化排版比例的字母间距（跟踪）、行高（行距）和行长将有助于文本的可读性。",
        },
        "df-typography-performance": {
          title: "性能",
          description:
            "自定义字体在显示之前需要下载，特别是在Web上。确保您具有合理的后备和快速的排版资产加载时间。使用系统字体可以解决这个性能问题。",
        },
        "df-typography-guidelines": {
          title: "指南",
          description:
            "提供有关何时以及如何使用排版比例中的配对，以及在使用它们时要注意什么以及如何不使用它们的指南。",
        },
      },
    },
    "df-elevation": {
      title: "高度",
      description:
        "高度控制沿z轴两个表面之间的相对距离。在浅色模式下，它通常通过应用于表面的阴影值进行突出显示，而在深色模式下，则使用背景颜色值进行通信。",
      checklist: {
        "df-elevation-shadows": {
          title: "阴影",
          description:
            "根据支持的高度级别提供多个阴影值。大多数情况下，您的产品将需要3到4个高度级别。",
        },
        "df-elevation-background": {
          title: "背景颜色",
          description:
            "每个阴影值都应具有链接的背景颜色。在浅色模式下，这些颜色可能都会解决白色颜色，因为它与阴影一起使用。在深色模式下，它们将代替阴影以传达表面的z轴距离。",
        },
        "df-elevation-z": {
          title: "Z-index",
          description:
            "定义一系列Z-index值来控制哪些元素具有优先权以在其他元素上呈现。",
        },
      },
    },
    "df-motion": {
      title: "动画",
      description: "共享动画值提供更一致的用户体验，并更好地与品牌对齐。",
      checklist: {
        "df-motion-easing": {
          title: "缓动",
          description:
            "为组件转换提供系统使用的标准缓动函数。作为起点，可以使用标准、加速和减速函数，应涵盖常见的组件用例。",
        },
        "df-motion-duration": {
          title: "持续时间",
          description:
            "定义多个动画持续时间值，以使组件转换在整个产品中保持一致",
        },
        "df-motion-a11y": {
          title: "可访问性",
          description: "注意用户减少运动偏好，并使动画不那么显眼或完全删除。",
        },
      },
    },
    "df-iconography": {
      title: "图标设计",
      description:
        "图标是代表功能或内容的符号。它们在用户界面中尤其易于识别和有用，因为它们的含义可以一眼看出。虽然它们可以仅用于装饰，但只有在它们被有意义和一致地使用时，它们的全部潜力才能得到实现。",
      checklist: {
        "df-iconography-a11y": {
          title: "可访问性",
          description:
            "对于传达含义或提供功能的图标，请提供默认的可访问名称，以表达相同的含义或功能。屏幕阅读器和其他辅助技术可能使用此名称来为用户定位界面。对于纯装饰图标，不需要名称。如果您的设计系统导出前端代码，请确保包括图标名称，例如使用aria-label。",
        },
        "df-iconography-style": {
          title: "样式",
          description:
            "确保您的图标系列在视觉上是有意义的整体。选择轮廓或填充样式并坚持使用它将导致更好的视觉一致性和可预测性。",
        },
        "df-iconography-naming": {
          title: "命名",
          description:
            "根据其传达的目的而不是外观来命名您的图标。例如，三角形媒体播放器播放按钮图标应命名为“play”，而不是“triangle”。您仍然可以添加相关关键字以提高可发现性。",
        },
        "df-iconography-grid": {
          title: "与网格的关系",
          description:
            "在与您的网格相配合的边界框中绘制图标。这将使其与其他UI元素更好地配对。一个很好的例子是带有边界框的图标与文本配对。",
        },
        "df-iconography-keywords": {
          title: "关键字",
          description:
            "添加关键字将提高每个图标的可发现性，并为使用您的系统的任何人提供更好的用户体验。",
        },
        "df-iconography-reserved": {
          title: "保留图标",
          description:
            "保留代表常见操作的图标将防止它们在任何其他上下文中使用。导航或添加和删除的系统图标是很好的例子。这会导致更直观的用户体验。",
        },
        "df-iconography-guidelines": {
          title: "指南",
          description:
            "提供有关如何以及何时使用图标、在处理图标时要注意什么以及如何不使用它们的指南。",
        },
      },
    },
  },
};
