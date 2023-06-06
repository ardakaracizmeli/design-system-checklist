export default {
  title: "Core components",
  description:
    "Components are the main building blocks for user interfaces. Building a reusable component library enhances your product development workflow by reducing design and tech debt and speeding up the process. Core components can’t be broken down into granular pieces without losing their meaning.",
  sections: {
    "c-accordion": {
      title: "Accordion",
      description:
        "Accordion toggles the visibility of content regions when the trigger element gets pressed.",
      checklist: {
        "c-accordion-active": {
          title: "Active state",
          description:
            "Accordion comes in two states for toggling its content visibility. If an accordion trigger displays an icon, it should be visually distinct between states.",
        },
        "c-accordion-composition": {
          title: "Composition",
          description:
            "Content area should be flexible enough to support various types of content, including other components.",
        },
        "c-accordion-transition": {
          title: "Toggle transition",
          description:
            "Add a subtle animation to help users understand and follow the component behavior when switching between states.",
        },
        "c-accordion-a11y-relation": {
          title: "Content and trigger relation",
          description:
            "Focusing the content area with assistive technologies should announce additional context from the trigger element.",
        },
      },
    },
    "c-alert": {
      title: "Alert",
      description:
        "Alert displays a prominent message about the whole page or its specific area.",
      checklist: {
        "c-alert-colors": {
          title: "Colors",
          description:
            "It's crucial to differentiate the alert's visual appearance based on its role. If you're using background colors for role differentiation, ensure there's enough contrast ratio with the content displayed inside the alert.",
        },
        "c-alert-title": {
          title: "Title support",
          description:
            "Supporting a title can help your user understand the context of the message faster for longer alert messages.",
        },
        "c-alert-icon": {
          title: "Icon support",
          description:
            "Icon illustrates the role of the alert and provides an additional hint about it for colorblind people.",
        },
        "c-alert-actions": {
          title: "Supplementary actions",
          description:
            "Actions in the alert should relate to their text and provide a way to react to the message sent to the user.",
        },
        "c-alert-responsive": {
          title: "Responsiveness",
          description:
            "Alert can adapt to the viewport size, usually becoming full-width for mobile to save some space.",
        },
        "c-alert-a11y-roles": {
          title: "Accessibility roles",
          description:
            "When using assistive technologies, alerts should announce their accessibility role correctly.",
        },
      },
    },
    "c-avatar": {
      title: "Avatar",
      description:
        "Thumbnail of a user photo, organization, or a visual representation of other types of content.",
      checklist: {
        "c-avatar-image": {
          title: "Image",
          description:
            "Avatars should mask an image into their shape and work with any image size since they may get this image from unknown data sources.",
        },
        "c-avatar-image-fallback": {
          title: "Image fallback",
          description:
            "When not passing an image or there is an image loading error, avatars should be able to show a fallback with a different image, icon, or text initials.",
        },
        "c-avatar-sizes": {
          title: "Sizes",
          description:
            "There are many contexts to use an avatar, which require different sizes for the component. Use at least 2-3 different sizes for average projects and ensure there’s at least a small size available.",
        },
        "c-avatar-colors": {
          title: "Colors",
          description:
            "A background color should be applied to the avatar shape when used without an image. Make sure that icons and text have enough contrast ratio with the background according to the WCAG AA standard.",
        },
        "c-avatar-shape": {
          title: "Shape",
          description:
            "Avatars might support multiple shapes, like square or circle, based on the area they are used in.",
        },
        "c-avatar-group": {
          title: "Avatar groups",
          description:
            "Multiple avatars can be stacked together to represent a group of users.",
        },
        "c-avatar-a11y-label": {
          title: "Accessibility label",
          description:
            "Avatar should provide an accessibility label when used for non-decorative images and has no text representation of its contents.",
        },
      },
    },
    "c-badge": {
      title: "Badge",
      description:
        "Compact element that represents the status of an object or user input.",
      checklist: {
        "c-badge-colors": {
          title: "Colors",
          description:
            "Badges may play various roles in your product, and having a predefined color for each role should help users understand their meaning. When changing colors, make sure the text has enough contrast ratio with the background according to the WCAG AA standard.",
        },
        "c-badge-variants": {
          title: "Variants",
          description:
            "Based on where in the product badges are rendered, you might support multiple component variants. For example, you can have some badges using a faded background to avoid drawing too much attention.",
        },
        "c-badge-sizes": {
          title: "Sizes",
          description:
            "Badges can come in multiple sizes depending on where a badge is used. For example, you can use the large size for marketing pages.",
        },
        "c-badge-icon-support": {
          title: "Icon support",
          description:
            "To better illustrate the meaning of a badge, you can display an icon next to the text. Make sure that for small badges, icon contents are still recognizable.",
        },
        "c-badge-dismiss": {
          title: "Dismissible action",
          description:
            "Badges can be used as a dynamic way to display selected values, and there should be a way to dismiss them.",
        },
        "c-badge-empty": {
          title: "Empty state",
          description:
            "Badges can be used without any text content inside. That usually requires changing their styles to preserve the correct shape.",
        },
        "c-badge-positioning": {
          title: "Positioning",
          description:
            "When used as a status badge, like a notification indicator – you should be able to position it relative to those elements.",
        },
      },
    },
    "c-button": {
      title: "Button",
      description: "Interactive element used for single-step actions.",
      checklist: {
        "c-button-colors": {
          title: "Colors",
          description:
            "Buttons may play various roles in your product, and having a predefined color for each role should help users understand their meaning. When changing colors, make sure the text has enough contrast ratio with the background according to the WCAG AA standard.",
        },
        "c-button-variants": {
          title: "Variants",
          description:
            "When using multiple buttons, there should be a way to differentiate between primary and secondary actions. Buttons may play different roles for the user or be used on various surfaces, and they have to change how they look.",
        },
        "c-button-sizes": {
          title: "Sizes",
          description:
            "Depending on where a button will be used, it can come in multiple sizes. For example, you can use the small size for dense areas of your application.",
        },
        "c-button-icon": {
          title: "Icon support",
          description:
            "Icons easily communicate the button's purpose when used next to its label or can be used without text when there's insufficient space. Ensure the accessibility label is provided when used with an icon only.",
        },
        "c-button-hover": {
          title: "Hover state",
          description:
            "Clearly show that the button is interactive when hovered with a mouse cursor.",
        },
        "c-button-active": {
          title: "Active state",
          description:
            "Provide a visual cue when a button is pressed, used for selecting a value, or toggles other elements on the page.",
        },
        "c-button-loading": {
          title: "Loading state",
          description:
            "Indicate when users have to wait for the result of their action after pressing a button. If a spinner is used to display this state, ensure it’s not changing the original button width or height.",
        },
        "c-button-disabled": {
          title: "Disabled state",
          description:
            "Visually shows that the button is not interactive and restricts it from being pressed.",
        },
        "c-button-a11y-role": {
          title: "Accessibility role",
          description:
            "Button should correctly announce the button or link accessibility roles and automatically resolve it based on the properties passed to it.",
        },
        "c-button-a11y-focus": {
          title: "Focus indicator",
          description:
            "Button should have a visible focus indicator when it’s focused using the keyboard or assistive technologies.",
        },
      },
    },
    "c-breadcrumbs": {
      title: "Breadcrumbs",
      description:
        "Top-level product navigation that helps user understand the location of the current page and navigate back to its parents.",
      checklist: {
        "c-breadcrumbs-icon": {
          title: "Icon support",
          description:
            "Icons help to communicate the roles of the pages to which breadcrumbs items link. Most of the time, you want to ensure they’re used consistently, not only for random items in the list.",
        },
        "c-breadcrumbs-disabled": {
          title: "Disabled state",
          description:
            "Each item in the list can be disabled separately to prevent users from navigating to the page.",
        },
        "c-breadcrumbs-collapsed": {
          title: "Collapsed state",
          description:
            "If breadcrumbs items don’t fit into the parent container, the list should support collapsing items only to keep the relevant ones visible to the user.",
        },
        "c-breadcrumbs-separator": {
          title: "Custom separator",
          description:
            "Depending on the usage context, items in the breadcrumbs list can use different separator styles.",
        },
      },
    },
    "c-calendar": {
      title: "Calendar",
      description:
        "Grid displaying days in one or more months and allow users to select a single date or a date range",
      checklist: {
        "c-calendar-modes": {
          title: "Display modes",
          description:
            "Calendar might be used in various product areas and viewports. Make sure to support different display modes for rendering more than one month or a vertical layout.",
        },
        "c-calendar-selected": {
          title: "Selected state",
          description:
            "Calendar should support a single date and a selection range. Selected dates should be visually highlighted, and the range between selected dates should be visible to the users.",
        },
        "c-calendar-month-selection": {
          title: "Month selection",
          description:
            "To help users navigate longer date ranges, the calendar should provide an easy way to switch displayed months.",
        },
        "c-calendar-day-names": {
          title: "Day names",
          description:
            "Provide short labels for the weekday names in addition to the date numbers to let users easier navigate the date selection.",
        },
        "c-calendar-i18n": {
          title: "Internationalisation",
          description:
            "Calendars should be localized for all country regions supported by the product. That includes date formats and correct ordering of the weekdays.",
        },
        "c-calendar-a11y-keyboard": {
          title: "Keyboard navigation",
          description:
            "Calendar dates should be focusable with keyboard and assistive technologies. Further navigation on the dates should happen with keyboard arrows or screen reader navigation and support switching the month by navigating out of a column or a row.",
        },
        "c-calendar-a11y-state": {
          title: "State announcement",
          description:
            "Selected dates should be announced by the assistive technologies when they get focused.",
        },
      },
    },
    "c-card": {
      title: "Card",
      description:
        "Container to group information about subjects and their related actions.",
      checklist: {
        "c-card-composition": {
          title: "Content composition",
          description:
            "Content area should be flexible enough to support various types of content, including other components.",
        },
        "c-card-media-sections": {
          title: "Media sections",
          description:
            "Cards are frequently used with media content. The most popular options are having a full-width area on top of the content or an area at one of the card’s sides.",
        },
        "c-card-actions": {
          title: "Supplementary actions",
          description:
            "Cards can be used with actions usually placed at the bottom of the card, or the card itself can be tappable and represent an action.",
        },
        "c-card-responsive": {
          title: "Responsiveness",
          description:
            "On mobile viewports, cards are usually full-width to save space for the content.",
        },
        "c-card-groups": {
          title: "Card groups",
          description:
            "Multiple cards can be grouped in a single list of content sections.",
        },
      },
    },
    "c-carousel": {
      title: "Carousel",
      description:
        "Horizontal scrollable areas used for displaying grouped content.",
      checklist: {
        "c-carousel-navigation": {
          title: "Navigation controls",
          description:
            "Carousels should be accessible for navigating its content on devices that work with the mouse instead of touch events.",
        },
        "c-carousel-composition": {
          title: "Item composition",
          description:
            "Content area of the carousel items should be flexible enough to support various types of content, including other components.",
        },
        "c-carousel-item-size": {
          title: "Item sizes",
          description:
            "Layout of the items should be flexible to support different types of content. For mobile devices, make sure to show a part of the carousel item that doesn’t fit into the viewport to indicate the scrollable area.",
        },
        "c-carousel-touch": {
          title: "Touch navigation",
          description:
            "Carousel content should be rendered inside a scrollable area to support touch events.",
        },
        "c-carousel-responsive": {
          title: "Responsiveness",
          description:
            "Carousel items layout might require adjustments based on the available space.",
        },
        "c-carousel-a11y-keyboard-navigation": {
          title: "Keyboard navigation",
          description:
            "Keyboard and assistive technologies users should be able to navigate the carousel content without clicking on the navigation controls.",
        },
      },
    },
    "c-checkbox": {
      title: "Checkbox",
      description:
        "Form field used to select one or multiple values from the list.",
      checklist: {
        "c-checkbox-label": {
          title: "Label",
          description:
            "There should be a text label linked with the checkbox field. Clicking the label should also trigger the checkbox selection. If the label is not rendered on the page, assistive technologies should still announce it.",
        },
        "c-checkbox-checked": {
          title: "Checked state",
          description:
            "Display when the checkbox gets selected and is used for the form submission.",
        },
        "c-checkbox-error": {
          title: "Error state",
          description:
            "Use an error state for form validation when the error is related to the checkbox field. Always use a text error along with a different field color.",
        },
        "c-checkbox-disabled": {
          title: "Disabled state",
          description:
            "Use a disabled state to prevent checkbox interactions and remove its value from the submitted form values.",
        },
        "c-checkbox-indeterminate": {
          title: "Indeterminate state",
          description:
            "Visually display when the checkbox has children selectable elements and only some are selected.",
        },
        "c-checkbox-group": {
          title: "Checkbox group",
          description:
            "Checkboxes can be grouped to work with multiple values at the same time.",
        },
        "c-checkbox-a11y-keyboard": {
          title: "Keyboard support",
          description:
            "Checkbox selections should be triggered with the keyboard. Using native elements for this should provide this kind of interaction automatically.",
        },
      },
    },
    "c-divider": {
      title: "Divider",
      description: "Element for visual content separation",
      checklist: {
        "c-divider-direction": {
          title: "Direction",
          description:
            "Dividers should separate both horizontal and vertical lists of content.",
        },
        "c-divider-a11y-role": {
          title: "Accessibility role",
          description:
            "If the divider is playing a non-decorative role in the layout, its role should be announced by the assistive technologies.",
        },
      },
    },
    "c-dropdown": {
      title: "Dropdown",
      description: "List of contextual actions that users can trigger.",
      checklist: {
        "c-dropdown-composition": {
          title: "Content composition",
          description:
            "Dropdowns may be used for context menus, product navigation, and other purposes. Their content area should be flexible enough to support various types of content, including other components.",
        },
        "c-dropdown-hover": {
          title: "Hover trigger",
          description:
            "Dropdown should support displaying its content on hover events. The same behavior should happen for keyboard users once its trigger gets focused.",
        },
        "c-dropdown-positioning": {
          title: "Dynamic positioning",
          description:
            "Dropdown content should be displayed based on the current position of the trigger element on the screen and always stay visible to the user.",
        },
        "c-dropdown-responsive": {
          title: "Responsiveness",
          description:
            "Dropdown content should be adjusted if it doesn’t fit the screen the same way on mobile devices as on desktop.",
        },
        "c-dropdown-a11y-focus": {
          title: "Focus trapping",
          description:
            "Once dropdown content is opened, the focus ring should move inside its content area and return to the trigger element when closed.",
        },
        "c-dropdown-a11y-keyboard": {
          title: "Keyboard navigation",
          description:
            "Dropdown should be accessible for keyboard and assistive technologies. Users should be able to close the dropdown using a separate close action, or once they tab outside the content area.",
        },
      },
    },
    "c-icon": {
      title: "Icon",
      description: "Wrapper for SVG assets to control their appearance",
      checklist: {
        "c-icon-colors": {
          title: "Colors",
          description:
            "Icons should support color values available in design system tokens. Additionally, it’s a good practice to support color inheritance from their parent element.",
        },
        "c-icon-sizes": {
          title: "Sizes",
          description:
            "Icons should have several predefined sizes to provide a holistic experience across the product. Typography pairings may be used for these size values to ensure they align with the text sizes.",
        },
        "c-icon-a11y-decoration": {
          title: "Interactivity",
          description:
            "Icons are used as decorative elements most of the time. If an icon is meant to be interactive – that functionality should be included using buttons, links, or other interactive components.",
        },
      },
    },
    "c-image": {
      title: "Image",
      description:
        "Utility for displaying images and controlling their behavior.",
      checklist: {
        "c-image-sizes": {
          title: "Sizes",
          description:
            "Image should be flexible in terms of supported sizes. Besides just supporting width and height – add support for aspect ratio to scale its proportions based on the parent element dynamically.",
        },
        "c-image-fallback": {
          title: "Image fallback",
          description:
            "Display a fallback when the image URL is incorrect or undefined. That can be an empty box with a background, an icon, or a static placeholder image.",
        },
        "c-image-density": {
          title: "Screen density support",
          description:
            "Depending on the screen density, you should support loading multiple image assets of different sizes and serve the relevant one to the user.",
        },
        "c-image-a11y-alt": {
          title: "Alt text",
          description:
            "When the image is non-decorative, it should provide an alt text describing the picture contents.",
        },
      },
    },
    "c-link": {
      title: "Link",
      description:
        "Interactive text element used for navigation within the text paragraphs.",
      checklist: {
        "c-link-icon": {
          title: "Icon support",
          description:
            "An icon can be used next to the link to communicate the purpose of the link. Icons shouldn’t be used inside a link without a text label.",
        },
        "c-link-colors": {
          title: "Colors",
          description:
            "Links may play various roles in your product, and having a predefined color for each role should help users understand their meaning. Since the link is a text element, it should be able to automatically inherit the color defined by its parent element, the same as other text content.",
        },
        "c-link-disabled": {
          title: "Disabled state",
          description:
            "Visually shows that the link is not interactive and restricts it from being pressed.",
        },
        "c-link-font-inheritance": {
          title: "Font inheritance",
          description:
            "Links should be able to inherit the typography styles when used as a part of the text element.",
        },
        "c-link-multiline": {
          title: "Multiline display",
          description:
            "When used inside a text paragraph, links should support multiline display without breaking the text flow.",
        },
        "c-link-a11y-role": {
          title: "Accessibility role",
          description:
            "Links should correctly announce the button or link accessibility roles automatically resolve it based on the properties passed to it.",
        },
      },
    },
    "c-list": {
      title: "List",
      description: "List is used to display a list of items.",
      checklist: {
        "c-list-order": {
          title: "Order",
          description:
            "List items can use bulleted, numbered, and other styles and types of ordering.",
        },
        "c-list-composition": {
          title: "Content cmposition",
          description:
            "List item content areas should be flexible enough to support various types of content, including other components.",
        },
        "c-list-a11y-role": {
          title: "Accessibility role",
          description:
            "Assistive technologies should announce lists with the correct role and number of items displayed.",
        },
      },
    },
    "c-loading-indicator": {
      title: "Loading indicator",
      description:
        "Animated element that communicates progress without telling how long the process will take.",
      checklist: {
        "c-loading-indicator-colors": {
          title: "Colors",
          description:
            "Loading indicators might be used inside the elements with various roles and follow their color scheme.",
        },
        "c-loading-indicators-sizes": {
          title: "Sizes",
          description:
            "Loading indicators might provide multiple sizes, depending on the size of the areas where the loading indicator is rendered.",
        },
        "c-loading-indicator-time": {
          title: "Loading duration",
          description:
            "In some cases, the wait time can’t be determined. The loading indicator should be shown until the loading finishes or an error happens. In other cases, it’s better to indicate the time left until the loading is finished.",
        },
        "c-loading-indicator-a11y-reduced-motion": {
          title: "Reduced motion",
          description:
            "The loading indicator should be synced with the system motion settings and reduce its animation speed when reduced motion settings are turned on.",
        },
        "c-loading-indicator-a11y-label": {
          title: "Accessibility label",
          description:
            "If the loading indicator is standalone – provide an accessibility label for the content area it’s loading.",
        },
      },
    },
    "c-modal": {
      title: "Modal",
      description:
        "Container appearing in front of the main content to provide critical information or an actionable piece of content.",
      checklist: {
        "c-modal-composition": {
          title: "Content composition",
          description:
            "The main content area should be flexible enough to support various types of content, including other components.",
        },
        "c-modal-actions": {
          title: "Supplementary actions",
          description:
            "Since content in the modal may be actionable, it’s essential to have an area for action elements. This area is usually located at the bottom of the modal container.",
        },
        "c-modal-close": {
          title: "Close action",
          description:
            "Modals should provide a straightforward way to close, as they block content when open. This may be either a separate close button or one of the supplementary actions.",
        },
        "c-modal-positioning": {
          title: "Positioning",
          description:
            "Modals can be positioned in the center of the screen or displayed as sliding sheets on either side of the screen.",
        },
        "c-modal-sizes": {
          title: "Sizes",
          description:
            "Provide support for changing the modal height and width based on the content you display.",
        },
        "c-modal-a11y-focus": {
          title: "Focus trapping",
          description:
            "When the modal gets opened, the user focus should move to the first focusable element and stay trapped inside it. When the modal is closed, the focus should return to the last active element.",
        },
        "c-modal-a11y-keyboard": {
          title: "Keyboard navigation",
          description:
            "It should be possible to close a modal by pressing the Esc key, and all the focusable elements inside the modal container should be accessible with keyboard navigation.",
        },
        "c-modal-a11y-labels": {
          title: "Title and subtitle labeling",
          description:
            "Modals should use the correct accessibility role, and they should be labeled by the title and subtitle elements. If there is no visible title or subtitle, it may use an accessibility label instead.",
        },
      },
    },
    "c-pagination": {
      title: "Pagination",
      description: "Pagination enables a selection from a range of pages",
      checklist: {
        "c-pagination-selected": {
          title: "Selected page state",
          description:
            "Visually highlight the selected page in the list and make it non-interactive.",
        },
        "c-pagination-ranges": {
          title: "Page display ranges",
          description:
            "Define the ranges for pages rendered around the selected page. It helps render only a limited number of pages but lets the users navigate faster than moving by 1 page at a time.",
        },
        "c-pagination-amount": {
          title: "Amount of items per page",
          description:
            "Provide an option to select the number of paginated items displayed on the page.",
        },
        "c-pagination-indeterminate": {
          title: "Indeterminate amount of pages",
          description:
            "When you don’t know the total number of available pages beforehand, use a different display mode to navigate pages individually.",
        },
        "c-pagination-a11y-label": {
          title: "Full page label announcements",
          description:
            "Pagination should provide clear, dynamic labels for each page for assistive technologies instead of just announcing the number without context.",
        },
        "c-pagination-a11y-state": {
          title: "State announcement",
          description:
            "Pagination should announce when a selected page is focused.",
        },
      },
    },
    "c-progress": {
      title: "Progress bar",
      description:
        "Bar displaying progress for a task that takes a long time or consists of several steps.",
      checklist: {
        "c-progress-label": {
          title: "Label",
          description:
            "Provide support for visually displaying a label explaining what a progress bar is responsible for.",
        },
        "c-progress-sizes": {
          title: "Sizes",
          description:
            "Loading indicators might provide multiple sizes, depending on the size of the areas where the loading indicator is rendered.",
        },
        "c-progress-duration": {
          title: "Duration",
          description:
            "In some cases, the wait time can’t be determined. The loading indicator should be shown until the loading finishes or an error happens. In other cases, it’s better to indicate the time left until the loading is complete.",
        },
        "c-progress-a11y-label": {
          title: "Accessibility label",
          description:
            "Provide support for adding an accessibility label in case you can’t display a label in the interface.",
        },
      },
    },
    "c-radio": {
      title: "Input radio",
      description:
        "Radio is a form element used for selecting one option from a list.",
      checklist: {
        "c-radio-label": {
          title: "Label",
          description:
            "There should be a text label linked with the radio field. Clicking the label should also trigger the checkbox selection. If the label is not rendered on the page, assistive technologies should still announce it.",
        },
        "c-radio-checked": {
          title: "Checked state",
          description:
            "Display when the radio gets selected and is used for the form submission.",
        },
        "c-radio-error": {
          title: "Error state",
          description:
            "Use an error state for form validation when the error is related to the radio field. Always use a text error along with a different field color.",
        },
        "c-radio-disabled": {
          title: "Disabled state",
          description:
            "Use a disabled state to prevent radio interactions and remove its value from the submitted form values.",
        },
        "c-radio-group": {
          title: "Radio group",
          description:
            "Radio buttons are always used as a group to avoid locking the selection after one of the radio buttons is checked.",
        },
        "c-radio-a11y-keyboard": {
          title: "Keyboard support",
          description:
            "Radio selection should be triggered with the keyboard. Using native elements for this should provide this kind of interaction automatically.",
        },
      },
    },
    "c-select": {
      title: "Select",
      description:
        "Select lets you choose a single value from a list of options.",
      checklist: {
        "c-select-label": {
          title: "Label",
          description:
            "Text labels linked with the Select field can provide users with additional context. Clicking the label should also trigger the select dropdown.",
        },
        "c-select-error": {
          title: "Error state",
          description:
            "Use an error state for form validation when the error is related to the select only. Display an additional error icon for better accessibility.",
        },
        "c-select-disabled": {
          title: "Disabled state",
          description:
            "Use the disabled state to prevent Select interactions and remove its value from the submitted form values.",
        },
        "c-select-placeholder": {
          title: "Placeholder",
          description:
            "When no value is selected – display a placeholder value. You can use the same placeholder value to let users reset the select value back to the default.",
        },
        "c-select-helper": {
          title: "Helper text",
          description:
            "Provide users with additional context about the select purpose and the requirements for the selection.",
        },
        "c-select-icon": {
          title: "Icon support",
          description:
            "Add an area for displaying an icon at the start of the field to communicate the purpose of the Select as a component or the selected value.",
        },
        "c-select-prefix": {
          title: "Prefix",
          description:
            "Add an area for custom content to make the selection more contextual for the user. For example, you can display country flags in your country code selection.",
        },
        "c-select-sizes": {
          title: "Sizes",
          description:
            "Depending on where select is going to be used, it can come in multiple sizes. For example, you can use the small size for dense areas of your application.",
        },
        "c-select-a11y-label": {
          title: "Accessibility label",
          description:
            "In case you don’t provide a visual text label for select, make sure to provide an accessibility label still describing the purpose of the component.",
        },
      },
    },
    "c-skeleton": {
      title: "Skeleton",
      description:
        "Placeholder replacing page elements while their data is loading.",
      checklist: {
        "c-skeleton-sizes": {
          title: "Sizes",
          description:
            "Skeleton should be able to match components of various sizes available in your design system to avoid unnecessary layout shifts once data is loaded.",
        },
        "c-skeleton-shapes": {
          title: "Shapes",
          description:
            "Skeleton should be able to match components of various shapes available in your design system to keep the loading state aligned with the actual components' layout.",
        },
        "c-skeleton-composition": {
          title: "Composition",
          description:
            "You can compose simple skeletons into more advanced layouts. You don’t have to 1:1 map your application interface with skeletons.",
        },
        "c-skeleton-a11y-motion": {
          title: "Reduced motion",
          description:
            "Reduce or altogether remove the animation for the reduced motion user preference.",
        },
      },
    },
    "c-switch": {
      title: "Switch",
      description:
        "Toggle for immediately changing the state of a single item.",
      checklist: {
        "c-switch-label": {
          title: "Label",
          description:
            "There should be a text label linked with the switch. Clicking the label should also trigger the switch selection. If the label is not rendered on the page, assistive technologies should still announce it.",
        },
        "c-switch-checked": {
          title: "Checked state",
          description:
            "Display when the switch gets selected and activates the underlying functionality. Often, a switch is used to immediately update the data after it’s selected.",
        },
        "c-switch-disabled": {
          title: "Disabled state",
          description: "Use a disabled state to prevent switch interactions.",
        },
        "c-switch-a11y-keyboard": {
          title: "Keyboard navigation",
          description:
            "Switch selection should be triggered with the keyboard. Using native elements for this should provide this kind of interaction automatically.",
        },
        "c-switch-a11y-label": {
          title: "Accessibility label",
          description:
            "In case you don’t provide a visual text label for Switch, make sure to provide an accessibility label still describing the purpose of the component.",
        },
      },
    },
    "c-tabs": {
      title: "Tabs",
      description: "Navigation between multiple pages or content sections.",
      checklist: {
        "c-tabs-composition": {
          title: "Content composition",
          description:
            "Content area should be flexible enough to support various types of content, including other components.",
        },
        "c-tabs-variants": {
          title: "Variants",
          description:
            "To support different rendering contexts, tabs might support multiple variants. For example, they might be rendered as pills when used directly on the page while using an underlined variant for tabs rendered inside cards.",
        },
        "c-tabs-selected": {
          title: "Selected state",
          description:
            "Since tabs always display the content from one of their panels, one of the tab triggers should always be selected and highlighted visually.",
        },
        "c-tabs-disabled": {
          title: "Disabled state",
          description:
            "Tab triggers can be disabled to prevent users from switching to a specific tab panel.",
        },
        "c-tabs-icon": {
          title: "Icon support",
          description:
            "To better illustrate the meaning of each tab, you can display an icon next to the tab trigger text.",
        },
        "c-tabs-equal": {
          title: "Equal width layout",
          description:
            "When used to take the entire width of the parent container, tab triggers can be stretched to take equal horizontal space.",
        },
        "c-tabs-a11y-keyboard": {
          title: "Keyboard support",
          description:
            "When interacting with tabs using the keyboard, they should support arrow navigation to switch between the previous and next panels. The Home and End buttons should also move the selection to the first and last panels, respectively.",
        },
      },
    },
    "c-text-area": {
      title: "Text area",
      description: "Form field to enter and edit multiline text.",
      checklist: {
        "c-text-area-label": {
          title: "Label",
          description:
            "Text labels linked with the text area can provide users with additional context. Clicking the label should move the focus to the field.",
        },
        "c-text-area-error": {
          title: "Error state",
          description:
            "Use an error state for form validation when the error is related only to the Text area.",
        },
        "c-text-area-disabled": {
          title: "Disabled state",
          description:
            "Use a disabled state to prevent text area interactions and remove its value from the submitted form values.",
        },
        "c-text-area-placeholder": {
          title: "Placeholder",
          description:
            "When the text area value is empty – display a placeholder value. Make sure that it’s not used instead of the label.",
        },
        "c-text-area-helper": {
          title: "Helper text",
          description:
            "Provide users with additional context about the Text area purpose and the requirements for the expected value.",
        },
        "c-text-area-sizes": {
          title: "Sizes",
          description:
            "Depending on where the text area will be used, it can come in multiple sizes. For example, you can use the large size for the forms on marketing pages.",
        },
        "c-text-area-a11y-label": {
          title: "Accessibility label",
          description:
            "In case you don’t provide a visual text label for the text area, make sure to provide an accessibility label still describing the purpose of the component.",
        },
      },
    },
    "c-text-field": {
      title: "Text field",
      description: "Form field to enter and edit single-line text.",
      checklist: {
        "c-text-field-label": {
          title: "Label",
          description:
            "Text labels linked with the text field can provide users with additional context. Clicking the label should move the focus to the field.",
        },
        "c-text-field-error": {
          title: "Error state",
          description:
            "Use an error state for form validation when the error is related only to the text field.",
        },
        "c-text-field-disabled": {
          title: "Disabled state",
          description:
            "Use a disabled state to prevent text field interactions and remove its value from the submitted form values.",
        },
        "c-text-field-placeholder": {
          title: "Placeholder",
          description:
            "When the text field value is empty – display a placeholder value. Make sure that it’s not used instead of the label.",
        },
        "c-text-field-helper": {
          title: "Helper text",
          description:
            "Provide users with additional context about the text field purpose and the requirements for the expected value.",
        },
        "c-text-field-icon": {
          title: "Icon support",
          description:
            "Add an area for displaying an icon at the start of the field to communicate the purpose of the text field as a component or the field value.",
        },
        "c-text-field-affix": {
          title: "Prefix / Suffix",
          description:
            "Add an area for custom content to make the selection more contextual for the user. For example, you can display payment providers in the text field for credit card numbers.",
        },
        "c-text-field-sizes": {
          title: "Sizes",
          description:
            "Depending on where the text field will be used, it can come in multiple sizes. For example, you can use the large size for the forms on marketing pages.",
        },
        "c-text-field-a11y-label": {
          title: "Accessibility label",
          description:
            "In case you don’t provide a visual text label for the text field, make sure to provide an accessibility label still describing the purpose of the component.",
        },
      },
    },
    "c-toast": {
      title: "Toast",
      description:
        "Notification message or a piece of information displayed above the page content.",
      checklist: {
        "c-toast-composition": {
          title: "Content composition",
          description:
            "Content area should be flexible enough to support various types of content, including other components.",
        },
        "c-toast-colors": {
          title: "Colors",
          description:
            "Depending on the role of the notification displayed in the toast, it can come in multiple colors. For example, it can be colored red for error notifications.",
        },
        "c-toast-icon": {
          title: "Icon support",
          description:
            "Add an area for displaying an icon at the start of the toast to communicate the purpose of the notification.",
        },
        "c-toast-timeout": {
          title: "Timeout",
          description:
            "Toasts are usually dismissed after a timeout. Make sure to provide a long enough timeout to let the users read the message. If there is no timeout – provide a button to close the notification.",
        },
        "c-toast-stacking": {
          title: "Stacking",
          description:
            "When multiple toasts have been triggered, stack them on top of each other to avoid cluttering the screen.",
        },
        "c-toast-action": {
          title: "Supplementary action",
          description:
            "Actions in the notifications should be contextual to the notification purpose. For example, if you notify the user about deleting content, an action element can help them undo this operation.",
        },
        "c-toast-a11y-focus": {
          title: "Focus management",
          description:
            "When toasts have actions, they should be focusable from the keyboard to trigger them. While the focus is inside the toast container – timeout should get disabled.",
        },
        "c-toast-a11y-motion": {
          title: "Reduced motion",
          description:
            "Reduce or altogether remove the animation for the reduced motion user preference.",
        },
      },
    },
    "c-tooltip": {
      title: "Tooltip",
      description:
        "Contextual text information display on element hover or focus.",
      checklist: {
        "c-tooltip-positioning": {
          title: "Positioning",
          description:
            "When the tooltip default position doesn’t let it fit into the viewport – make sure to dynamically switch its position to another value.",
        },
        "c-tooltip-timeout": {
          title: "Timeout",
          description:
            "Wait briefly before opening the Tooltip to ensure they don’t open while the user moves their cursor around the screen.",
        },
        "c-tooltip-a11y-keyboard": {
          title: "Keyboard support",
          description:
            "Tooltips should be accessible not only on mouse hover but also on the trigger element focus. ",
        },
      },
    },
  },
};
