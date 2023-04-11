export default {
  title: "核心组件",
  description:
    "组件是用户界面的主要构建块。构建一个可重复使用的组件库，通过减少设计和技术债务，加快开发进程，增强你的产品开发工作流程。核心组件被分解过于细碎会失去组件的意义。",
  sections: {
    "cc-avatar": {
      title: "用户头像 (Avatar)",
      description:
        "头像是用来显示用户照片的缩略图或任何其他类型内容的视觉表现。",
      checklist: {
        "cc-avatar-image": {
          title: "图片",
          description:
            "用户头像应将图片包含在其形状中，并应考虑到任意大小的图片尺寸，因为该图片可能来自未知的数据源。",
        },
        "cc-avatar-image-fallback": {
          title: "图片加载出错",
          description:
            "当没有图片可用时，应该有备选方案。这可以通过默认图片或首字母来完成。",
        },
        "cc-avatar-a11y": {
          title: "可访问性（无障碍）",
          description:
            "始终为屏幕阅读器提供描述，描述头像上显示的内容，而不是仅仅为其角色命名。",
        },
        "cc-avatar-sizes": {
          title: "尺寸",
          description:
            "使用头像的情况很多，都需要不同尺寸的组件。对于一般的项目，至少要使用2-3种不同的尺寸，并确保至少有一个小尺寸可用。",
        },
        "cc-avatar-icon": {
          title: "图标",
          description:
            "头像可用一个图标来代替图片，以强调那些不一定有（或需要）与之相关图片的区域。",
        },
        "cc-avatar-bg": {
          title: "背景颜色",
          description:
            "当与图标或文本一起使用时，必须有一个来自设计系统颜色变量（design system colour tokens）的背景颜色应用于头像形状。根据WCAG AA标准，请确保图标和文本与背景色有足够的对比度。",
        },
      },
    },
    "cc-badge": {
      title: "徽标 (Badge)",
      description:
        "徽标是代表一个对象或用户输入值状态的元素。",
      checklist: {
        "cc-badge-appearance": {
          title: "外观",
          description:
            "徽标在产品中可能扮演不同的角色，为每个角色预先定义一个颜色有助于用户理解其含义。当改变颜色时，根据WCAG AA标准，确保文本与背景色有足够的对比度。",
        },
        "cc-badge-dismiss": {
          title: "关闭状态",
          description:
            "徽标可作为一种动态的方式来显示选定的值，应该有一种方式来取消关闭它们。",
        },
      },
    },
    "cc-banner": {
      title: "横幅 (Banner)",
      description:
        "横幅显示一个可操作的信息，作为一种与用户沟通的显眼方式。",
      checklist: {
        "cc-banner-appearance": {
          title: "外观",
          description:
            "横幅用于显示不同类型的信息，根据它们所扮演的角色来区分它们的视觉外观很重要。如果使用背景色来区分它们，根据WCAG AA标准，确保与内容有足够的对比度。",
        },
        "cc-banner-image": {
          title: "用于图标(icon)或图片(images)的区域",
          description:
            "横幅可以使用辅助图标或图片来补充其信息。横幅不应该被用来代替文本内容。",
        },
        "cc-banner-actions": {
          title: "行为",
          description:
            "横幅中的行为召唤应该与文本相关，并提供一种对发送给用户的信息作出反应的方式。",
        },
        "cc-banner-dismiss": {
          title: "关闭状态",
          description:
            "不要用页面上的横幅让用户感到过于焦虑，添加一个可撤销的状态。可以是一个单独的关闭按钮或其他行动方式。",
        },
        "cc-banner-a11y": {
          title: "可访问性（无障碍）",
          description:
            "如果一个横幅动态地出现在页面上，应该通过无障碍设计告知那些使用无障碍工具的用户。",
        },
        "cc-banner-mobile": {
          title: "响应性",
          description:
            "横幅应该适应视口(viewport)的大小。这通常意味着在移动端为全宽(full-width)，以节省空间。",
        },
      },
    },
    "cc-button": {
      title: "按钮 (Button)",
      description:
        "按钮是用于单步操作的互动元素。",
      checklist: {
        "cc-button-hover": {
          title: "悬停状态",
          description:
            "在被鼠标光标悬停时，明确显示按钮是互动的。",
        },
        "cc-button-active": {
          title: "作用状态",
          description:
            "当一个按钮被按下时使用。同样的状态可以用来表示负责切换页面上另一个元素的按钮，当该元素在视觉上已经打开。",
        },
        "cc-button-focus": {
          title: "焦点状态",
          description:
            "当一个按钮通过键盘导航被选中时使用。",
        },
        "cc-button-icon": {
          title: "图标支持",
          description:
            "当图标在其标签旁使用时，可较好传达按钮的目的，或者在没有足够的空间时可以不使用文字。当仅使用图标时，请确保提供无障碍标签。",
        },
        "cc-button-disabled": {
          title: "禁用",
          description:
            "从视觉上显示一个按钮不可互动，并限制它被用户按下。",
        },
        "cc-button-loading": {
          title: "正在加载",
          description:
            "当用户在按下一个按钮后，需要等待加载结果时使用。如果使用旋转器来显示这种状态，请确保它不会改变原始按钮的宽度或高度。",
        },
        "cc-button-full-width": {
          title: "全宽",
          description:
            "默认情况下，按钮的宽度为其内容的宽度，但它们也应该有一个全宽的变体，以便在移动设备上运行良好。",
        },
        "cc-button-variants": {
          title: "变体",
          description:
            "当使用多个按钮时，应该有一种方法来区分主要按钮和次要按钮。按钮可能对用户起到不同的作用，或者在不同类型的设备上使用，所以必须随之改变它们的外观。",
        },
        "cc-button-sizes": {
          title: "尺寸",
          description:
            "按钮可以在网站的不同区域使用，并且可能有多种预定的尺寸。在移动设备上，根据iOS和Android的可访问性（无障碍）指南，可触摸的区域必须至少为48px，才能被访问。",
        },
      },
    },
    "cc-card": {
      title: "卡片 (Card)",
      description:
        "卡片用于关于主题和其相关信息进行分组。",
      checklist: {
        "cc-card-content": {
          title: "支持任何类型的内容",
          description:
            "卡片是产品中最常用的组件之一，所以它们必须足够灵活，以支持放置在其中的任何其他组件。",
        },
        "cc-card-structure": {
          title: "信息结构",
          description:
            "不管卡片有多灵活，为了产品的一致性，卡片的元素必须有一个特定的结构。",
        },
        "cc-card-media": {
          title: "支持媒体部分",
          description:
            "使用卡片的最流行的场景之一是将其与媒体内容混合。最常见的是在内容的顶部有一个全宽的区域，或者在卡片的一个侧面有全高的区域。",
        },
        "cc-card-actions": {
          title: "补充行为",
          description:
            "卡片可以与通常放置在卡片底部的召唤行为一起使用，或者卡片本身可以是可触摸的，代表一个行为。",
        },
        "cc-card-mobile": {
          title: "响应性",
          description:
            "在移动视窗上，卡片通常是全宽的，为内容节省空间。",
        },
      },
    },
    "cc-carousel": {
      title: "轮播 (Carousel)",
      description:
        "轮播将同一类型的项目堆叠在一起，可水平滚动浏览它们。",
      checklist: {
        "cc-carousel-controls": {
          title: "导航控制",
          description:
            "轮播应该由可容易找到的导航来控制，以便滚动浏览内容。",
        },
        "cc-carousel-content": {
          title: "支持任何内容",
          description:
            "轮播应该可用于不同背景下，不应局限于一个特定的子组件。在某些情况下，你可能希望同一个轮播中的项目彼此不同。",
        },
        "cc-carousel-width": {
          title: "项目宽度定制",
          description:
            "对于简单的产品，为轮播项目使用多种预定义的尺寸可能是可以的。如果需要更多的灵活性，可以提供一种方法来定义一个自定义的宽度。",
        },
        "cc-carousel-touch": {
          title: "触摸事件支持",
          description:
            "轮播在触摸设备上应该是可滚动的。一些最佳做法是使用原生滚动，并确保对所有触摸设备都支持相同的行为，而不仅仅是手机。",
        },
        "cc-carousel-keyboard": {
          title: "键盘导航",
          description:
            "当专注于导航控件时，应该可用键盘箭头来滚动内容。",
        },
        "cc-carousel-mobile": {
          title: "响应性",
          description:
            "对于移动视口来说，隐藏或缩小导航控件的大小以提高内容的可见性是一个好的做法。",
        },
      },
    },
    "cc-dropdown": {
      title: "下拉框 (Dropdown)",
      description:
        "下拉菜单用于显示一个上下文子视图，其中有一个与下拉菜单所在区域相关的行动或内容的列表。",
      checklist: {
        "cc-dropdown-content": {
          title: "支持任何类型的内容",
          description:
            "下拉框可以在很多情况下使用，如日期选择器、语言选择或其他产品功能。",
        },
        "cc-dropdown-menu": {
          title: "行动菜单",
          description:
            "下拉框最常用的场景之一是为用户提供一个行动菜单，所以定义这个布局是很有用的。",
        },
        "cc-dropdown-trap": {
          title: "焦点捕捉",
          description:
            "一旦下拉框被打开，焦点 (the focus) 应该只对下拉框内的元素起作用。当它被关闭时，焦点 (the focus) 应该移到下拉框的触发器上。",
        },
        "cc-dropdown-close": {
          title: "关闭",
          description:
            "要么在下拉框中应该可以关闭它，要么有一个单独的关闭按钮。另外，当用户点击框外区域时k可关闭下拉框，也是一个好的做法。",
        },
        "cc-dropdown-keyboard": {
          title: "键盘导航",
          description:
            "应该可用键盘在下拉框子元素中导航，并用Esc键来关闭它。",
        },
        "cc-dropdown-position": {
          title: "动态定位",
          description:
            "下拉框内容应该根据触发元素在屏幕上的当前位置来显示，并对用户始终可见。",
        },
        "cc-dropdown-mobile": {
          title: "响应性",
          description:
            "下拉式内容应该适应移动视点 (mobile viewpoints)，因为它在桌面上可能会占用大量的空间。",
        },
      },
    },
    "cc-icon": {
      title: "图标 (Icon)",
      description:
        "图标组件是一种将静态图标在产品中展示的方式。",
      checklist: {
        "cc-icon-sizes": {
          title: "尺寸",
          description:
            "图标应该有一些预定义的尺寸，以保证整个产品的一致性体验。排版配对 (Typography pairings) 可用于这些尺寸值，以确保它们与文本尺寸保持一致。",
        },
        "cc-icon-colors": {
          title: "颜色",
          description:
            "图标应使用设计系统调色板的值。使用母元素的文本颜色作为图标的填充颜色可自动化这个流程。",
        },
      },
    },
    "cc-checkbox": {
      title: "输入复选框 (Input checkbox)",
      description:
        "输入复选框是一个用于选择一个或多个选项的表单元素。",
      checklist: {
        "cc-checkbox-checked": {
          title: "勾选状态",
          description:
            "当复选框被选中时使用，并使用其值提交表单。",
        },
        "cc-checkbox-disabled": {
          title: "禁用状态",
          description:
            "防止复选框交互，并从表单提交中删除其值。",
        },
        "cc-checkbox-indeterminate": {
          title: "不确定状态",
          description:
            "当复选框有可选择的子元素，并且只有其中一些被选中时使用。",
        },
        "cc-checkbox-label": {
          title: "标签",
          description:
            "应该有一个与复选框字段相连的文本标签。点击该标签也应触发复选框的选择。",
        },
        "cc-checkbox-error": {
          title: "错误状态",
          description:
            "当错误只与复选框字段有关时，错误状态用于表单验证错误。使用文字提示错误，同时改变字段的颜色。",
        },
        "cc-checkbox-keyboard": {
          title: "键盘支持",
          description:
            "复选框的选择应该可用空格键来触发。使用原生元素可以提供这种交互的开箱即用体验。",
        },
        "cc-checkbox-group": {
          title: "复选框分组",
          description:
            "复选框可以被分组，以便同时处理多个值。",
        },
      },
    },
    "cc-radio": {
      title: "输入单选 (Input radio)",
      description:
        "输入单选是一种用于从列表中选择一个选项的表单元素。",
      checklist: {
        "cc-radio-checked": {
          title: "勾选状态",
          description:
            "当单选框被选中时使用，并将使用其值提交表单。一个单选输入不能通过再次按动它来取消选择。",
        },
        "cc-radio-disabled": {
          title: "禁用状态",
          description:
            "防止单选框互动，并从表单提交中删除其值。",
        },
        "cc-radio-label": {
          title: "标签",
          description:
            "应该有一个与单选字段相关的文本标签。点击该标签也应触发单选的选择。",
        },
        "cc-radio-error": {
          title: "错误状态",
          description:
            "当错误只与单选字段有关时，错误状态用于表单验证错误。使用文字提示错误，同时改变字段的颜色。",
        },
        "cc-radio-keyboard": {
          title: "键盘支持",
          description:
            "单选框的选择应该可用空格键来触发。使用原生元素可以提供这种交互的开箱即用体验。",
        },
        "cc-radio-group": {
          title: "单选组",
          description:
            "单选输入应该总是在一个组中使用。如果其中一个被选中，只能通过选择另一个单选来取消选择。",
        },
      },
    },
    "cc-text-field": {
      title: "Input text",
      description: "Input text lets users enter and edit text.",
      checklist: {
        "cc-text-field-disabled": {
          title: "Disabled state",
          description:
            "Prevents input interactions and removes its value from the form submission.",
        },
        "cc-text-field-placeholder": {
          title: "Placeholder",
          description:
            "When there’s no value entered, show a placeholder with a potential value example. Don’t use placeholders as labels for the inputs.",
        },
        "cc-text-field-label": {
          title: "Label",
          description:
            "There should be a text label linked with the text field. Clicking the label should move the focus to the field.",
        },
        "cc-text-field-error": {
          title: "Error state",
          description:
            "The error state is used for form validation errors when the error is related to the text field only. Always use a text error along with changing the colour of the field.",
        },
        "cc-text-field-focused": {
          title: "Focused state",
          description:
            "The focused state should highlight the text field when users start to interact with it. There is always only one focused field in the form.",
        },
        "cc-text-field-autocomplete": {
          title: "Autocomplete",
          description:
            "When applicable, adding support for the HTML autocomplete attribute will allow users to easily enter different data types.",
        },
        "cc-text-field-icon": {
          title: "Icon support",
          description:
            "Icons are used to describe input methods, express a text field state or provide additional functionality.",
        },
      },
    },
    "cc-switch": {
      title: "Input switch",
      description:
        "Input switches toggle the state of a single item. Compared to the input checkbox, their changes usually apply without any additional submission.",
      checklist: {
        "cc-switch-checked": {
          title: "Checked state",
          description:
            "Used when an input switch is turned on. It’s better to provide an additional way to indicate the checked state besides changing its colour when applicable.",
        },
        "cc-switch-disabled": {
          title: "Disabled state",
          description: "Prevents interacting with an input switch.",
        },
        "cc-switch-label": {
          title: "Label",
          description:
            "There should be a text label linked with the switch field. Clicking the label should also trigger the input selection. ",
        },
        "cc-switch-keyboard": {
          title: "Keyboard support",
          description:
            "A switch selection should be triggered when the Space key is pressed.",
        },
      },
    },
    "cc-list": {
      title: "List",
      description:
        "Lists define the layout of the page content or groups of elements stacking them vertically or horizontally.",
      checklist: {
        "cc-list-content": {
          title: "Supports any type of content",
          description:
            "Lists can be used in any context from page-level layout to managing offsets between granular components. hey should work with any component used inside.",
        },
        "cc-list-horizontal": {
          title: "Horizontal stacking",
          description:
            "Lists can be used for inline elements and they have to manage how they’re stacked horizontally, including handling offsets between multiple rows of elements.",
        },
        "cc-list-divided": {
          title: "Divided variant",
          description:
            "Lists with dividers are the best practice advised by many platform guidelines (especially on mobile).",
        },
        "cc-list-action": {
          title: "Supports actionable content",
          description:
            "Sometimes lists are used for grouping tappable components, where the whole area of the list item should be clickable.",
        },
      },
    },
    "cc-loading-indicator": {
      title: "Loading indicator",
      description:
        "The loading indicator shows that an operation’s being performed and how long the process will take.",
      checklist: {
        "cc-loading-indicator-variants": {
          title: "Linear and non-linear variants",
          description:
            "Depending on the context and the component it’s used for, the loading indicator can be represented either with linear or with a non-linear (e.g. circular) variant.",
        },
        "cc-loading-indicator-wait": {
          title: "Determinate or indeterminate wait time",
          description:
            "In some cases, the wait time can’t be determined. The loading indicator should be shown until the loading finishes or an error happens. In other cases, it’s better to indicate how much time’s left until the loading is done.",
        },
        "cc-loading-indicator-light": {
          title: "Light variant",
          description:
            "The loading indicator should respect its parent element background and provide a variant to be used on darker background colours.",
        },
        "cc-loading-indicator-reduced": {
          title: "Reduced motion",
          description:
            "The loading indicator should be synced with the system motion settings and reduce its animation speed when reduced motion settings are turned on.",
        },
      },
    },
    "cc-modal": {
      title: "Modal",
      description:
        "Modals are containers appearing in front of the main content to provide critical information or an actionable piece of content.",
      checklist: {
        "cc-modal-supports-content": {
          title: "Supports any type of content",
          description:
            "Like any other container, modals can be used in different scenarios and you should be able to use it with any other component inside.",
        },
        "cc-modal-actions": {
          title: "Supplementary actions",
          description:
            "Since content in the modal may be actionable, it’s important to have an area for action elements. This area is usually located at the bottom of the modal container.",
        },
        "cc-modal-close": {
          title: "Close action",
          description:
            "Modals should provide a clear way to be closed as they’re blocking content when open. This may be either a separate close button or one of the supplementary actions.",
        },
        "cc-modal-structure": {
          title: "Information structure",
          description:
            "Even though modals can be used as an empty container for the content, they need a defined information structure to provide a holistic experience. It may include defining how titles and subtitles look by default or where an action element’s area is.",
        },
        "cc-modal-keyboard": {
          title: "Keyboard navigation support",
          description:
            "It should be possible to close a modal by pressing the Esc key and all the focusable elements inside the modal container should be accessible with keyboard navigation.",
        },
        "cc-modal-trap": {
          title: "Focus trapping",
          description:
            "Once a modal is opened, the focus should be moved to the first element inside the modal and should be looped within the modal container. Closing the modal should return the focus to the last focused element on the page.",
        },
      },
    },
    "cc-tabs": {
      title: "Tabs",
      description:
        "Tabs organise navigation between multiple pages or content sections.",
      checklist: {
        "cc-tabs-active": {
          title: "Active button state",
          description:
            "There should be a clear differentiation between selected and unselected tab buttons.",
        },
        "cc-tabs-icon": {
          title: "Button icon support",
          description:
            "Icons help show the purpose of the tab buttons when used next to its label.",
        },
        "cc-tabs-equal": {
          title: "Equally-sized tab buttons",
          description:
            "Tabs can be used in a relatively small-sized container where you need to switch between a definite number of sections. For such scenarios, it’s better to support a variant where the button’s area is divided equally.",
        },
        "cc-tabs-keyboard": {
          title: "Keyboard navigation",
          description:
            "All tab buttons should be focusable and navigation between the tab’s component should be accessible from the keyboard.",
        },
        "cc-tabs-mobile": {
          title: "Responsiveness",
          description:
            "If all tabs on mobile don’t fit into the viewport, users should still have access to all tab buttons. Ways to solve this can be making the button area scrollable for mobile or showing a More button containing a dropdown with the rest of the buttons.",
        },
      },
    },
    "cc-toast": {
      title: "Toast",
      description:
        "Toasts provide short meaningful feedback messages about the action results.",
      checklist: {
        "cc-toast-auto": {
          title: "Dismissed automatically",
          description:
            "Toast messages shouldn’t interrupt the user flow, block the screen for a long time or require additional action from the user.",
        },
        "cc-toast-action": {
          title: "Action support",
          description:
            "Besides displaying the message, toasts may also provide an action related to the message like undoing an action.",
        },
        "cc-toast-queue": {
          title: "Handles multiple instances",
          description:
            "Even though it doesn’t happen often, toasts can be called from multiple sources at the same time and all resulting toasts should be queued. It’s good practice not to show all the messages at the same time.",
        },
        "cc-toast-a11y": {
          title: "Accessibility",
          description:
            "Toast messages should be announced by the voice assistive technology and their action should be easily accessible from the keyboard.",
        },
        "cc-toast-mobile": {
          title: "Responsiveness",
          description:
            "Toasts should be aligned with the mobile viewport and their action should be easily reachable for tapping.",
        },
      },
    },
    "cc-tooltip": {
      title: "Tooltip",
      description:
        "Tooltips are desktop-only components that display additional information when hovering over or focusing on an element.",
      checklist: {
        "cc-tooltip-keyboard": {
          title: "Keyboard hover support",
          description:
            "Tooltips should be accessible when an element is focused using the keyboard.",
        },
        "cc-tooltip-position": {
          title: "Dynamic positioning",
          description:
            "Tooltip content should be displayed based on the current position of the trigger element on the screen and always visible to the user.",
        },
        "cc-tooltip-timeout": {
          title: "Hover timeout",
          description:
            "Having a small timeout before triggering a tooltip will help to prevent occasionally showing tooltips while users move their mouse cursor.",
        },
        "cc-tooltip-light": {
          title: "Light variant",
          description:
            "The tooltip should respect its parent element background and provide a variant to be used on darker background colours.",
        },
        "cc-tooltip-group": {
          title: "Instant transition for element groups",
          description:
            "If there’s a group of elements using tooltips, hovering over another element while a tooltip’s already active shouldn’t trigger the animation.",
        },
      },
    },
  },
};
