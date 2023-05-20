export default {
  title: "设计变量 (Design tokens)",
  description:
    "为你的设计系统的基础层储存数值的变量，如颜色和排版。它们在组件中使用，所以在这一层的变化会对整个系统产生影响。",
  sections: {
    "dt-color": {
      title: "颜色 (Colour)",
      description:
        "不仅是展示品牌的有效方式，也是与用户沟通的有效方式。考虑到目的而非美学的调色板,可以通过为界面增加意义帮助创造直观的设计模式。",
      checklist: {
        "dt-color-a11y": {
          title: "可访问性（无障碍）",
          description:
            "确保你的调色板中的主要颜色之间有无障碍的搭配。更重要的是，确保你的背景和文本颜色之间至少有一个AA标准的对比度。",
        },
        "dt-color-functional": {
          title: "功能性色彩",
          description:
            "除了品牌颜色外，确保为禁用状态、背景、行为和高对比度文本等功能定义颜色并将其做成变量。",
        },
        "dt-color-dark-mode": {
          title: "深色模式",
          description:
            "为你的调色板准备一个暗夜模式的版本，将使你的设计系统能够适应暗夜模式，并尊重你的用户想要看到的东西。",
        },
        "dt-color-guidelines": {
          title: "指导原则",
          description:
            "提供关于如何以及何时使用调色板中颜色的指南，在使用这些颜色时应注意什么，以及如何不使用它们。",
        },
      },
    },
    "dt-layout": {
      title: "布局 (Layout)",
      description:
        "一个经过深思熟虑的布局可长久。统一使用网格和间距使你的用户更容易扫视用户界面和掌握内容。",
      checklist: {
        "dt-layout-units": {
          title: "单位",
          description:
            "单位是布局中最细化的构件。定义一组具有一致增量的数值（例如4、8、12和16的4点系统）将为你设计网格和间距数值提供基础。",
        },
        "dt-layout-grid": {
          title: "网格",
          description:
            "每个布局都应有一个网格，为界面带来秩序和层次感。为移动设备、平板电脑和桌面设备分别定义一个网格，包括列、槽和边距，这样界面能轻松适应任何平台。",
        },
        "dt-layout-breakpoints": {
          title: "分割点",
          description:
            "预定义网格将适应的屏幕尺寸和方向。",
        },
        "dt-layout-spacing": {
          title: "间距",
          description:
            "在布局设计中，水平和垂直的节奏对于界面的整体效果非常重要。除了网格系统外，应提供易于实现的方法来为不同的界面元素添加间距。",
        },
      },
    },
    "dt-typography": {
      title: "排版学 (Typography)",
      description:
        "排版是你在产品中展现内容的主要方式之一。在排版规模中，清晰的层次和对比的风格会更易于阅读，并有助于产品的整体结构。这也是一个将品牌特征和存在可视化的机会。",
      checklist: {
        "dt-typography-mobile": {
          title: "响应性响应性",
          description:
            "与移动设备相比，桌面设备通常可以承受更大的字体尺寸。创建一个适应视口大小的排版比例将有助于形成更有意义的层次和布局。",
        },
        "dt-typography-grid": {
          title: "网格关系",
          description:
            "字体大小和行间距应该与网格相匹配，以便让文本和其他UI元素之间有更好的搭配。这方面的一个很好的例子是文本与带有边界框的图标相配。",
        },
        "dt-typography-readability": {
          title: "可读性",
          description:
            "优化字母间距（tracking）、行高（leading）和行长的排版比例将有助于提高文本的可读性。",
        },
        "dt-typography-performance": {
          title: "性能",
          description:
            "自定义字体在显示之前需要下载，特别是在网络上。请确保你的排版资源具备合理的备选方案和快速的加载时间。使用系统字体可以解决这个性能问题。",
        },
        "dt-typography-guidelines": {
          title: "准则",
          description:
            "提供关于如何以及何时在你的排版规模中使用这些配对的指南，在使用它们时应注意什么，以及如何不使用它们。",
        },
      },
    },
    "dt-iconography": {
      title: "图形学 (Iconography)",
      description:
        "图标是代表功能或内容的符号。它们在用户界面中特别容易辨认，也很有帮助，因为它们的含义可以一目了然。虽然它们可以仅仅用于装饰，但当它们被有意义地、持续地使用时，它们的潜力就可以完全发挥出来。",
      checklist: {
        "dt-iconography-a11y": {
          title: "可访问性（无障碍）",
          description:
            "对于传达某种意义或服务于某种功能的图标，提供一个默认的可访问名称，以表达相同的意义或功能。这个名字可以被屏幕阅读器和其他辅助技术用来引导用户了解界面。对于纯粹的装饰性图标，不需要名称。如果你的设计系统导出了前端代码，请确保包含图标的名称，例如，使用aria-label。",
        },
        "dt-iconography-style": {
          title: "风格",
          description:
            "确保图标系列作为一个整体具有视觉意义。挑选一种勾勒或填充的风格并坚持下去，会带来更好的视觉一致性和可预测性。",
        },
        "dt-iconography-naming": {
          title: "命名",
          description:
            "根据图标的目的，而不是它们的外观来命名。例如，一个三角形的媒体播放器播放按钮图标应该被命名为 ‘播放’，而不是 ‘三角形’。仍然可添加相关的关键词来提高可发现性。",
        },
        "dt-iconography-grid": {
          title: "与网格的关系",
          description:
            "在一个与网格x相得益彰的边界框中绘制你的图标。这使之与其他UI元素有更好的搭配。一个很好的例子是：带有边界框的图标与文本配对。",
        },
        "dt-iconography-sizes": {
          title: "尺寸",
          description:
            "为与网格相关的图标提供不同的尺寸。为图标提供一个最小的尺寸，并为小尺寸的图标去除不必要的细节。",
        },
        "dt-iconography-keywords": {
          title: "关键词",
          description:
            "添加关键词将提高每个图标的可发现性，并为设计系统的使用者提供更好的用户体验。",
        },
        "dt-iconography-reserved": {
          title: "保留图标",
          description:
            "保留代表常见操作的图标将阻止它们在任何其他情况下使用。用于导航或添加和删除的系统图标就是一个例子，这将提供一个更直观的用户体验。",
        },
        "dt-iconography-guidelines": {
          title: "指南",
          description:
            "提供关于如何和何时使用图标的指南，在使用它们时要注意什么，以及如何不使用它们。",
        },
      },
    },
  },
};
