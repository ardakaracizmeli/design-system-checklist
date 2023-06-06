export default {
  title: "核心组件",
  description:
    "组件是用户界面的主要构建块。构建可重用的组件库通过减少设计和技术债务以及加快流程来增强产品开发工作流程。核心组件不能被分解为细粒度的部分而不失去它们的含义。",

  sections: {
    "c-accordion": {
      title: "手风琴",
      description: "当按下触发元素时，手风琴切换内容区域的可见性。",
      checklist: {
        "c-accordion-active": {
          title: "活动状态",
          description:
            "手风琴有两种状态来切换其内容的可见性。如果手风琴触发器显示图标，则应在状态之间视觉上有所区别。",
        },
        "c-accordion-composition": {
          title: "构成",
          description:
            "内容区域应足够灵活，以支持各种类型的内容，包括其他组件。",
        },
        "c-accordion-transition": {
          title: "切换过渡",
          description:
            "添加微妙的动画以帮助用户理解和遵循组件行为，在状态之间切换。",
        },
        "c-accordion-a11y-relation": {
          title: "内容和触发器关系",
          description:
            "使用辅助技术聚焦内容区域时，应从触发元素中宣布额外的上下文。",
        },
      },
    },
    "c-alert": {
      title: "警告",
      description: "警告显示有关整个页面或其特定区域的重要消息。",
      checklist: {
        "c-alert-colors": {
          title: "颜色",
          description:
            "根据其角色区分警报的视觉外观至关重要。如果您使用背景颜色进行角色区分，请确保其与警报内显示的内容具有足够的对比度。",
        },
        "c-alert-title": {
          title: "标题支持",
          description: "支持标题可以帮助用户更快地了解长时间警报消息的上下文。",
        },
        "c-alert-icon": {
          title: "图标支持",
          description:
            "图标说明了警报的角色，并为色盲人士提供了有关警报的额外提示。",
        },
        "c-alert-actions": {
          title: "补充操作",
          description:
            "警报中的操作应与其文本相关，并提供一种对发送给用户的消息做出反应的方式。",
        },
        "c-alert-responsive": {
          title: "响应式",
          description:
            "警报可以适应视口大小，通常在移动设备上变为全宽，以节省一些空间。",
        },
        "c-alert-a11y-roles": {
          title: "辅助功能角色",
          description: "使用辅助技术时，警报应正确地宣布其辅助功能角色。",
        },
      },
    },
    "c-avatar": {
      title: "头像",
      description: "用户照片、组织或其他类型内容的可视化表示缩略图。",
      checklist: {
        "c-avatar-image": {
          title: "图片",
          description:
            "头像应将图片掩盖成它们的形状，并适用于任何图片大小，因为它们可能从未知的数据源获取此图片。",
        },
        "c-avatar-image-fallback": {
          title: "图片备用方案",
          description:
            "当未传递图像或存在图像加载错误时，头像应能够显示具有不同图像、图标或文本缩写的备用方案。",
        },
        "c-avatar-sizes": {
          title: "尺寸",
          description:
            "有许多上下文可使用头像，需要不同的组件尺寸。对于普通项目，请使用至少2-3种不同的尺寸，并确保至少有一个小尺寸可用。",
        },
        "c-avatar-colors": {
          title: "颜色",
          description:
            "在没有图像的情况下使用头像形状时，应用背景颜色。确保图标和文本与背景根据WCAG AA标准具有足够的对比度。",
        },
        "c-avatar-shape": {
          title: "形状",
          description: "根据使用的区域，头像可能支持多种形状，如正方形或圆形。",
        },
        "c-avatar-group": {
          title: "头像组",
          description: "多个头像可以堆叠在一起，以表示一组用户。",
        },
        "c-avatar-a11y-label": {
          title: "辅助功能标签",
          description:
            "当用于非装饰性图像并且没有文本表示其内容时，头像应提供辅助功能标签。",
        },
      },
    },
    "c-badge": {
      title: "徽章",
      description: "紧凑元素，表示对象或用户输入的状态。",
      checklist: {
        "c-badge-colors": {
          title: "颜色",
          description:
            "徽章在您的产品中可能扮演各种角色，为每个角色定义预定义的颜色应帮助用户理解它们的含义。更改颜色时，请确保文本根据WCAG AA标准与背景具有足够的对比度。",
        },
        "c-badge-variants": {
          title: "变体",
          description:
            "基于徽章在产品中呈现的位置，您可能支持多个组件变体。例如，您可以使用一个淡化的背景来避免过多吸引注意力。",
        },
        "c-badge-sizes": {
          title: "尺寸",
          description:
            "徽章可以有多种尺寸，具体取决于徽章的使用位置。例如，您可以在营销页面上使用大尺寸。",
        },
        "c-badge-icon-support": {
          title: "图标支持",
          description:
            "为了更好地说明徽章的含义，您可以在文本旁边显示图标。请确保对于小徽章，图标内容仍然可识别。",
        },
        "c-badge-dismiss": {
          title: "可消除操作",
          description:
            "徽章可以用作动态显示选定值的方式，并且应该有一种方法来解除它们。",
        },
        "c-badge-empty": {
          title: "空状态",
          description:
            "徽章可以在没有任何文本内容的情况下使用。那通常 需要更改它们的样式以保持正确的形状。",
        },
        "c-badge-positioning": {
          title: "定位",
          description:
            "当用作状态徽章（例如通知指示器）时，您应该能够将其相对于这些元素定位。",
        },
      },
    },
    "c-button": {
      title: "按钮",
      description: "用于单步操作的交互元素。",
      checklist: {
        "c-button-colors": {
          title: "颜色",
          description:
            "按钮在您的产品中可能扮演各种角色，为每个角色定义预定义的颜色应帮助用户理解它们的含义。更改颜色时，请确保文本根据WCAG AA标准与背景具有足够的对比度。",
        },
        "c-button-variants": {
          title: "变体",
          description:
            "使用多个按钮时，应有一种方法来区分主要和次要操作。按钮可能为用户扮演不同的角色或用于各种表面，并且它们必须改变外观。",
        },
        "c-button-sizes": {
          title: "尺寸",
          description:
            "根据将使用按钮的位置，它可以有多种尺寸。例如，您可以在应用程序的密集区域使用小尺寸。",
        },
        "c-button-icon": {
          title: "图标支持",
          description:
            "当与其标签一起使用时，图标可以轻松传达按钮的目的，或者在空间不足时可以不使用文本。仅使用图标时，请确保提供辅助功能标签。",
        },
        "c-button-hover": {
          title: "悬停状态",
          description: "当使用鼠标指针悬停在按钮上时，清晰地显示它是交互式的。",
        },
        "c-button-active": {
          title: "活动状态",
          description:
            "在按钮被按下、用于选择值或切换页面上的其他元素时，提供视觉提示。",
        },
        "c-button-loading": {
          title: "加载状态",
          description:
            "在按下按钮后，指示用户必须等待其操作结果的时间。如果使用旋转器显示此状态，请 确保它不会更改原始按钮的宽度或高度。",
        },
        "c-button-disabled": {
          title: "禁用状态",
          description: "视觉上显示按钮不可交互，并限制其无法被按下。",
        },
        "c-button-a11y-role": {
          title: "辅助功能角色",
          description:
            "按钮应正确宣布按钮或链接的辅助功能角色，并根据传递给它的属性自动解决它。",
        },
        "c-button-a11y-focus": {
          title: "焦点指示器",
          description:
            "当使用键盘或辅助技术聚焦按钮时，按钮应具有可见的焦点指示器。",
        },
      },
    },

    "c-breadcrumbs": {
      title: "面包屑导航",
      description: "顶级产品导航，帮助用户了解当前页面的位置并导航回其父级。",
      checklist: {
        "c-breadcrumbs-icon": {
          title: "图标支持",
          description:
            "图标有助于传达面包屑项链接的页面的角色。大多数情况下，您需要确保它们被一致地使用，而不仅仅是在列表中的随机项。",
        },
        "c-breadcrumbs-disabled": {
          title: "禁用状态",
          description:
            "列表中的每个项目都可以单独禁用，以防止用户导航到该页面。",
        },
        "c-breadcrumbs-collapsed": {
          title: "折叠状态",
          description:
            "如果面包屑项不适合父容器，则列表应支持仅折叠项，以使相关项对用户可见。",
        },
        "c-breadcrumbs-separator": {
          title: "自定义分隔符",
          description:
            "根据使用上下文，面包屑列表中的项目可以使用不同的分隔符样式。",
        },
      },
    },

    "c-calendar": {
      title: "日历",
      description:
        "显示一个或多个月中的日期的网格，并允许用户选择单个日期或日期范围。",
      checklist: {
        "c-calendar-modes": {
          title: "显示模式",
          description:
            "日历可能在各种产品区域和视口中使用。确保支持不同的显示模式，以渲染一个以上的月份或垂直布局。",
        },
        "c-calendar-selected": {
          title: "选定状态",
          description:
            "日历应支持单个日期和选择范围。选定的日期应该在视觉上突出显示，并且所选日期之间的范围应该对用户可见。",
        },
        "c-calendar-month-selection": {
          title: "月份选择",
          description:
            "为了帮助用户导航更长的日期范围，日历应提供一种轻松切换显示月份的方法。",
        },
        "c-calendar-day-names": {
          title: "星期几名称",
          description:
            "除了日期数字之外，为星期几名称提供简短的标签，以便让用户更轻松地导航日期选择。",
        },
        "c-calendar-i18n": {
          title: "国际化",
          description:
            "日历应针对产品支持的所有国家/地区进行本地化。这包括日期格式和正确的星期几排序。",
        },
        "c-calendar-a11y-keyboard": {
          title: "键盘导航",
          description:
            "日历日期应该可以使用键盘和辅助技术进行聚焦。进一步的日期导航应该使用键盘箭头或屏幕阅读器导航进行，并支持通过导航出列或行来切换月份。",
        },
        "c-calendar-a11y-state": {
          title: "状态通告",
          description: "当所选日期获得焦点时，辅助技术应该通告所选日期。",
        },
      },
    },

    "c-card": {
      title: "卡片",
      description: "用于分组主题信息及其相关操作的容器。",
      checklist: {
        "c-card-composition": {
          title: "内容组成",
          description:
            "内容区域应具有足够的灵活性，以支持各种类型的内容，包括其他组件。",
        },
        "c-card-media-sections": {
          title: "媒体区域",
          description:
            "卡片通常与媒体内容一起使用。最受欢迎的选项是在内容上方有一个全宽区域或在卡片的一侧有一个区域。",
        },
        "c-card-actions": {
          title: "附加操作",
          description:
            "卡片可以与通常放置在卡片底部的操作一起使用，或者卡片本身可以是可点击的并代表一个操作。",
        },
        "c-card-responsive": {
          title: "响应式设计",
          description: "在移动视口上，卡片通常是全宽的，以节省内容空间。",
        },
        "c-card-groups": {
          title: "卡片组",
          description: "多个卡片可以组合成单个内容区域列表。",
        },
      },
    },

    "c-carousel": {
      title: "走马灯",
      description: "用于显示分组内容的水平可滚动区域。",
      checklist: {
        "c-carousel-navigation": {
          title: "导航控件",
          description:
            "走马灯应该对使用鼠标而不是触摸事件的设备上的内容进行导航。",
        },
        "c-carousel-composition": {
          title: "内容组成",
          description:
            "走马灯项的内容区域应具有足够的灵活性，以支持各种类型的内容，包括其他组件。",
        },
        "c-carousel-item-size": {
          title: "项大小",
          description:
            "项的布局应具有足够的灵活性，以支持不同类型的内容。对于移动设备，请确保显示未适合视口的走马灯项的一部分，以指示可滚动区域。",
        },
        "c-carousel-touch": {
          title: "触摸导航",
          description: "走马灯内容应呈现在可滚动区域内，以支持触摸事件。",
        },
        "c-carousel-responsive": {
          title: "响应式设计",
          description: "走马灯项的布局可能需要根据可用空间进行调整。",
        },
        "c-carousel-a11y-keyboard-navigation": {
          title: "键盘导航",
          description:
            "键盘和辅助技术用户应该能够在不单击导航控件的情况下导航走马灯内容。",
        },
      },
    },

    "c-checkbox": {
      title: "复选框",
      description: "用于从列表中选择一个或多个值的表单字段。",
      checklist: {
        "c-checkbox-label": {
          title: "标签",
          description:
            "应该有一个与复选框字段相关联的文本标签。单击标签也应触发复选框选择。如果标签没有在页面上呈现，则辅助技术仍应该宣布它。",
        },
        "c-checkbox-checked": {
          title: "选中状态",
          description: "在复选框被选中并用于表单提交时显示。",
        },
        "c-checkbox-error": {
          title: "错误状态",
          description:
            "当错误与复选框字段相关时，使用错误状态进行表单验证。始终使用文本错误以及不同的字段颜色。",
        },
        "c-checkbox-disabled": {
          title: "禁用状态",
          description:
            "使用禁用状态来防止复选框交互并从提交的表单值中删除其值。",
        },
        "c-checkbox-indeterminate": {
          title: "不定状态",
          description:
            "在复选框具有可选择子元素且仅有一些被选中时，以视觉方式显示。",
        },
        "c-checkbox-group": {
          title: "复选框组",
          description: "复选框可以分组以同时处理多个值。",
        },
        "c-checkbox-a11y-keyboard": {
          title: "键盘支持",
          description:
            "应该使用键盘触发复选框选择。使用本机元素应自动提供此类交互。",
        },
      },
    },

    "c-divider": {
      title: "分隔线",
      description: "用于视觉内容分隔的元素。",
      checklist: {
        "c-divider-direction": {
          title: "方向",
          description: "分隔线应分隔水平和垂直内容列表。",
        },
        "c-divider-a11y-role": {
          title: "无障碍角色",
          description:
            "如果分隔线在布局中发挥非装饰性角色，则应由辅助技术宣布其角色。",
        },
      },
    },

    "c-dropdown": {
      title: "下拉菜单",
      description: "用户可以触发的上下文操作列表。",
      checklist: {
        "c-dropdown-composition": {
          title: "内容组成",
          description:
            "下拉菜单可用于上下文菜单、产品导航和其他用途。它们的内容区域应具有足够的灵活性，以支持各种类型的内容，包括其他组件。",
        },
        "c-dropdown-hover": {
          title: "悬停触发",
          description:
            "下拉菜单应支持在悬停事件上显示其内容。一旦其触发器获得焦点，键盘用户应该有相同的行为。",
        },
        "c-dropdown-positioning": {
          title: "动态定位",
          description:
            "下拉菜单内容应基于屏幕上触发元素的当前位置显示，并始终对用户可见。",
        },
        "c-dropdown-responsive": {
          title: "响应式设计",
          description:
            "如果下拉菜单在移动设备上与桌面设备上不同，则应调整下拉菜单内容。",
        },
        "c-dropdown-a11y-focus": {
          title: "焦点捕获",
          description:
            "一旦打开下拉菜单内容，焦点环应移动到其内容区域内，并在关闭时返回到触发元素。",
        },
        "c-dropdown-a11y-keyboard": {
          title: "键盘导航",
          description:
            "下拉菜单应该对键盘和辅助技术进行可访问。用户应该能够使用单独的关闭操作关闭下拉菜单，或者一旦他们在内容区域之外按Tab键。",
        },
      },
    },

    "c-icon": {
      title: "图标",
      description: "用于控制SVG资源外观的包装器。",
      checklist: {
        "c-icon-colors": {
          title: "颜色",
          description:
            "图标应支持设计系统令牌中可用的颜色值。此外，支持从其父元素继承颜色是一个好的实践。",
        },
        "c-icon-sizes": {
          title: "尺寸",
          description:
            "图标应具有几个预定义的尺寸，以提供整体的产品体验。可以使用排版配对来为这些大小值提供文本大小对齐。",
        },
        "c-icon-a11y-decoration": {
          title: "交互性",
          description:
            "大多数情况下，图标用作装饰元素。如果图标需要交互 - 应该使用按钮、链接或其他交互式组件包含该功能。",
        },
      },
    },

    "c-image": {
      title: "图片",
      description: "用于显示图像并控制其行为的实用程序。",
      checklist: {
        "c-image-sizes": {
          title: "尺寸",
          description:
            "图像应该在支持的尺寸方面具有灵活性。除了仅支持宽度和高度之外，还应支持纵横比，以根据父元素动态缩放其比例。",
        },
        "c-image-fallback": {
          title: "图像备用方案",
          description:
            "当图像URL不正确或未定义时，应显示备用方案。这可以是具有背景的空框，图标或静态占位符图像。",
        },
        "c-image-density": {
          title: "屏幕密度支持",
          description:
            "根据屏幕密度，您应该支持加载多个不同尺寸的图像资源，并向用户提供相关的图像。",
        },
        "c-image-a11y-alt": {
          title: "Alt文本",
          description: "当图像是非装饰性的时，应提供描述图片内容的Alt文本。",
        },
      },
    },

    "c-link": {
      title: "链接",
      description: "交互式文本元素，用于在文本段落中进行导航。",
      checklist: {
        "c-link-icon": {
          title: "图标支持",
          description:
            "可以在链接旁边使用图标来传达链接的目的。不应在没有文本标签的情况下在链接内使用图标。",
        },
        "c-link-colors": {
          title: "颜色",
          description:
            "链接在您的产品中可能扮演各种角色，为每个角色定义预定义颜色应有助于用户理解它们的含义。由于链接是文本元素，因此它应该能够自动继承由其父元素定义的颜色，就像其他文本内容一样。",
        },
        "c-link-disabled": {
          title: "禁用状态",
          description: "直观地显示链接不可交互，并限制其被按下。",
        },
        "c-link-font-inheritance": {
          title: "字体继承",
          description: "链接应能够在作为文本元素的一部分使用时继承排版样式。",
        },
        "c-link-multiline": {
          title: "多行显示",
          description:
            "在文本段落中使用时，链接应支持多行显示，而不会破坏文本流。",
        },
        "c-link-a11y-role": {
          title: "可访问性角色",
          description:
            "链接应正确地宣布按钮或链接可访问性角色，并根据传递给它的属性自动解决它。",
        },
      },
    },

    "c-list": {
      title: "列表",
      description: "列表用于显示项目列表。",
      checklist: {
        "c-list-order": {
          title: "排序",
          description: "列表项可以使用项目符号、编号和其他样式和类型的排序。",
        },
        "c-list-composition": {
          title: "内容组成",
          description:
            "列表项内容区域应具有足够的灵活性，以支持各种类型的内容，包括其他组件。",
        },
        "c-list-a11y-role": {
          title: "可访问性角色",
          description: "辅助技术应正确宣布列表的角色和显示的项目数。",
        },
      },
    },

    "c-loading-indicator": {
      title: "加载指示器",
      description: "动画元素，用于传达进度，而不告诉进程需要多长时间。",
      checklist: {
        "c-loading-indicator-colors": {
          title: "颜色",
          description:
            "加载指示器可能会在具有各种角色的元素内使用，并遵循其颜色方案。",
        },
        "c-loading-indicators-sizes": {
          title: "尺寸",
          description:
            "根据加载指示器呈现的区域的大小，加载指示器可能提供多个尺寸。",
        },
        "c-loading-indicator-time": {
          title: "加载持续时间",
          description:
            "在某些情况下，无法确定等待时间。应在加载完成或出现错误之前显示加载指示器。在其他情况下，最好指示剩余的加载时间。",
        },
        "c-loading-indicator-a11y-reduced-motion": {
          title: "减少动态效果",
          description:
            "加载指示器应与系统动态设置同步，并在打开减少动态设置时减少其动画速度。",
        },
        "c-loading-indicator-a11y-label": {
          title: "可访问性标签",
          description:
            "如果加载指示器是独立的，请为其正在加载的内容区域提供可访问性标签。",
        },
      },
    },

    "c-modal": {
      title: "对话框",
      description: "出现在主内容前面的容器，以提供关键信息或可操作内容。",
      checklist: {
        "c-modal-composition": {
          title: "内容组成",
          description:
            "主内容区域应具有足够的灵活性，以支持各种类型的内容，包括其他组件。",
        },
        "c-modal-actions": {
          title: "辅助操作",
          description:
            "由于对话框中的内容可能是可操作的，因此需要一个操作元素区域。该区域通常位于对话框容器的底部。",
        },
        "c-modal-close": {
          title: "关闭操作",
          description:
            "对话框应提供一种简单的关闭方式，因为它们在打开时会阻止内容。这可以是单独的关闭按钮或其中一个辅助操作。",
        },
        "c-modal-positioning": {
          title: "定位",
          description:
            "对话框可以位于屏幕中央，也可以显示为屏幕两侧的滑动工作表。",
        },
        "c-modal-sizes": {
          title: "尺寸",
          description: "支持根据您显示的内容更改对话框的高度和宽度。",
        },
        "c-modal-a11y-focus": {
          title: "焦点捕获",
          description:
            "当打开对话框时，用户焦点应移动到第一个可聚焦元素并保持在其中。关闭对话框时，焦点应返回到上一个活动元素。",
        },
        "c-modal-a11y-keyboard": {
          title: "键盘导航",
          description:
            "可以通过按Esc键关闭对话框，并且对话框容器内的所有可聚焦元素都应可通过键盘导航访问。",
        },
        "c-modal-a11y-labels": {
          title: "标题和副标题标签",
          description:
            "对话框应使用正确的可访问性角色，并应由标题和副标题元素标记。如果没有可见的标题或副标题，则可以使用可访问性标签。",
        },
      },
    },

    "c-pagination": {
      title: "分页",
      description: "分页允许从一系列页面中进行选择。",
      checklist: {
        "c-pagination-selected": {
          title: "选定页面状态",
          description: "在列表中视觉上突出显示所选页面，并使其无法交互。",
        },
        "c-pagination-ranges": {
          title: "页面显示范围",
          description:
            "定义所选页面周围呈现的页面范围。它有助于仅呈现有限数量的页面，但使用户比一次移动一页更快地导航。",
        },
        "c-pagination-amount": {
          title: "每页项目数量",
          description: "提供选择在页面上显示的分页项目数量的选项。",
        },
        "c-pagination-indeterminate": {
          title: "不确定的页面数量",
          description:
            "当您事先不知道可用页面的总数时，请使用不同的显示模式单独导航页面。",
        },
        "c-pagination-a11y-label": {
          title: "完整页面标签公告",
          description:
            "分页应为辅助技术提供每个页面的清晰、动态标签，而不仅仅是在没有上下文的情况下宣布数字。",
        },
        "c-pagination-a11y-state": {
          title: "状态公告",
          description: "分页应在焦点选中所选页面时宣布。",
        },
      },
    },

    "c-progress": {
      title: "进度条",
      description: "显示需要很长时间或由多个步骤组成的任务的进度。",
      checklist: {
        "c-progress-label": {
          title: "标签",
          description: "支持可视化显示标签，以解释进度条负责的内容。",
        },
        "c-progress-sizes": {
          title: "尺寸",
          description:
            "根据加载指示器呈现的区域的大小，加载指示器可能提供多个尺寸。",
        },
        "c-progress-duration": {
          title: "持续时间",
          description:
            "在某些情况下，无法确定等待时间。应在加载完成或出现错误之前显示加载指示器。在其他情况下，最好指示剩余的加载时间。",
        },
        "c-progress-a11y-label": {
          title: "可访问性标签",
          description: "如果无法在界面中显示标签，请支持添加可访问性标签。",
        },
      },
    },

    "c-radio": {
      title: "单选框",
      description: "单选框是用于从列表中选择一个选项的表单元素。",
      checklist: {
        "c-radio-label": {
          title: "标签",
          description:
            "应该有一个与单选框字段相关联的文本标签。单击标签也应触发复选框选择。如果标签未在页面上呈现，则辅助技术仍应宣布它。",
        },
        "c-radio-checked": {
          title: "选中状态",
          description: "显示单选框被选中并用于表单提交的状态。",
        },
        "c-radio-error": {
          title: "错误状态",
          description:
            "当错误与单选框字段相关时，使用错误状态进行表单验证。始终使用文本错误以及不同的字段颜色。",
        },
        "c-radio-disabled": {
          title: "禁用状态",
          description:
            "使用禁用状态防止单选框交互，并从提交的表单值中删除其值。",
        },
        "c-radio-group": {
          title: "单选框组",
          description:
            "单选按钮始终作为一组使用，以避免在选中其中一个单选按钮后锁定选择。",
        },
        "c-radio-a11y-keyboard": {
          title: "键盘支持",
          description:
            "应使用键盘触发单选框选择。使用本机元素应自动提供此类交互。",
        },
      },
    },

    "c-select": {
      title: "选择框",
      description: "选择框允许您从选项列表中选择单个值。",
      checklist: {
        "c-select-label": {
          title: "标签",
          description:
            "与选择框字段相关联的文本标签可以为用户提供附加上下文。单击标签也应触发选择下拉菜单。",
        },
        "c-select-error": {
          title: "错误状态",
          description:
            "当错误仅涉及选择时，请使用错误状态进行表单验证。为了更好的可访问性，显示额外的错误图标。",
        },
        "c-select-disabled": {
          title: "禁用状态",
          description: "使用禁用状态防止选择交互，并从提交的表单值中删除其值。",
        },
        "c-select-placeholder": {
          title: "占位符",
          description:
            "当未选择任何值时，请显示占位符值。您可以使用相同的占位符值将选择值重置回默认值。",
        },
        "c-select-helper": {
          title: "辅助文本",
          description: "为用户提供有关选择目的和选择要求的附加上下文。",
        },
        "c-select-icon": {
          title: "图标支持",
          description:
            "添加一个区域，以在字段开始处显示图标，以传达选择作为组件或所选值的目的。",
        },
        "c-select-prefix": {
          title: "前缀",
          description:
            "添加一个区域以自定义内容，使选择对用户更具上下文。例如，您可以在国家代码选择中显示国旗。",
        },
        "c-select-sizes": {
          title: "尺寸",
          description:
            "根据选择框将要使用的位置，它可以具有多个尺寸。例如，您可以在应用程序的密集区域中使用小尺寸。",
        },
        "c-select-a11y-label": {
          title: "可访问性标签",
          description:
            "如果您没有为选择提供视觉文本标签，请确保仍提供描述组件目的的可访问性标签。",
        },
      },
    },

    "c-skeleton": {
      title: "骨架屏",
      description: "在数据加载时替换页面元素的占位符。",
      checklist: {
        "c-skeleton-sizes": {
          title: "尺寸",
          description:
            "骨架屏应该能够匹配您设计系统中可用的各种尺寸的组件，以避免数据加载后不必要的布局移位。",
        },
        "c-skeleton-shapes": {
          title: "形状",
          description:
            "骨架屏应该能够匹配您设计系统中可用的各种形状的组件，以使加载状态与实际组件的布局保持一致。",
        },
        "c-skeleton-composition": {
          title: "组成",
          description:
            "您可以将简单的骨架屏组合成更高级的布局。您不必将应用程序界面与骨架屏进行1:1映射。",
        },
        "c-skeleton-a11y-motion": {
          title: "降低动画",
          description: "为了适应降低动画的用户偏好，减少或完全删除动画。",
        },
      },
    },

    "c-switch": {
      title: "开关",
      description: "用于立即更改单个项目状态的切换。",
      checklist: {
        "c-switch-label": {
          title: "标签",
          description:
            "应该有一个与开关相关联的文本标签。单击标签也应触发开关选择。如果标签未在页面上呈现，则辅助技术仍应宣布它。",
        },
        "c-switch-checked": {
          title: "选中状态",
          description:
            "当选择开关并激活底层功能时，请显示。通常，开关用于在选择后立即更新数据。",
        },
        "c-switch-disabled": {
          title: "禁用状态",
          description: "使用禁用状态防止开关交互。",
        },
        "c-switch-a11y-keyboard": {
          title: "键盘导航",
          description:
            "应使用键盘触发开关选择。使用本机元素应自动提供此类交互。",
        },
        "c-switch-a11y-label": {
          title: "可访问性标签",
          description:
            "如果您没有为开关提供视觉文本标签，请确保仍提供描述组件目的的可访问性标签。",
        },
      },
    },

    "c-tabs": {
      title: "选项卡",
      description: "在多个页面或内容部分之间导航。",
      checklist: {
        "c-tabs-composition": {
          title: "内容组成",
          description:
            "内容区域应足够灵活，以支持各种类型的内容，包括其他组件。",
        },
        "c-tabs-variants": {
          title: "变体",
          description:
            "为了支持不同的渲染上下文，选项卡可能支持多个变体。例如，当直接在页面上使用时，它们可能呈现为药片，而在卡中呈现选项卡时则使用下划线变体。",
        },
        "c-tabs-selected": {
          title: "选中状态",
          description:
            "由于选项卡始终显示其面板中的内容，因此应始终选择其中一个选项卡触发器并在视觉上突出显示。",
        },
        "c-tabs-disabled": {
          title: "禁用状态",
          description:
            "可以禁用选项卡触发器，以防止用户切换到特定的选项卡面板。",
        },
        "c-tabs-icon": {
          title: "图标支持",
          description:
            "为了更好地说明每个选项卡的含义，您可以在选项卡触发器文本旁边显示图标。",
        },
        "c-tabs-equal": {
          title: "等宽布局",
          description:
            "当用于占用父容器的整个宽度时，选项卡触发器可以被拉伸以占用相等的水平空间。",
        },
        "c-tabs-a11y-keyboard": {
          title: "键盘支持",
          description:
            "当使用键盘与选项卡交互时，它们应支持箭头导航以在前一个和下一个面板之间切换。Home和End按钮也应将选择移动到第一个和最后一个面板。",
        },
      },
    },

    "c-text-area": {
      title: "文本区域",
      description: "用于输入和编辑多行文本的表单字段。",
      checklist: {
        "c-text-area-label": {
          title: "标签",
          description:
            "与文本区域相关联的文本标签可以为用户提供附加上下文。单击标签应将焦点移动到字段。",
        },
        "c-text-area-error": {
          title: "错误状态",
          description: "当错误仅与文本区域有关时，请使用错误状态进行表单验证。",
        },
        "c-text-area-disabled": {
          title: "禁用状态",
          description:
            "使用禁用状态防止文本区域交互，并从提交的表单值中删除其值。",
        },
        "c-text-area-placeholder": {
          title: "占位符",
          description:
            "当文本区域值为空时，请显示占位符值。确保它不是标签的替代品。",
        },
        "c-text-area-helper": {
          title: "辅助文本",
          description: "为用户提供有关文本区域目的和期望值要求的附加上下文。",
        },
        "c-text-area-sizes": {
          title: "尺寸",
          description:
            "根据文本区域将在哪里使用，它可以有多个尺寸。例如，您可以在营销页面上的表单中使用大尺寸。",
        },
        "c-text-area-a11y-label": {
          title: "可访问性标签",
          description:
            "如果您没有为文本区域提供视觉文本标签，请确保仍提供描述组 件目的的可访问性标签。",
        },
      },
    },

    "c-text-field": {
      title: "文本字段",
      description: "用于输入和编辑单行文本的表单字段。",
      checklist: {
        "c-text-field-label": {
          title: "标签",
          description:
            "与文本字段相关联的文本标签可以为用户提供附加上下文。单击标签应将焦点移动到字段。",
        },
        "c-text-field-error": {
          title: "错误状态",
          description: "当错误仅与文本字段有关时，请使用错误状态进行表单验证。",
        },
        "c-text-field-disabled": {
          title: "禁用状态",
          description:
            "使用禁用状态防止文本字段交互，并从提交的表单值中删除其值。",
        },
        "c-text-field-placeholder": {
          title: "占位符",
          description:
            "当文本字段值为空时，请显示占位符值。确保它不是标签的替代品。",
        },
        "c-text-field-helper": {
          title: "辅助文本",
          description: "为用户提供有关文本字段目的和期望值要求的附加上下文。",
        },
        "c-text-field-icon": {
          title: "图标支持",
          description:
            "添加一个用于在字段开头显示图标的区域，以传达文本字段作为组件或字段值的目的。",
        },
        "c-text-field-affix": {
          title: "前缀/后缀",
          description:
            "添加一个用于自定义内容的区域，使用户更具上下文感知。例如，您可以在信用卡号码的文本字段中显示支付提供商。",
        },
        "c-text-field-sizes": {
          title: "尺寸",
          description:
            " 根据文本字段将在哪里使用，它可以有多个尺寸。例如，您可以在营销页面上的表单中使用大尺寸。",
        },
        "c-text-field-a11y-label": {
          title: "可访问性标签",
          description:
            "如果您没有为文本字段提供视觉文本标签，请确保仍提供描述组件目的的可访问性标签。",
        },
      },
    },

    "c-toast": {
      title: "通知",
      description: "显示在页面内容上方的通知消息或信息。",
      checklist: {
        "c-toast-composition": {
          title: "内容组成",
          description:
            "内容区域应足够灵活，以支持各种类型的内容，包括其他组件。",
        },
        "c-toast-colors": {
          title: "颜色",
          description:
            "根据通知在通知中显示的作用，它可以有多种颜色。例如，可以将其涂成红色以进行错误通知。",
        },
        "c-toast-icon": {
          title: "图标支持",
          description:
            "添加一个用于在通知开始处显示图标的区域，以传达通知的目的。",
        },
        "c-toast-timeout": {
          title: "超时",
          description:
            "通知通常在超时后被解除。请确保提供足够长的超时时间，以便让用户阅读消息。如果没有超时，则提供一个按钮来关闭通知。",
        },
        "c-toast-stacking": {
          title: "堆叠",
          description:
            "当触发了多个通知时，请将它们堆叠在彼此上方，以避免屏幕混乱。",
        },
        "c-toast-action": {
          title: "补充操作",
          description:
            "通知中的操作应与通知目的相关。例如，如果您通知用户删除内容，则操作元素可以帮助他们撤消此操作。",
        },
        "c-toast-a11y-focus": {
          title: "焦点管理",
          description:
            "当通知有操作时，它们应该可以从键盘上聚焦以触发它们。当焦点在通知容器内部时，超时应该被禁用。",
        },
        "c-toast-a11y-motion": {
          title: "减少动画",
          description: "为了满足减少动画的用户偏好，减少或完全删除动画。",
        },
      },
    },

    "c-tooltip": {
      title: "工具提示",
      description: "在元素悬停或聚焦时显示上下文文本信息。",
      checklist: {
        "c-tooltip-positioning": {
          title: "定位",
          description:
            "当工具提示的默认位置无法适应视口时，请确保动态将其位置切换到另一个值。",
        },
        "c-tooltip-timeout": {
          title: "超时",
          description:
            "在打开工具提示之前，请稍等片刻，以确保它们不会在用户在屏幕上移动其光标时打开。",
        },
        "c-tooltip-a11y-keyboard": {
          title: "键盘支持",
          description:
            "工具提示不仅应在鼠标悬停时可访问，还应在触发元素聚焦时可访问。",
        },
      },
    },
  },
};
