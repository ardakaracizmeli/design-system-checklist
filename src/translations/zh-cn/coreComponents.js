export default {
  title: "Core components",
  description:
    "Components are the main building blocks for user interfaces. Building a reusable component library enhances your product development workflow by reducing design and tech debt and speeding up the process. Core components can’t be broken down into granular pieces without losing their meaning.",
  sections: {
    "cc-avatar": {
      title: "Avatar",
      description:
        "Avatars are used to show a thumbnail of a user photo or a visual representation of any other type of content.",
      checklist: {
        "cc-avatar-image": {
          title: "Image",
          description:
            "Avatars should mask an image into their shape and work with any image size since they may get this image from unknown data sources.",
        },
        "cc-avatar-image-fallback": {
          title: "Image fallback",
          description:
            "There should be fallbacks when there’s no image available. This can be done with placeholder images or initials.",
        },
        "cc-avatar-a11y": {
          title: "Accessibility",
          description:
            "Always provide a description for screen readers describing what’s displayed on the avatar image instead of just naming its role.",
        },
        "cc-avatar-sizes": {
          title: "Sizes",
          description:
            "There are many contexts to use avatars and they all require different sizes for the component. For average projects use at least 2-3 different sizes and make sure there’s at least a small size available.",
        },
        "cc-avatar-icon": {
          title: "Icon",
          description:
            "Avatars can be used with an icon instead of an image to emphasize areas that don’t necessarily have (or need) an image associated with it.",
        },
        "cc-avatar-bg": {
          title: "Background colours",
          description:
            "When used with icons or text, there has to be a background colour from the design system colour tokens applied to the avatar shape. Make sure that icons and text have enough contrast ratio with the background according to the WCAG AA standard.",
        },
      },
    },
    "cc-badge": {
      title: "Badge",
      description:
        "Badges are elements that represent the status of an object or user input value.",
      checklist: {
        "cc-badge-appearance": {
          title: "Appearance",
          description:
            "Badges may play various roles in your product and having a predefined colour for each role should help users understand their meaning. When changing colours, make sure the text has enough contrast ratio with the background according to the WCAG AA standard.",
        },
        "cc-badge-dismiss": {
          title: "Dismissible action",
          description:
            "Badges can be used as a dynamic way to display selected values and there should be a way to dismiss them.",
        },
      },
    },
    "cc-banner": {
      title: "Banner",
      description:
        "Banners display an actionable message used as a prominent way of communicating with your users.",
      checklist: {
        "cc-banner-appearance": {
          title: "Appearance",
          description:
            "Banners are used to display different types of messages and it’s important to differentiate their visual appearance based on the role they’re playing. If you’re using background colours for role differentiation, make sure there’s enough contrast ratio with the content according to the WCAG AA standard.",
        },
        "cc-banner-image": {
          title: "Area for icons or images",
          description:
            "Banners can supplement their message using a supporting icon or image. They shouldn’t be used instead of text content.",
        },
        "cc-banner-actions": {
          title: "Actions",
          description:
            "Actions in banners should relate to its text and provide a way to react to the message sent to the user.",
        },
        "cc-banner-dismiss": {
          title: "Dismissible action",
          description:
            "Don’t overwhelm the user with banners on the page and include a dismissable action. That may be either a separate close button or one of the actions provided.",
        },
        "cc-banner-a11y": {
          title: "Accessibility",
          description:
            "If a banner dynamically appears on the page, it should be announced to the user by their assistive technology.",
        },
        "cc-banner-mobile": {
          title: "Responsiveness",
          description:
            "Banners should adapt to the viewport size. This usually means that they become full-width for mobile to save some space.",
        },
      },
    },
    "cc-button": {
      title: "Button",
      description:
        "Buttons are interactive elements used for single-step actions.",
      checklist: {
        "cc-button-hover": {
          title: "Hover state",
          description:
            "Clearly show that the button is interactive when it gets hovered with a mouse cursor.",
        },
        "cc-button-active": {
          title: "Active state",
          description:
            "Used when a button gets pressed. The same state can be used to represent the button responsible for toggling another element on the page while that element is visibly opened.",
        },
        "cc-button-focus": {
          title: "Focused state",
          description:
            "Used when a button gets selected through keyboard navigation.",
        },
        "cc-button-icon": {
          title: "Icon support",
          description:
            "Icons easily communicate the purpose of the button when used next to its label or can be used without text when there’s not enough space. Make sure that the accessibility label is provided when used with an icon only.",
        },
        "cc-button-disabled": {
          title: "Disabled",
          description:
            "Visually shows that a button is not interactive and restricts it from being pressed.",
        },
        "cc-button-loading": {
          title: "Loading",
          description:
            "Used when users have to wait for the result of their action after they press a button. If a spinner is used to display this state make sure that it’s not changing the original button width or height.",
        },
        "cc-button-full-width": {
          title: "Full-width",
          description:
            "By default buttons take the width of their content, but they should also come with a full width variant that works well in mobile devices.",
        },
        "cc-button-variants": {
          title: "Variants",
          description:
            "When using multiple buttons, there should be a way to differentiate between primary and secondary actions. Buttons may play different roles for the user or be used on different types of surfaces and they have to change the way they look.",
        },
        "cc-button-sizes": {
          title: "Sizes",
          description:
            "Buttons can be used in different areas of the website and may have multiple predefined sizes. On mobile, tappable areas have to be a minimum of 48px to be accessible according to iOS and Android accessibility guidelines.",
        },
      },
    },
    "cc-card": {
      title: "Card",
      description:
        "Cards are used to group information about subjects and their related actions.",
      checklist: {
        "cc-card-content": {
          title: "Supports any type of content",
          description:
            "Cards are one of the most used components in the product, so they have to be flexible enough to support any other components placed in them.",
        },
        "cc-card-structure": {
          title: "Information structure",
          description:
            "No matter how flexible cards are, it’s important for cards to have a specific structure for its elements for product consistency.",
        },
        "cc-card-media": {
          title: "Supports media sections",
          description:
            "One of the most popular scenarios for using cards is mixing them with media content. The most popular options are having a full-width area on top of the content or full-height area at one of the card’s sides.",
        },
        "cc-card-actions": {
          title: "Supplementary actions",
          description:
            "Cards can be used with actions usually placed at the bottom of the card, or the card itself can be tappable and represent an action.",
        },
        "cc-card-mobile": {
          title: "Responsiveness",
          description:
            "On mobile viewports cards are usually full-width in order to save space for the content.",
        },
      },
    },
    "cc-carousel": {
      title: "Carousel",
      description:
        "Carousels stack the same type of items and allows scrolling through them horizontally.",
      checklist: {
        "cc-carousel-controls": {
          title: "Navigation controls",
          description:
            "Carousels should have easy-to-find navigation controls for scrolling through content.",
        },
        "cc-carousel-content": {
          title: "Supports any content",
          description:
            "Carousels can be used in different contexts and shouldn’t be limited to a specific child component. In some scenarios you might want items within the same carousel to differ from each other.",
        },
        "cc-carousel-width": {
          title: "Items width customisation",
          description:
            "For simple products, it might be fine to use multiple predefined sizes for carousel items. For more flexibility, it’s good to provide a way to define a custom width.",
        },
        "cc-carousel-touch": {
          title: "Touch events support",
          description:
            "Carousels should be scrollable on touch devices. Some of the best practices are to use native scrolling and to make sure you’re supporting the same behaviour for all touch devices, not just mobile phones.",
        },
        "cc-carousel-keyboard": {
          title: "Keyboard navigation",
          description:
            "It should be possible to scroll through content with keyboard arrows when focused on navigation controls.",
        },
        "cc-carousel-mobile": {
          title: "Responsiveness",
          description:
            "It’s good practice to hide or reduce the size of navigation controls for mobile viewports to improve the visibility of the content.",
        },
      },
    },
    "cc-dropdown": {
      title: "Dropdown",
      description:
        "Dropdowns are used to display a contextual subview with a list of actions or content related to the area where the dropdown is.",
      checklist: {
        "cc-dropdown-content": {
          title: "Supports any type of content",
          description:
            "Dropdowns may be used in a lot of contexts like date pickers, language selection or other product features.",
        },
        "cc-dropdown-menu": {
          title: "Action menu",
          description:
            "One of the most used scenarios for dropdowns is providing an action menu for the user, so it’s useful to have this layout defined.",
        },
        "cc-dropdown-trap": {
          title: "Focus trapping",
          description:
            "Once the dropdown’s opened, the focus should work only for elements inside the dropdown. When it’s closed, the focus should move to the dropdown trigger.",
        },
        "cc-dropdown-close": {
          title: "Close action",
          description:
            "Either some actions inside the dropdown should close it or there should be a separate close button. Also, it’s good practice to close the dropdown when a user clicks outside.",
        },
        "cc-dropdown-keyboard": {
          title: "Keyboard navigation",
          description:
            "It should be possible to navigate through dropdown children elements with the keyboard and close it with an Esc key.",
        },
        "cc-dropdown-position": {
          title: "Dynamic positioning",
          description:
            "Dropdown content should be displayed based on the current position of the trigger element on the screen and always visible to the user.",
        },
        "cc-dropdown-mobile": {
          title: "Responsiveness",
          description:
            "Dropdown content should be adapted for mobile viewpoints as it may take a lot of space on desktops.",
        },
      },
    },
    "cc-icon": {
      title: "Icon",
      description:
        "The icon component is a way to align the way iconography static assets are displayed in the product.",
      checklist: {
        "cc-icon-sizes": {
          title: "Sizes",
          description:
            "Icons should have a number of predefined sizes to provide a holistic experience across the product. Typography pairings may be used for these size values to ensure that they are aligned with the text sizes.",
        },
        "cc-icon-colors": {
          title: "Colours",
          description:
            "Icons should be using values from the design system colour palette. Using parent element text colour for icon fill colour can make this automatic.",
        },
      },
    },
    "cc-checkbox": {
      title: "Input checkbox",
      description:
        "An input checkbox is a form element used for selecting one or multiple options.",
      checklist: {
        "cc-checkbox-checked": {
          title: "Checked state",
          description:
            "Used when the checkbox is selected and will use its value for the form submission.",
        },
        "cc-checkbox-disabled": {
          title: "Disabled state",
          description:
            "Prevents checkbox interactions and removes its value from the form submission.",
        },
        "cc-checkbox-indeterminate": {
          title: "Indeterminate state",
          description:
            "Used when the checkbox has children selectable elements and only some of them are selected.",
        },
        "cc-checkbox-label": {
          title: "Label",
          description:
            "There should be a text label linked with the checkbox field. Clicking the label should also trigger the checkbox selection.",
        },
        "cc-checkbox-error": {
          title: "Error state",
          description:
            "The error state is used for form validation errors when the error is related to the checkbox field only. Always use a text error along with changing the colour of the field.",
        },
        "cc-checkbox-keyboard": {
          title: "Keyboard support",
          description:
            "Checkbox selections should be triggered with the Space key. Using native elements for this should provide this kind of interaction out of the box.",
        },
        "cc-checkbox-group": {
          title: "Checkbox group",
          description:
            "Checkboxes can be grouped to work with multiple values at the same time.",
        },
      },
    },
    "cc-radio": {
      title: "Input radio",
      description:
        "An input radio is a form element used for selecting one option from a list.",
      checklist: {
        "cc-radio-checked": {
          title: "Checked state",
          description:
            "Used when the radio is selected and will use its value for the form submission. A radio input can’t be unselected by pressing it again.",
        },
        "cc-radio-disabled": {
          title: "Disabled state",
          description:
            "Prevents radio interactions and removes its value from the form submission.",
        },
        "cc-radio-label": {
          title: "Label",
          description:
            "There should be a text label linked with the radio field. Clicking the label should also trigger the radio selection.",
        },
        "cc-radio-error": {
          title: "Error state",
          description:
            "The error state is used for form validation errors when the error is related to the radio field only. Always use a text error along with changing the colour of the field.",
        },
        "cc-radio-keyboard": {
          title: "Keyboard support",
          description:
            "A radio selection should be triggered when the Space key is pressed. Using native elements for this should provide this kind of interaction out of the box.",
        },
        "cc-radio-group": {
          title: "Radio group",
          description:
            "Radio inputs should always be used in a group. If  one of them is selected, it can be deselected only by choosing another radio.",
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
