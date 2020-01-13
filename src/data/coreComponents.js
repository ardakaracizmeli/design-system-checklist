export default {
  "id": "core-components",
  "title": "Core components",
  "description": "Components are the main building blocks for user interfaces. Building a reusable component library enhances the product development workflow by reducing design and tech debt and speeding up the process.",
  "sections": [{
    "title": "Avatar",
    "id": "cc1",
    "description": "Avatars are used to show a thumbnail of a user photo or a visual representation of any other type of content.",
    "checklist": [{
      "id": "cc2",
      "title": "Image",
      "description": "Avatar should mask an image into its shape and work with any image size since it may get this image from unknown data sources."
    }, {
      "id": "cc3",
      "title": "Image fallback",
      "description": "There should be fallbacks when there’s no image available. This can be done with placeholder images or initials."
    }, {
      "id": "cc4",
      "title": "Accessibility",
      "description": "Always provide a description for screen readers describing what’s displayed on the avatar image instead of just naming its role."
    }, {
      "id": "cc5",
      "title": "Sizes",
      "description": "There are many contexts to use avatars and they all require different sizes for the component. For average projects use at least 2-3 different sizes and make sure there’s at least a small size available."
    }, {
      "id": "cc6",
      "title": "Icon",
      "description": "Avatars can be used with an icon instead of an image to emphasize areas that don’t necessarily have (or need) an image associated with it."
    }, {
      "id": "cc7",
      "title": "Background colours",
      "description": "When used with icons or text, there has to be a background colour from the design system colour tokens applied to the avatar shape. Make sure that icon and text have enough contrast ratio with the background according to the WCAG AA standard."
    }],
    "resources": [{
      "title": "Design Better Avatars",
      "url": "https://uxdesign.cc/design-avatars-that-make-sense-and-be-more-inclusive-in-the-process-d4dd6a486ea6"
    }, {
      "title": "Lightning Design System: Avatar",
      "url": "https://www.lightningdesignsystem.com/components/avatar/"
    }]
  }, {
    "title": "Badge",
    "id": "cc8",
    "description": "Badges are elements that represent the status of an object or user input value.",
    "checklist": [{
      "id": "cc9",
      "title": "Appearance",
      "description": "Badges may play various roles in your product and having a predefined colour for each role should help users understand their meaning. When changing colours, make sure the text has enough contrast ratio with the background according to the WCAG AA standard."
    }, {
      "id": "cc10",
      "title": "Dismissible action",
      "description": "Badges can be used as a dynamic way to display selected values and there should be a way to dismiss them."
    }],
    "resources": [{
      "title": "Atlaskit: Badge",
      "url": "https://atlaskit.atlassian.com/packages/core/badge"
    }, { "title": "Material Design: Chips", "url": "https://material.io/components/chips/" }]
  }, {
    "title": "Banner",
    "id": "cc11",
    "description": "Banners display an actionable message used as a prominent way of communicating with your users.",
    "checklist": [{
      "id": "cc12",
      "title": "Appearance",
      "description": "Banners are used to display different types of messages and it’s important to differentiate their visual appearance based on the role they’re playing. If you’re using background colours for role differentiation, make sure there’s enough contrast ratio with the content according to the WCAG AA standard."
    }, {
      "id": "cc13",
      "title": "Area for icons or images",
      "description": "Banners can supplement their message using a supporting icon or image. However, they shouldn’t be used instead of text content."
    }, {
      "id": "cc14",
      "title": "Actions",
      "description": "Actions in banners should relate to its text and provide a way to react to the message sent to the user."
    }, {
      "id": "cc15",
      "title": "Dismissible action",
      "description": "Don’t overwhelm the user with banners on the page, and include a dismissable action. That may be either a separate close button or one of the actions provided."
    }, {
      "id": "cc16",
      "title": "Accessibility",
      "description": "If a banner dynamically appears on the page, it should be announced to the user by their assistive technology."
    }, {
      "id": "cc17",
      "title": "Responsiveness",
      "description": "Banners should adapt to the viewport size. This usually means that they become full-width for mobile to save some space."
    }],
    "resources": [{
      "title": "Shopify Polaris: Banner",
      "url": "https://polaris.shopify.com/components/feedback-indicators/banner"
    }]
  }, {
    "title": "Button",
    "id": "cc18",
    "description": "Buttons are interactive elements used for single-step actions.",
    "checklist": [{
      "id": "cc19",
      "title": "Hover state",
      "description": "Clearly show that the button is interactive when it gets hovered with a mouse cursor."
    }, {
      "id": "cc20",
      "title": "Active state",
      "description": "Used when a button gets pressed. The same state can be used to represent the button responsible for toggling another element on the page while that element is visibly opened."
    }, {
      "id": "cc21",
      "title": "Focused state",
      "description": "Used when a button gets selected through keyboard navigation."
    }, {
      "id": "cc22",
      "title": "Icon support",
      "description": "Icons easily communicate the purpose of the button when used next to its label or can be used without text when there’s not enough space. Make sure that the accessibility label is provided when used with an icon only."
    }, {
      "id": "cc23",
      "title": "Disabled",
      "description": "Visually shows that a button is not interactive and restricts it from being pressed."
    }, {
      "id": "cc24",
      "title": "Loading",
      "description": "Used when users have to wait for the result of their action after they press a button. If a spinner is used to display this state make sure that it’s not changing the original button width or height."
    }, {
      "id": "cc25",
      "title": "Full-width",
      "description": "By default buttons take the width of their content, but they should also come with a full width variant that works well in mobile devices."
    }, {
      "id": "cc26",
      "title": "Variants",
      "description": "When using multiple buttons, there should be a way to differentiate between primary and secondary actions. Buttons may play different roles for the user or be used on different types of surfaces and they have to change the way they look."
    }, {
      "id": "cc27",
      "title": "Sizes",
      "description": "Buttons can be used in different areas of the website and may have multiple predefined sizes. On mobile, tappable areas have to be a minimum of 48px to be accessible according to iOS and Android accessibility guidelines."
    }],
    "resources": [{
      "title": "Material Design: Buttons",
      "url": "https://material.io/components/buttons/"
    }, {
      "title": "7 basic rules for button design",
      "url": "https://uxplanet.org/7-basic-rules-for-button-design-63dcdf5676b4"
    }]
  }, {
    "title": "Card",
    "id": "cc28",
    "description": "Cards are used to group information about subjects and their related actions.",
    "checklist": [{
      "id": "cc29",
      "title": "Supports any type of content",
      "description": "Cards are one of the most used components in the product, so they have to be flexible enough to support any other components placed in them."
    }, {
      "id": "cc30",
      "title": "Information structure",
      "description": "No matter how flexible cards are, it’s important for cards to have a specific structure for its elements for product consistency."
    }, {
      "id": "cc31",
      "title": "Supports media sections",
      "description": "One of the most popular scenarios for using cards is mixing them with media content. The most popular options are having a full-width area on top of the content or full-height area at one of the card’s sides."
    }, {
      "id": "cc32",
      "title": "Supplementary actions",
      "description": "Cards can be used with actions usually placed at the bottom of the card, or the card itself can be tappable and represent an action."
    }, {
      "id": "cc33",
      "title": "Responsiveness",
      "description": "On mobile viewports cards are usually full-width in order to save space for the content."
    }],
    "resources": [{
      "title": "Lightning Design System: Cards",
      "url": "https://www.lightningdesignsystem.com/components/cards/"
    }, { "title": "Shopify Polaris: Cards", "url": "https://polaris.shopify.com/components/structure/card" }]
  }, {
    "title": "Carousel",
    "id": "cc34",
    "description": "Carousels stack the same type of items and allows scrolling through them horizontally.",
    "checklist": [{
      "id": "cc35",
      "title": "Navigation controls",
      "description": "Carousels should have easy-to-find navigation controls for scrolling through content."
    }, {
      "id": "cc36",
      "title": "Supports any content",
      "description": "Carousels can be used in different contexts and shouldn’t be limited to a specific child component. In some scenarios you might want items within the same carousel to differ from each other."
    }, {
      "id": "cc37",
      "title": "Items width customisation",
      "description": "For simple products, it might be fine to use multiple predefined sizes for carousel items. For more flexibility, it’s good to provide a way to define a custom width."
    }, {
      "id": "cc38",
      "title": "Touch events support",
      "description": "Carousels should be scrollable on touch devices. Some of the best practices are to use native scrolling and to make sure you’re supporting the same behaviour for all touch devices, not just mobile phones."
    }, {
      "id": "cc39",
      "title": "Keyboard navigation",
      "description": "It should be possible to scroll through content with keyboard arrows when focused on navigation controls."
    }, {
      "id": "cc40",
      "title": "Responsiveness",
      "description": "It’s good practice to hide or reduce the size of navigation controls for mobile viewports to improve the visibility of the content."
    }],
    "resources": [{
      "title": "Carousel and slider design best practices",
      "url": "https://webflow.com/blog/carousel-slider-design-best-practices"
    }, {
      "title": "Designing a User-Friendly Homepage Carousel",
      "url": "https://uxplanet.org/designing-a-user-friendly-homepage-carousel-f664c9f2b50e"
    }, { "title": "GEL: Carousel", "url": "https://www.bbc.co.uk/gel/guidelines/carousel" }]
  }, {
    "title": "Dropdown",
    "id": "cc41",
    "description": "Dropdowns are used to display a contextual subview with a list of actions or content related to the area where the dropdown is.",
    "checklist": [{
      "id": "cc42",
      "title": "Supports any type of content",
      "description": "Dropdowns may be used in a lot of contexts like date pickers, language selection or other product features."
    }, {
      "id": "cc43",
      "title": "Action menu",
      "description": "One of the most used scenarios for dropdowns is providing an action menu for the user, so it’s useful to have this layout defined."
    }, {
      "id": "cc44",
      "title": "Focus trapping",
      "description": "Once the dropdown’s opened, the focus should work only for elements inside the dropdown. When it’s closed, the focus should move to the dropdown trigger."
    }, {
      "id": "cc45",
      "title": "Close action",
      "description": "Either some actions inside the dropdown should close it or there should be a separate close button. Also, it’s good practice to close the dropdown when a user clicks outside."
    }, {
      "id": "cc46",
      "title": "Keyboard navigation",
      "description": "It should be possible to navigate through dropdown children elements with the keyboard and close it with an Esc key."
    }, {
      "id": "cc47",
      "title": "Dynamic positioning",
      "description": "Dropdown content should be displayed based on the current position of the trigger element on the screen and always visible to the user."
    }, {
      "id": "cc48",
      "title": "Responsiveness",
      "description": "Dropdown content should be adapted for mobile viewpoints as it may take a lot of space on desktops."
    }],
    "resources": [{
      "title": "Dropdowns: Design Guidelines",
      "url": "https://www.nngroup.com/articles/drop-down-menus/"
    }, {
      "title": "Atlaskit: Dropdown menu",
      "url": "https://atlaskit.atlassian.com/packages/core/dropdown-menu"
    }, { "title": "Ant Design: Dropdown", "url": "https://ant.design/components/dropdown/" }]
  }, {
    "title": "Icon",
    "id": "cc49",
    "description": "The icon component is a way to align the way iconography static assets are displayed in the product.",
    "checklist": [{
      "id": "cc50",
      "title": "Sizes",
      "description": "Icons should have a number of predefined sizes to provide a holistic experience across the product. Typography pairings may be used for these size values to ensure that they are aligned with the text sizes."
    }, {
      "id": "cc51",
      "title": "Colours",
      "description": "Icons should be using values from the design system colour palette. Using parent element text colour for icon fill colour can make this automatic."
    }]
  }, {
    "title": "Input checkbox",
    "id": "cc52",
    "description": "An input checkbox is a form element used for selecting one or multiple options.",
    "checklist": [{
      "id": "cc53",
      "title": "Checked state",
      "description": "Used when the checkbox is selected and will use its value for the form submission."
    }, {
      "id": "cc54",
      "title": "Disabled state",
      "description": "Prevents checkbox interactions and removes its value from the form submission."
    }, {
      "id": "cc55",
      "title": "Indeterminate state",
      "description": "Used when the checkbox has children selectable elements and only some of them are selected."
    }, {
      "id": "cc56",
      "title": "Label",
      "description": "There should be a text label linked with the checkbox field. Clicking the label should also trigger the checkbox selection."
    }, {
      "id": "cc57",
      "title": "Error state",
      "description": "The error state is used for form validation errors when the error is related to the checkbox field only. Always use a text error along with changing the color of the field."
    }, {
      "id": "cc58",
      "title": "Keyboard support",
      "description": "Checkbox selections should be triggered with the Space key. Using native elements for this should provide this kind of interaction out of the box."
    }, {
      "id": "cc59",
      "title": "Checkbox group",
      "description": "Checkboxes can be grouped to work with multiple values at the same time."
    }],
    "resources": [{
      "title": "Ant Design: Checkbox",
      "url": "https://ant.design/components/checkbox/"
    }, {
      "title": "Checkboxes – GOV.UK Design System",
      "url": "https://design-system.service.gov.uk/components/checkboxes/"
    }, {
      "title": "UX Design: Checkbox and Toggle in Forms",
      "url": "https://uxplanet.org/checkbox-and-toggle-in-forms-f0de6086ac41"
    }]
  }, {
    "title": "Input radio",
    "id": "cc60",
    "description": "An input radio is a form element used for selecting only one option from a list of options.",
    "checklist": [{
      "id": "cc61",
      "title": "Checked state",
      "description": "Used when the radio is selected and will use its value for the form submission. A radio input can’t be unselected by pressing it again."
    }, {
      "id": "cc62",
      "title": "Disabled state",
      "description": "Prevents radio interactions and removes its value from the form submission."
    }, {
      "id": "cc63",
      "title": "Label",
      "description": "There should be a text label linked with the radio field. Clicking the label should also trigger the radio selection."
    }, {
      "id": "cc64",
      "title": "Error state",
      "description": "The error state is used for form validation errors when the error is related to the radio field only. Always use a text error along with changing the color of the field."
    }, {
      "id": "cc65",
      "title": "Keyboard support",
      "description": "Radio selection should be triggered when the Space key is pressed. Using native elements for this should provide this kind of interaction out of the box."
    }, {
      "id": "cc66",
      "title": "Radio group",
      "description": "Radio inputs should always be used in a group. If  one of them is selected, it can be deselected only by choosing another radio."
    }],
    "resources": [{
      "title": "Ant Design: Radio",
      "url": "https://ant.design/components/radio/"
    }, {
      "title": "Radios – GOV.UK Design System",
      "url": "https://design-system.service.gov.uk/components/radios/"
    }, { "title": "Radio Buttons UX Design", "url": "https://uxplanet.org/radio-buttons-ux-design-588e5c0a50dc" }]
  }, {
    "title": "Input text",
    "id": "cc67",
    "description": "Input text lets users enter and edit text.",
    "checklist": [{
      "id": "cc68",
      "title": "Disabled state",
      "description": "Prevents input interactions and removes its value from the form submission."
    }, {
      "id": "cc69",
      "title": "Placeholder",
      "description": "When there’s no value entered, show a placeholder with a potential value example. Don’t use placeholders as labels for the inputs."
    }, {
      "id": "cc70",
      "title": "Label",
      "description": "There should be a text label linked with the text field. Clicking the label should move the focus to the field."
    }, {
      "id": "cc71",
      "title": "Error state",
      "description": "The error state is used for form validation errors when the error is related to the text field only. Always use a text error along with changing the colour of the field."
    }, {
      "id": "cc72",
      "title": "Icon support",
      "description": "Icons are used to describe input methods, express a text field state or provide additional functionality."
    }],
    "resources": [{
      "title": "The ultimate guide for text fields in UX — Part I",
      "url": "https://blog.prototypr.io/the-ultimate-guide-for-text-fields-in-ux-part-i-b6e5eb58b0e4"
    }, {
      "title": "Backpack: Text Input",
      "url": "https://backpack.github.io/components/text-input?platform=web"
    }, { "title": "Lightning Design System: Input", "url": "https://www.lightningdesignsystem.com/components/input/" }]
  }, {
    "title": "Input switch",
    "id": "cc73",
    "description": "Input switches toggle the state of a single item. Compared to the input checkbox, their changes usually apply without any additional submission.",
    "checklist": [{
      "id": "cc74",
      "title": "Checked state",
      "description": "Used when an input switch is turned on. It’s better to provide an additional way to indicate the checked state besides changing its colour when applicable."
    }, {
      "id": "cc75",
      "title": "Disabled state",
      "description": "Prevents interacting with an input switch."
    }, {
      "id": "cc76",
      "title": "Label",
      "description": "There should be a text label linked with the switch field. Clicking the label should also trigger the input selection. "
    }, {
      "id": "cc77",
      "title": "Keyboard support",
      "description": "Switch selection should be triggered when the Space key is pressed."
    }],
    "resources": [{
      "title": "UX Design: Checkbox and Toggle in Forms",
      "url": "https://uxplanet.org/checkbox-and-toggle-in-forms-f0de6086ac41"
    }, {
      "title": "Material Design: Switches",
      "url": "https://material.io/components/selection-controls/#switches"
    }, {
      "title": "Shopify Polaris: Setting Toggle",
      "url": "https://polaris.shopify.com/components/actions/setting-toggle"
    }]
  }, {
    "title": "List",
    "id": "cc78",
    "description": "Lists define the layout of the page content or groups of elements stacking them vertically or horizontally.",
    "checklist": [{
      "id": "cc79",
      "title": "Supports any type of content",
      "description": "Lists can be used in any context from page-level layout to managing offsets between granular components. hey should work with any component used inside."
    }, {
      "id": "cc80",
      "title": "Horizontal stacking",
      "description": "Lists can be used for inline elements and they have to manage how they’re stacked horizontally, including handling offsets between multiple rows of elements."
    }, {
      "id": "cc81",
      "title": "Divided variant",
      "description": "On many platforms (especially on mobile) lists with dividers are the best practice advised by the platform guidelines."
    }, {
      "id": "cc82",
      "title": "Supports actionable content",
      "description": "Sometimes lists are used for grouping tappable components, where the whole area of the list item should be clickable."
    }],
    "resources": [{
      "title": "Material Design: List",
      "url": "https://material.io/components/lists/"
    }, { "title": "Cosmos: List", "url": "https://auth0-cosmos.now.sh/docs/#/component/list" }]
  }, {
    "title": "Loading indicator",
    "id": "cc83",
    "description": "The loading indicator shows that an operation’s being performed and how long the process will take.",
    "checklist": [{
      "id": "cc84",
      "title": "Linear and non-linear variants",
      "description": "Depending on the context and the component it’s used for, the loading indicator can be represented either with linear or with a non-linear (e.g. circular) variant."
    }, {
      "id": "cc85",
      "title": "Determinate or indeterminate wait time",
      "description": "In some cases, the wait time can’t be determined. The loading indicator should be shown until the loading finishes or an error happens. In other cases, it’s better to indicate how much time’s left until the loading is done."
    }, {
      "id": "cc86",
      "title": "Light variant",
      "description": "The loading indicator should respect its parent element background and provide a variant to be used on darker background colours."
    }, {
      "id": "cc87",
      "title": "Reduced motion",
      "description": "The loading indicator should be synced with the system motion settings and reduce its animation speed when reduced motion settings are turned on."
    }],
    "resources": [{
      "title": "Audi: Loader",
      "url": "https://www.audi.com/ci/en/guides/user-interface/components/loader.html"
    }, {
      "title": "Shopify Polaris: Progress Bar",
      "url": "https://polaris.shopify.com/components/feedback-indicators/progress-bar"
    }, {
      "title": "Everything you need to know about Loading Animations",
      "url": "https://medium.com/flawless-app-stories/everything-you-need-to-know-about-loading-animations-10db7f9b61e"
    }]
  }, {
    "title": "Modal",
    "id": "cc88",
    "description": "Modals are containers appearing in front of the main content to provide critical information or an actionable piece of content.",
    "checklist": [{
      "id": "cc89",
      "title": "Supports any type of content",
      "description": "Like any other container, modals can be used in different scenarios and you should be able to use it with any other component inside."
    }, {
      "id": "cc90",
      "title": "Supplementary actions",
      "description": "Since content in the modal may be actionable, it’s important to have an area for action elements. This area is usually located at the bottom of the modal container."
    }, {
      "id": "cc91",
      "title": "Close action",
      "description": "Modals should provide a clear way to be closed as they’re blocking content when open. This may be either a separate close button or one of the supplementary actions."
    }, {
      "id": "cc92",
      "title": "Information structure",
      "description": "Even though modals can be used as an empty container for the content, they need a defined information structure to provide a holistic experience. It may include defining how titles and subtitles look by default or where an action element’s area is."
    }, {
      "id": "cc93",
      "title": "Keyboard navigation support",
      "description": "It should be possible to close a modal by pressing the Esc key and all the focusable elements inside the modal container should be accessible with keyboard navigation."
    }, {
      "id": "cc94",
      "title": "Focus trapping",
      "description": "Once a modal is opened, the focus should be moved to the first element inside the modal and should be looped within the modal container. Closing the modal should return the focus to the last focused element on the page."
    }],
    "resources": [{
      "title": "Shopify Polaris: Modal",
      "url": "https://polaris.shopify.com/components/overlays/modal"
    }, {
      "title": "Mixpanel: Modal",
      "url": "https://design.mixpanel.com/#mp-modal"
    }, {
      "title": "Best Practices for Modals/Overlays/Dialog Windows",
      "url": "https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c"
    }]
  }, {
    "title": "Tabs",
    "id": "cc95",
    "description": "Tabs organise navigation between multiple pages or content sections.",
    "checklist": [{
      "id": "cc96",
      "title": "Active button state",
      "description": "There should be a clear differentiation between selected and unselected tab buttons."
    }, {
      "id": "cc97",
      "title": "Button icon support",
      "description": "Icons help show the purpose of the tab buttons when used next to its label."
    }, {
      "id": "cc98",
      "title": "Equally-sized tab buttons",
      "description": "Tabs can be used in a relatively small-sized container where you need to switch between a definite number of sections. For such scenarios, it’s better to support a variant where the button’s area is divided equally."
    }, {
      "id": "cc99",
      "title": "Keyboard navigation",
      "description": "All tab buttons should be focusable and navigation between the tab’s component should be accessible from the keyboard."
    }, {
      "id": "cc100",
      "title": "Responsiveness",
      "description": "If all tabs on mobile don’t fit into the viewport, users should still have access to all tab buttons. Ways to solve this can be making the button area scrollable for mobile or showing a More button containing a dropdown with the rest of the buttons."
    }],
    "resources": [{
      "title": "Tabs, Used Right",
      "url": "https://www.nngroup.com/articles/tabs-used-right/"
    }, { "title": "Material Design: Tabs", "url": "https://material.io/components/tabs/" }, {
      "title": "Atlaskit: Tabs",
      "url": "https://atlaskit.atlassian.com/packages/core/tabs"
    }]
  }, {
    "title": "Toast",
    "id": "cc101",
    "description": "Toasts provide short meaningful feedback messages about the action results.",
    "checklist": [{
      "id": "cc102",
      "title": "Dismissed automatically",
      "description": "Toast messages shouldn’t interrupt the user flow, block the screen for a long time or require additional action from the user."
    }, {
      "id": "cc103",
      "title": "Action support",
      "description": "Besides displaying the message, toasts may also provide an action related to the message like undoing an action."
    }, {
      "id": "cc104",
      "title": "Handles multiple instances",
      "description": "Even though it doesn’t happen often, toasts can be called from multiple sources at the same time and all resulting toasts should be queued. It’s good practice not to show all the messages at the same time."
    }, {
      "id": "cc105",
      "title": "Accessibility",
      "description": "Toast messages should be announced by the voice assistive technology and their action should be easily accessible from the keyboard."
    }, {
      "id": "cc106",
      "title": "Responsiveness",
      "description": "Toasts should be aligned with the mobile viewport and their action should be easily reachable for tapping."
    }],
    "resources": [{
      "title": "Toasts or snack bars? — designing organic notifications",
      "url": "https://uxdesign.cc/toasts-or-snack-bars-design-organic-system-notifications-1236f2883023"
    }, {
      "title": "Lightning Design System: Toast",
      "url": "https://www.lightningdesignsystem.com/components/toast/"
    }, { "title": "Blueprint JS: Toast", "url": "https://blueprintjs.com/docs/#core/components/toast" }]
  }, {
    "title": "Tooltip",
    "id": "cc107",
    "description": "Tooltips are desktop-only components that display additional information when hovering over or focusing on an element.",
    "checklist": [{
      "id": "cc108",
      "title": "Keyboard hover support",
      "description": "Tooltips should be accessible when an element is focused using the keyboard."
    }, {
      "id": "cc109",
      "title": "Dynamic positioning",
      "description": "Tooltip content should be displayed based on the current position of the trigger element on the screen and always visible to the user."
    }, {
      "id": "cc110",
      "title": "Hover timeout",
      "description": "Having a small timeout before triggering a tooltip will help to prevent occasionally showing tooltips while users move their mouse cursor."
    }, {
      "id": "cc111",
      "title": "Light variant",
      "description": "The tooltip should respect its parent element background and provide a variant to be used on darker background colours."
    }, {
      "id": "cc112",
      "title": "Instant transition for element groups",
      "description": "If there’s a group of elements using tooltips, hovering over another element while a tooltip’s already active shouldn’t trigger the animation."
    }],
    "resources": [{
      "title": "Tooltip Guidelines",
      "url": "https://www.nngroup.com/articles/tooltip-guidelines/"
    }, {
      "title": "Blueprint JS: Tooltip",
      "url": "https://blueprintjs.com/docs/#core/components/tooltip"
    }, { "title": "Material Design: Tooltip", "url": "https://material.io/components/tooltips/" }]
  }]
};
