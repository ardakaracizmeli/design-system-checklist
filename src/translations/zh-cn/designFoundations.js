export default {
  title: "Foundations",
  description:
    "Design assets and tokens that store values for the base layer of your design system, like color and typography. They’re used in components, so changes on this level will resonate throughout the whole system.",
  sections: {
    "df-color": {
      title: "Color",
      description:
        "Not only an efficient way to showcase your brand but also an efficient way to communicate with your users. Color palettes created with purpose over aesthetics in mind can help you develop intuitive design patterns by adding meaning to your interface.",
      checklist: {
        "df-color-a11y": {
          title: "Accessibility",
          description:
            "Make sure to have accessible pairings between the primary colors in your palette. More importantly, ensure that your background and text colors have at least an AA standard contrast ratio.",
        },
        "df-color-semantic": {
          title: "Semantic colors",
          description:
            "Besides your brand colors, make sure to have colors defined and made into variables for functions like disabled states, backgrounds, actions, and high-contrast text.",
        },
        "df-color-dark-mode": {
          title: "Dark mode",
          description:
            "Preparing a dark mode version of your color palette will allow your design system to adapt to the user's OS color preferences.",
        },
        "df-color-guidelines": {
          title: "Guidelines",
          description:
            "Provide guidelines on how and when to use the colors in your palette, what to keep in mind when working with them, and how not to use them.",
        },
      },
    },
    "df-layout": {
      title: "Layout",
      description:
        "A well-thought-out layout goes a long way. Consistent use of a grid and spacing makes it easier for your users to scan the user interface and grasp the content.",
      checklist: {
        "df-layout-units": {
          title: "Units",
          description:
            "Units are the most granular building blocks for layout. Defining a set of values with consistent increments (such as 4, 8, 12, and 16 for a 4-point system) will provide the foundation for designing your grid and spacing values.",
        },
        "df-layout-grid": {
          title: "Grid",
          description:
            "Every layout should sit on a grid that brings order and hierarchy to the interface. Define a grid separately for mobile, tablet, and desktop devices with columns, gutters, and margins so your interface can adapt to any platform quickly.",
        },
        "df-layout-breakpoints": {
          title: "Breakpoints",
          description:
            "Predefine the screen sizes and orientations your grid will adapt to.",
        },
        "df-layout-spacing": {
          title: "Spacing",
          description:
            "Horizontal and vertical rhythm plays a significant role in a layout. You should provide straightforward methods for adding space between interface elements independent of your grid.",
        },
      },
    },
    "df-typography": {
      title: "Typography",
      description:
        "Typography is one of the main ways you surface content in products. A clear hierarchy and contrasting styles in your typography scale will make things easier to read and help with the overall structure of your product. It’s also an opportunity to visualize your brand character and presence.",
      checklist: {
        "df-typography-mobile": {
          title: "Responsiveness",
          description:
            "Desktop devices can usually afford to have bigger font sizes compared to mobile devices. Creating a typography scale that adapts to the viewport size will help with a more meaningful hierarchy and layout.",
        },
        "df-typography-grid": {
          title: "Grid relation",
          description:
            "Font sizes and leading should match your grid to allow better pairing between text and other UI elements. A good example of this is text paired with icons with bounding boxes.",
        },
        "df-typography-readability": {
          title: "Readability",
          description:
            "Optimizing the letter spacing (tracking), line height (leading) and line length for your typography scale will help with the readability of text.",
        },
        "df-typography-performance": {
          title: "Performance",
          description:
            "Custom fonts need to be downloaded before they can be displayed, especially on the web. Make sure that you have sensible fallbacks and fast loading time for your typography assets. Using system fonts solves this performance problem.",
        },
        "df-typography-guidelines": {
          title: "Guidelines",
          description:
            "Provide guidelines on how and when to use the pairings in your typography scale, what to keep in mind when working with them, and how not to use them.",
        },
      },
    },
    "df-elevation": {
      title: "Elevation",
      description:
        "Elevation controls the relative distance between two surfaces along the z-axis. In light mode, it’s usually highlighted by the shadow value applied to a surface, while in dark mode, it’s communicated using the background color value.",
      checklist: {
        "df-elevation-shadows": {
          title: "Shadows",
          description:
            "Provide multiple shadow values based on the supported elevation levels. Most of the time, you will need 3 to 4 elevation levels in your product.",
        },
        "df-elevation-background": {
          title: "Background colors",
          description:
            "Each shadow value should have a linked background color. In light mode, these colors might all resolve to the white color since it’s used together with the shadow. In dark mode, they will be used instead of the shadow to communicate the z-axis distance of a surface.",
        },
        "df-elevation-z": {
          title: "Z-index",
          description:
            "Define a system of z-index values to control which elements have priority to be rendered on top of the others.",
        },
      },
    },
    "df-motion": {
      title: "Motion",
      description:
        "Shared motion values provide a more coherent user experience and better alignment with the brand.",
      checklist: {
        "df-motion-easing": {
          title: "Easing",
          description:
            "Provide standard easing functions used across the system for component transitions. As a start, you can use standard, accelerated and decelerated functions that should cover common component use cases.",
        },
        "df-motion-duration": {
          title: "Duration",
          description:
            "Define multiple values for your animation duration to keep the component transitions consistent across the product",
        },
        "df-motion-a11y": {
          title: "Accessibility",
          description:
            "Pay attention to the user's reduced motion preferences and either make the animations less prominent or remove them altogether.",
        },
      },
    },
    "df-iconography": {
      title: "Iconography",
      description:
        "Icons are symbols that represent functionality or content. They’re especially recognizable and helpful in user interfaces since their meaning can be understood at a glance. Though they can be used just for decoration, their full potential can be realized when they’re used meaningfully and consistently.",
      checklist: {
        "df-iconography-a11y": {
          title: "Accessibility",
          description:
            "For icons that convey a meaning or serve a function, offer a default accessible name that expresses that same meaning or function. Screen readers and other assistive technologies may use this name to orient the user about the interface. For purely decorative icons, a name is not required. If your design system exports front-end code, ensure that the icon name is included, for example, using an aria-label.",
        },
        "df-iconography-style": {
          title: "Style",
          description:
            "Make sure that your icon family makes visual sense as a whole. Picking an outlined or filled style and sticking with it will lead to better visual consistency and predictability.",
        },
        "df-iconography-naming": {
          title: "Naming",
          description:
            "Name your icons based on their communicative purpose rather than how they look. For instance, a triangular media player plays button icon should be named 'play,' not 'triangle.' You can still add related keywords to improve discoverability.",
        },
        "df-iconography-grid": {
          title: "Relation with grid",
          description:
            "Draw your icons in a bounding box that plays well with your grid. This makes for a better pairing with other UI elements. A good example would be icons with bounding boxes paired with text.",
        },
        "df-iconography-keywords": {
          title: "Keywords",
          description:
            "Adding keywords will improve the discoverability of each icon and provide a better user experience for anyone using your system.",
        },
        "df-iconography-reserved": {
          title: "Reserved icons",
          description:
            "Reserving icons representing common actions will prevent their use in any other context. System icons for navigation or adding and deleting are good examples. This leads to a more intuitive user experience.",
        },
        "df-iconography-guidelines": {
          title: "Guidelines",
          description:
            "Provide guidelines on how and when to use icons, what to keep in mind when working with them, and how not to use them.",
        },
      },
    },
  },
};
