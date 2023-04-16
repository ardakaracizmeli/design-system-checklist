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
          title: "活动状态",
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
      title: "输入文字 (Input text)",
      description: "输入文本让用户可以输入和编辑文本。",
      checklist: {
        "cc-text-field-disabled": {
          title: "禁用状态",
          description:
            "防止输入互动，并从表单提交中删除其值。",
        },
        "cc-text-field-placeholder": {
          title: "占位符",
          description:
            "当没有输入值时，显示一个占位符，上面有一个潜在的值作为例子。不要使用占位符作为输入的标签。",
        },
        "cc-text-field-label": {
          title: "标签",
          description:
            "应该有一个与文本字段相连的文本标签。点击标签应该把焦点移到该字段。",
        },
        "cc-text-field-error": {
          title: "错误状态",
          description:
            "当错误只与文本字段有关时，错误状态用于表单验证错误。使用文字提示错误，同时改变字段的颜色。",
        },
        "cc-text-field-focused": {
          title: "聚焦状态",
          description:
            "当用户开始与文本字段进行交互时，焦点状态应该突出文本字段。在表单中总是只有一个焦点字段。",
        },
        "cc-text-field-autocomplete": {
          title: "自动完成",
          description:
            "当适用时，添加对HTML自动完成属性的支持将允许用户轻松输入不同的数据类型。",
        },
        "cc-text-field-icon": {
          title: "图标支持",
          description:
            "图标被用来描述输入方法，表达一个文本字段的状态或提供额外的功能。",
        },
      },
    },
    "cc-switch": {
      title: "输入开关 (Input switch)",
      description:
        "输入开关可以切换单个项目的状态。与输入复选框相比，它们的变化通常无需额外提交即可应用。",
      checklist: {
        "cc-switch-checked": {
          title: "勾选状态",
          description:
            "在输入开关被打开时使用。除了在适用时改变其颜色外，最好还能提供一种额外的方式来表示选中状态。",
        },
        "cc-switch-disabled": {
          title: "禁用状态",
          description: "防止与一个输入开关进行交互。",
        },
        "cc-switch-label": {
          title: "标签",
          description:
            "应该有一个与开关字段相连的文本标签。点击该标签也应该触发输入选择。",
        },
        "cc-switch-keyboard": {
          title: "键盘支持",
          description:
            "当按下空格键时，应该触发开关选择。",
        },
      },
    },
    "cc-list": {
      title: "列表 (List)",
      description:
        "列表定义了页面内容或元素组的布局，将它们垂直或水平地堆叠。",
      checklist: {
        "cc-list-content": {
          title: "支持任何类型的内容",
          description:
            "列表应该可以在任何情况下使用，从页面级别的布局到管理细化组件之间的偏移。它们应该可与内部使用的任何组件一起使用。",
        },
        "cc-list-horizontal": {
          title: "水平堆叠",
          description:
            "Lists可以用于内联元素 (inline elements)，它们的水平堆叠方式应该可控，包括处理多行元素之间的偏移。",
        },
        "cc-list-divided": {
          title: "分隔的变体",
          description:
            "带分隔符的列表是许多平台指南建议的最佳做法（尤其是在移动端）。",
        },
        "cc-list-action": {
          title: "支持可操作的内容",
          description:
            "列表有时被用来分组可触的组件，在这种情况下，列表项的整个区域都应该是可点击的。",
        },
      },
    },
    "cc-loading-indicator": {
      title: "加载指示器 (Loading indicator)",
      description:
        "加载指示器显示正在进行的操作以及该过程将需要多长时间。",
      checklist: {
        "cc-loading-indicator-variants": {
          title: "线性和非线性的变体 (Linear and non-linear variants)",
          description:
            "根据上下文和它所使用的组件，加载指示器可以用线性或非线性（如循环）变体表示。",
        },
        "cc-loading-indicator-wait": {
          title: "确定的或不确定的等待时间",
          description:
            "在某些情况下，等待时间是无法确定的。加载指示器应该显示，直到加载完成或发生错误。在其他情况下，最好显示距离加载完成还需多少时间。",
        },
        "cc-loading-indicator-light": {
          title: "浅色变体 (Light variant)",
          description:
            "加载指示器应该尊重其母元素的背景，并提供一个变体，用于较暗的背景颜色。",
        },
        "cc-loading-indicator-reduced": {
          title: "动画减弱 (Reduced motion)",
          description:
            "加载指示器应该与系统的动画设置同步，并在降低动画设置时降低其动画速度。",
        },
      },
    },
    "cc-modal": {
      title: "模态 (Modal)",
      description:
        "模态是出现在主要内容前的窗口，提供关键信息或可操作的内容。",
      checklist: {
        "cc-modal-supports-content": {
          title: "支持任何类型的内容",
          description:
            "像其他的窗口一样，模态可以用在不同的场景中，你应该可以在里面使用任何其他组件。",
        },
        "cc-modal-actions": {
          title: "补充行动",
          description:
            "由于模态中的内容可能是可操作的，所以有一个操作元素的区域很重要。这个区域通常位于模态窗口的底部。",
        },
        "cc-modal-close": {
          title: "关闭",
          description:
            "模态应该提供一个明确的方式来关闭，因为它们在打开时挡住了内容。这可以是一个单独的关闭按钮或补充动作之一。",
        },
        "cc-modal-structure": {
          title: "信息结构",
          description:
            "即使模态可以作为内容的空容器，它们也需要一个定义好的信息结构来提供整体的体验。它可能包括定义标题和字幕的默认外观或动态元素的区域位置。",
        },
        "cc-modal-keyboard": {
          title: "键盘导航支持",
          description:
            "应该可以通过按Esc键来关闭模态，而且模态窗口内的所有可聚焦元素都应该可以通过键盘导航来访问。",
        },
        "cc-modal-trap": {
          title: "焦点捕捉",
          description:
            "一旦一个模态被打开，焦点应该被移动到模态中的第一个元素，并且应该在模态窗口中循环。关闭模态应该将焦点返回到页面上的最后一个焦点元素。",
        },
      },
    },
    "cc-tabs": {
      title: "选项卡 (Tabs)",
      description:
        "选项卡组织了多个页面或内容部分之间的导航。",
      checklist: {
        "cc-tabs-active": {
          title: "活动按钮状态",
          description:
            "选定和未选定的标签按钮之间应该有明显的区别。",
        },
        "cc-tabs-icon": {
          title: "支持按钮图标",
          description:
            "当在标签旁使用时，图标有助于显示标签按钮的目的。",
        },
        "cc-tabs-equal": {
          title: "同样大小的选项卡按钮",
          description:
            "选项卡可以用在一个相对较小的容器中，你需要在一定数量的部分之间切换。对于这种情况，最好是支持一个变体，即按钮的区域被平均分配。 For such scenarios, it’s better to support a variant where the button’s area is divided equally.",
        },
        "cc-tabs-keyboard": {
          title: "键盘导航",
          description:
            "所有的标签按钮都应该是可聚焦的，标签组件之间的导航应该可以通过键盘来实现。",
        },
        "cc-tabs-mobile": {
          title: "响应性",
          description:
            "如果移动端的所有选项卡不适合在视口中显示，用户仍然应该可以访问所有的选项卡按钮。解决这个问题的方法可以是让按钮区域在移动端可滚动，或者显示一个包含下拉的更多按钮与其他的按钮。",
        },
      },
    },
    "cc-toast": {
      title: "吐司反馈 (Toast)",
      description:
        "Toasts 提供关于行动结果的简短的有意义的反馈信息。",
      checklist: {
        "cc-toast-auto": {
          title: "自动消散",
          description:
            "Toast信息不应打断用户流程，不应长时间阻塞屏幕，也不应要求用户采取额外的行动。",
        },
        "cc-toast-action": {
          title: "行动支持",
          description:
            "除了显示消息，Toast还可以提供与消息相关的操作，比如撤销一个操作。",
        },
        "cc-toast-queue": {
          title: "处理多个实例",
          description:
            "尽管这并不经常发生，但Toast可以同时从多个来源被调用，所有产生的Toast应该被排序。不应在同一时间显示所有的Toast消息。",
        },
        "cc-toast-a11y": {
          title: "响应性",
          description:
            "Toast 应该与移动视窗保持一致，其操作应易于触摸到。",
        },
        "cc-toast-mobile": {
          title: "Responsiveness",
          description:
            "Toasts should be aligned with the mobile viewport and their action should be easily reachable for tapping.",
        },
      },
    },
    "cc-tooltip": {
      title: "工具提示 (Tooltip)",
      description:
        "工具提示是仅适用于桌面的组件，当悬停在一个元素上或聚焦在一个元素上时显示额外的信息。",
      checklist: {
        "cc-tooltip-keyboard": {
          title: "支持键盘悬停",
          description:
            "当使用键盘聚焦一个元素时，工具提示应该可以被访问。",
        },
        "cc-tooltip-position": {
          title: "动态定位 (Dynamic positioning)",
          description:
            "工具提示的内容应该根据触发元素在屏幕上的当前位置来显示，并始终对用户可见。",
        },
        "cc-tooltip-timeout": {
          title: "悬停超时",
          description:
            "在触发工具提示之前有一个小的超时，将有助于防止在用户移动鼠标指针时误触而显示工具提示。",
        },
        "cc-tooltip-light": {
          title: "轻度变体 (Light variant)",
          description:
            "工具提示应该尊重其母元素的背景，并提供一个变体，以用于较深的背景颜色。",
        },
        "cc-tooltip-group": {
          title: "元素组的即时过渡 (Instant transition for element groups)",
          description:
            "如果有一组元素使用工具提示，当工具提示已经激活时，将鼠标悬停在另一个元素上不应触发动画。",
        },
      },
    },
  },
};
